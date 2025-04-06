const { cmd } = require('../command');
const axios = require('axios');
const Config = require('../config');

// Default verses to show when no reference is given
const DEFAULT_VERSES = [
    "John 3:16",
    "Psalm 23:1",
    "Philippians 4:13",
    "Proverbs 3:5",
    "Romans 8:28"
];

cmd(
    {
        pattern: 'bible',
        alias: ['verse', 'scripture'],
        desc: 'Fetch Bible verses - works with or without reference',
        category: 'utility',
        react: '📖',
        use: '[reference] (leave empty for default verse)',
        filename: __filename,
    },
    async (conn, mek, m, { quoted, args, q, reply, from }) => {
        try {
            // Send processing reaction
            await conn.sendMessage(mek.chat, { react: { text: "⏳", key: mek.key } });

            // Select a random default verse if none provided
            const reference = q || DEFAULT_VERSES[Math.floor(Math.random() * DEFAULT_VERSES.length)];
            const apiUrl = `https://kaiz-apis.gleeze.com/api/bible?q=${encodeURIComponent(reference)}`;

            const response = await axios.get(apiUrl);
            
            if (!response.data || !response.data.verse || !response.data.verse.length) {
                return reply('❌ No results found for this reference');
            }

            const verseData = response.data.verse[0];
            const verseReference = `${verseData.book_name} ${verseData.chapter}:${verseData.verse}`;

            // Simple formatted output
            const message = `
📖 *${verseReference}*

${verseData.text.trim()}

${q ? '' : '✨ *Here\'s a verse for you today!* ✨'}
            `;

            await conn.sendMessage(mek.chat, { 
                text: message
            }, { quoted: mek });

            // Send success reaction
            await conn.sendMessage(mek.chat, { react: { text: "✅", key: mek.key } });

        } catch (error) {
            console.error('Error:', error);
            await conn.sendMessage(mek.chat, { react: { text: "❌", key: mek.key } });
            reply('Error fetching verse. Please try again.');
        }
    }
);
