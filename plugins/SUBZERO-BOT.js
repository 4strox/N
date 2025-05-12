const { cmd } = require('../command');
const axios = require('axios');
const Config = require('../config');
const GIFTED_DLS = require('gifted-dls');
const gifted = new GIFTED_DLS();

// Optimized Command
cmd(
  {
    pattern: 'dls',
    alias: ['gift', 'ytmp3'],
    desc: 'Download and play audio from YouTube using gifted-dls',
    category: 'media',
    use: '<YouTube URL or search query>',
    filename: __filename,
  },
  async (conn, mek, m, { text, reply }) => {
    try {
      if (!text) return reply('❌ Please provide a YouTube URL or search query');

      await conn.sendMessage(mek.chat, { react: { text: "⏳", key: mek.key } });

      const videoUrl = text.match(/youtu\.?be|youtube\.com/) ? text : await getVideoUrl(text);
      if (!videoUrl) return reply('❌ No results found');

      const res = await gifted.ytmp3(videoUrl);
      if (!res?.success || !res.result?.download_url) return reply('❌ Failed to fetch download link');

      const { title, thumbnail, duration, download_url } = res.result;

      // Send preview message FIRST without waiting
      conn.sendMessage(mek.chat, {
        image: { url: thumbnail },
        caption: `🎶 *Title:* ${title}\n⏱️ *Duration:* ${duration}\n\n_Downloading..._`,
      });

      // Download thumbnail + audio in parallel
      const [thumbRes, audioRes] = await Promise.all([
        axios.get(thumbnail, { responseType: 'arraybuffer' }),
        axios.get(download_url, { responseType: 'arraybuffer' })
      ]);

      const jpegThumbnail = Buffer.from(thumbRes.data, 'binary');

      // Send audio
      await conn.sendMessage(mek.chat, {
        audio: Buffer.from(audioRes.data, 'binary'),
        mimetype: 'audio/mpeg',
        fileName: `${title.substring(0, 64)}.mp3`.replace(/[^\w\s.-]/gi, ''),
        caption: `🎵 *Now Playing:* ${title}`,
        jpegThumbnail,
        ptt: false,
      });

      await conn.sendMessage(mek.chat, { react: { text: "✅", key: mek.key } });

    } catch (error) {
      console.error('Error:', error);
      await conn.sendMessage(mek.chat, { react: { text: "❌", key: mek.key } });
      reply('❌ Failed to download. Try again or use a different link.');
    }
  }
);

// Fast YouTube search fallback
async function getVideoUrl(query) {
  try {
    const search = await axios.get(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
    const videoId = search.data.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/)?.[1];
    return videoId ? `https://youtu.be/${videoId}` : null;
  } catch {
    return null;
  }
}
