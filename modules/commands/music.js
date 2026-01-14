const fs = require("fs");
const path = require("path");
const axios = require("axios");
const ytSearch = require("yt-search");

module.exports.config = {
    name: "music",
    aliases: ["yt", "ytmusic"],
    version: "1.2.0",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Download music from YouTube (E2EE Compatible)",
    hasPrefix: true,
    permission: 'PUBLIC',
    category: "MEDIA",
    usages: "[url/song name]",
    cooldown: 5,
};

module.exports.run = async function ({ api, message, args }) {
    const { threadID, messageID } = message;

    if (!args.length) {
        return api.sendMessage("❌ Please enter a song name or YouTube URL.", threadID);
    }

    const apiKey = global.config.apiKeys?.priyanshuApi;
    if (!apiKey) {
        return api.sendMessage("❌ API key not found in config.", threadID);
    }

    const input = args.join(" ");
    let videoUrl = input;
    let videoTitle = "";
    let videoDetails = {};
    let searchingMessageInfo = null;

    try {
        const isUrl = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/.test(input);

        // Simple Searching Message (No Reply)
        searchingMessageInfo = await api.sendMessage(isUrl ? "🔍 Processing URL..." : "✅ Apki Request Jari Hai Please wait...", threadID);

        if (!isUrl) {
            const searchResult = await ytSearch(input);
            if (!searchResult || !searchResult.videos.length) {
                if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
                return api.sendMessage("❌ Song not found on YouTube.", threadID);
            }
            const video = searchResult.videos[0];
            videoUrl = video.url;
            videoTitle = video.title;
            videoDetails = {
                duration: video.duration.timestamp,
                views: video.views,
                author: video.author.name,
                ago: video.ago,
            };
        } else {
            try {
                const videoIdMatch = input.match(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/);
                if (videoIdMatch) {
                    const videoId = videoIdMatch[1];
                    const searchResult = await ytSearch({ videoId: videoId });
                    if (searchResult) {
                        videoTitle = searchResult.title;
                        videoDetails = {
                            duration: searchResult.duration.timestamp,
                            views: searchResult.views,
                            author: searchResult.author.name,
                            ago: searchResult.ago,
                        };
                    }
                }
            } catch (e) {}
        }

        const apiUrl = "https://priyanshuapi.xyz/api/runner/youtube-downloader-v2/download";
        const response = await axios.post(
            apiUrl,
            {
                link: videoUrl,
                format: "mp3",
                videoQuality: "360",
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.data || !response.data.success || !response.data.data) {
            if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
            return api.sendMessage("❌ Failed to generate download link.", threadID);
        }

        const { downloadUrl, title, filename } = response.data.data;
        const finalTitle = videoTitle || title || "Unknown Title";
        const formattedViews = videoDetails.views ? new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(videoDetails.views) : "N/A";

        // Details Message (Direct Send, No Reply)
        let infoMsg = ` »»𝑶𝑾𝑵𝑬𝑹««★™  »»𝑺𝑯𝑨𝑨𝑵 𝑲𝑯𝑨𝑵««\n          🥀𝒀𝑬 𝑳𝑶 𝑩𝑨𝑩𝒀 𝑨𝑷𝑲𝑰👉 Title: ${finalTitle}\n`;
        if (videoDetails.duration) infoMsg += `⏱ Duration: ${videoDetails.duration}\n`;
        if (videoDetails.author) infoMsg += `👤 Artist: ${videoDetails.author}\n`;
        if (videoDetails.views) infoMsg += `👀 Views: ${formattedViews}\n`;
        if (videoDetails.ago) infoMsg += `📅 Uploaded: ${videoDetails.ago}`;

        await api.sendMessage(infoMsg, threadID);

        const tempDir = path.join(__dirname, "temporary");
        if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

        const safeFilename = (filename || `${Date.now()}.mp3`).replace(/[^a-zA-Z0-9.-]/g, "_");
        const filePath = path.join(tempDir, safeFilename);

        const writer = fs.createWriteStream(filePath);
        const downloadResponse = await axios({
            method: "GET",
            url: downloadUrl,
            responseType: "stream",
        });

        downloadResponse.data.pipe(writer);

        writer.on("finish", () => {
            fs.stat(filePath, (statErr, stats) => {
                if (statErr || !stats || stats.size === 0) {
                    if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
                    return fs.unlink(filePath, () => { });
                }

                // Sending Only Audio File (No Reply to user message)
                api.sendMessage(
                    {
                        body: `🎧 ${finalTitle}`,
                        attachment: fs.createReadStream(filePath),
                    },
                    threadID,
                    (err) => {
                        if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
                        fs.unlink(filePath, () => {});
                    }
                );
            });
        });

        writer.on("error", (err) => {
            if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
            fs.unlink(filePath, () => { });
        });

    } catch (error) {
        if (searchingMessageInfo) api.unsendMessage(searchingMessageInfo.messageID);
        api.sendMessage("❌ Connection error.", threadID);
    }
};
