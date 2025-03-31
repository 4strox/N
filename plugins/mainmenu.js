// *▧ ᴛɪᴍᴇ* : ${getHarareTime()} ⌛
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const fs = require('fs');
const path = require('path');

function getHarareTime() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Harare',
        hour12: true, // Use 12-hour format (optional)
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}

// Function to fetch version from package.json
async function fetchVersion() {
    try {
        const packageJsonUrl = 'https://raw.githubusercontent.com/mrfrank-ofc/SUBZERO-BOT/main/package.json';
        const response = await axios.get(packageJsonUrl);
        const packageJson = response.data;
        return packageJson.version || 'Unknown';
    } catch (error) {
        console.error("Error fetching version:", error);
        return 'Unknown';
    }
}

cmd({
    pattern: "menu",
    desc: "subzero menu",
    alias: "help",
    category: "menu",
    react: "✅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch version dynamically
        const version = await fetchVersion();

        // Calculate total commands from the commands collection (supports both arrays and objects)
        const totalCommands = Array.isArray(commands) ? commands.length : Object.keys(commands).length;

        let dec = `

       \`\`\`${config.BOT_NAME}\`\`\`
    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ғʀᴀɴᴋ (🇿🇼)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}* 
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB 
▧ *ᴠᴇʀsɪᴏɴ* : *${version}* 
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())} 
▧ *ᴄᴏᴍᴍᴀɴᴅs* : ${totalCommands}
⟣──────────────────⟢

> ＳＵＢＺＥＲＯ - ＭＤ- ＢＯＴ

⟣──────────────────⟢
${readMore}

*🏮 \`SUBZERO DOWNLOADER\` 🏮* 

╭─────────────···◈
*┋* *⬡ ғʙ*
*┋* *⬡ ɪɴꜱᴛᴀ*
*┋* *⬡ sᴘᴏᴛɪғʏ*
*┋* *⬡ ᴠɪᴅᴇᴏ*
*┋* *⬡ ɢᴅʀɪᴠᴇ*
*┋* *⬡ ᴛᴡɪᴛᴛᴇʀ*
*┋* *⬡ ᴛɪᴋᴛᴏᴋ*
*┋* *⬡ ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *⬡ ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
*┋* *⬡ ꜱᴏɴɢ*
*┋* *⬡ ᴘʟᴀʏ*
*┋* *⬡ ᴘʟᴀʏ2*
*┋* *⬡ ᴘʟᴀʏ3*
*┋* *⬡ ᴠɪᴅᴇᴏ*
*┋* *⬡ ᴠɪᴅᴇᴏ2*
*┋* *⬡ ɢɪᴛᴄʟᴏɴᴇ*
*┋* *⬡ ɪᴍɢ*
*┋* *⬡ ᴀᴘᴋ*
*┋* *⬡ ʏᴛᴍᴘ3*
*┋* *⬡ ʏᴛᴍᴘ4*
*┋* *⬡ ᴘɪɴᴛᴇʀᴇsᴛ*
*┋* *⬡ sᴏɴɢx*
*┋* *⬡ ᴠɪᴅᴇᴏx*
*╰─────────────╶╶···◈*

*🔎 \`SEARCH-CMD\` 🔍* 

╭─────────────···◈
*┋* *⬡ ϙᴜɪᴢ*
*┋* *⬡ ʀɪᴅᴅʟᴇ*
*┋* *⬡ ϙᴜᴏᴛᴇ*
*┋* *⬡ ᴅʏᴋ*
*┋* *⬡ ᴇᴘʟ*
*┋* *⬡ ᴇᴘʟʀᴇsᴜʟᴛs*
*┋* *⬡ ᴇᴘʟᴛᴀʙʟᴇ*
*┋* *⬡ ᴘᴇʀᴘʟᴇxɪᴛʏ*
*┋* *⬡ ɪɢsᴛᴀʟᴋ*
*┋* *⬡ ғʙsᴛᴀʟᴋ*
*┋* *⬡ ᴛᴛsᴛᴀʟᴋ*
*┋* *⬡ ᴡᴀsᴛᴀʟᴋ*
*┋* *⬡ ɢɪᴛsᴛᴀʟᴋ*
*┋* *⬡ ʀᴇᴘᴏsᴛᴀʟᴋ*
*┋* *⬡ ɴᴀsᴀ*
*┋* *⬡ ɴᴇᴡs*
*┋* *⬡ ʙʙᴄ*
*┋* *⬡ ᴛᴇᴄʜɴᴇᴡs*
*┋* *⬡ ᴄᴏᴜɴᴛʀʏ*
*┋* *⬡ ʏᴛꜱ*
*┋* *⬡ ʏᴛᴀ*
*┋* *⬡ ɢᴏᴏɢʟᴇ*
*┋* *⬡ ʟᴏʟɪ*
*┋* *⬡ ɢɪᴛsᴛᴀʟᴋ*
*┋* *⬡ ᴡɪᴋɪᴘᴇᴅɪᴀ*
*┋* *⬡ sʀᴇᴘᴏ*
*┋* *⬡ ᴍᴏᴠɪᴇɪɴғᴏ*
*┋* *⬡ ɢᴏᴏɢʟᴇ*
*┋* *⬡ ʙɪʙʟᴇ*
*┋* *⬡ ᴍᴏᴠɪᴇ*
*┋* *⬡ ᴡᴇᴀᴛʜᴇʀ*
*┋* *⬡ ssᴡᴇʙ*
*┋* *⬡ ɴᴘᴍ*
╰─────────────╶╶···◈*

*🧠 \`AI-CMD\` 🧠* 

╭─────────────···◈
*┋* *⬡ ᴀɪᴅᴇᴛᴇᴄᴛ*
*┋* *⬡ ɢᴘᴛ*
*┋* *⬡ ᴀɪ*
*┋* *⬡ ʙᴏᴛ*
*┋* *⬡ ᴅᴀʀᴋɢᴘᴛ*
*┋* *⬡ ᴠɪsɪᴏɴ*
*┋* *⬡ sᴜʙᴢᴇʀᴏ*
*┋* *⬡ ɢᴇᴍɪɴɪ*
*┋* *⬡ ɢᴇᴍɪɴɪᴘʀᴏ*
*┋* *⬡ ʙɪɴɢ*
*┋* *⬡ ᴄᴏᴘɪʟᴏᴛ*
*┋* *⬡ ᴄʟᴀᴜᴅᴇᴀɪ*
*┋* *⬡ ᴀʀᴛ*
*┋* *⬡ ᴍɪsᴛʀᴀᴀɪ*
*┋* *⬡ ᴍᴇᴛᴀᴀɪ*
*┋* *⬡ ᴄʜᴀᴛɢᴘᴛ*
*┋* *⬡ ɢᴘᴛ3*
*┋* *⬡ ɢᴘᴛ4*
*┋* *⬡ ɢᴘᴛ4ᴏ*
*┋* *⬡ ʟʟᴀᴍᴀ2*
*┋* *⬡ ʟʟᴀᴍᴀ3*
*┋* *⬡ ғʟᴜx*
*┋* *⬡ ғʟᴜxᴘʀᴏ*
*┋* *⬡ ɪᴍᴀɢɪɴᴇ*
*┋* *⬡ ᴅᴀʟʟᴇ*
*┋* *⬡ sᴛᴀʙʟᴇᴅɪғғᴜsɪᴏɴ*
╰─────────────╶╶···◈*

*👨‍💻 \`OWNER-CMD\` 👨‍💻* 

╭─────────────···◈
*┋* *⬡ ᴄʍᴅʟɪsᴛ*
*┋* *⬡ ᴀʟɪᴠᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *⬡ sᴇᴛᴛɪɴɢs*
*┋* *⬡ ᴏᴡɴᴇʀ*
*┋* *⬡ ʀᴇᴘᴏ*
*┋* *⬡ ʙᴏᴛsᴇᴛᴛɪɴɢs*
*┋* *⬡ ꜱʏꜱᴛᴇᴍ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
*┋* *⬡ ꜱᴛᴀᴛᴜꜱ*
*┋* *⬡ ʙʟᴏᴄᴋ*
*┋* *⬡ ᴜɴʙʟᴏᴄᴋ*
*┋* *⬡ sʜᴜᴛᴅᴏᴡɴ*
*┋* *⬡ ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *⬡ sᴇᴛᴍᴏᴅᴇ*
*┋* *⬡ sᴇᴛᴘʀᴇғɪx*
*┋* *⬡ sᴇᴛᴘᴘ*
*┋* *⬡ sᴇᴛᴘᴘᴀʟʟ*
*┋* *⬡ sᴇᴛᴏɴʟɪɴᴇ*
*┋* *⬡ sᴇᴛɴᴀᴍᴇ*
*┋* *⬡ sᴇᴛʙɪᴏ*
*┋* *⬡ ɢʀᴏᴜᴘᴘʀɪᴠᴀᴄʏ*
*┋* *⬡ ᴘʀɪᴠᴀᴄʏsᴇᴛᴛɪɴɢs*
*┋* *⬡ ʙʟᴏᴄᴋʟɪsᴛ*
*┋* *⬡ ɢᴇᴛᴘᴘ*
*┋* *⬡ ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *⬡ ᴊɪᴅ*
*┋* *⬡ ɢᴊɪᴅ*
*┋* *⬡ ʀᴇꜱᴛᴀʀᴛ*
╰─────────────╶╶···◈*

*👥 \`GROUP-CMD\` 👥* 

╭─────────────···◈
*┋* *⬡ ʀᴇᴍᴏᴠᴇ*
*┋* *⬡ ᴅᴇʟᴇᴛᴇ*
*┋* *⬡ ᴀᴅᴅ*
*┋* *⬡ ᴋɪᴄᴋ*
*┋* *⬡ ᴋɪᴄᴋᴀʟʟ*
*┋* *⬡ sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *⬡ sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *⬡ ᴘʀᴏᴍᴏᴛᴇ*
*┋* *⬡ ᴅᴇᴍᴏᴛᴇ*
*┋* *⬡ ᴛᴀɢᴀʟʟ*
*┋* *⬡ ɢᴇᴛᴘɪᴄ*
*┋* *⬡ ɪɴᴠɪᴛᴇ*
*┋* *⬡ ʀᴇᴠᴏᴋᴇ*
*┋* *⬡ ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *⬡ ᴀʟʟʀᴇǫ*
*┋* *⬡ ᴍᴜᴛᴇ*
*┋* *⬡ ᴜɴᴍᴜᴛᴇ*
*┋* *⬡ ʟᴏᴄᴋɢᴄ*
*┋* *⬡ ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *⬡ ʟᴇᴀᴠᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *⬡ ᴊᴏɪɴ*
*┋* *⬡ ʜɪᴅᴇᴛᴀɢ*
*┋* *⬡ ɢɪɴғᴏ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *⬡ sᴇɴᴅᴅᴍ*
*┋* *⬡ ᴏᴘᴇɴᴛɪᴍᴇ*
*┋* *⬡ ᴄʟᴏsᴇᴛɪᴍᴇ*
╰─────────────╶╶···◈*

*📃 \`INFO-CMD\` 📃* 

╭─────────────···◈
*┋* *⬡ ᴍᴇɴᴜ*
*┋* *⬡ ᴀʟʟᴍᴇɴᴜ*
*┋* *⬡ ʟɪsᴛᴍᴇɴᴜ*
*┋* *⬡ ᴀʙᴏᴜᴛ*
*┋* *⬡ sᴄʀɪᴘᴛ*
*┋* *⬡ ʀᴇᴘᴏ*
*┋* *⬡ ᴍʀғʀᴀɴᴋ*
*┋* *⬡ ᴀʟɪᴠᴇ*
*┋* *⬡ ʙᴏᴛɪɴꜰᴏ*
*┋* *⬡ ꜱᴛᴀᴛᴜꜱ*
*┋* *⬡ ꜱᴜᴘᴘᴏʀᴛ*
*┋* *⬡ ᴘɪɴɢ*
*┋* *⬡ ᴘɪɴɢ2*
*┋* *⬡ sᴜʙᴢᴇʀᴏɪɴᴄ*
*┋* *⬡ ꜱʏꜱᴛᴇᴍ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
*┋* *⬡ ᴠᴇʀsɪᴏɴ*
*┋* *⬡ ᴘᴀɪʀ*
*┋* *⬡ ᴘᴀɪʀ2*
*┋* *⬡ ʀᴇᴘᴏʀᴛ*
*┋* *⬡ ʜᴇʟᴘ*
╰─────────────╶╶···◈*

*🍭 \`CONVERTER-CMD\` 🍭* 

╭─────────────···◈
*┋* *⬡ ᴄᴜʀʀᴇɴᴄʏ*
*┋* *⬡ sᴛɪᴄᴋᴇʀ*
*┋* *⬡ sᴛɪᴄᴋᴇʀ2ɪᴍᴀɢᴇ*
*┋* *⬡ ᴠsᴛɪᴄᴋᴇʀ*
*┋* *⬡ ᴛʀᴛ*
*┋* *⬡ ᴛᴛs*
*┋* *⬡ ʟᴏɢᴏᴘʀᴏ*
*┋* *⬡ ᴀᴛᴛᴘ*
*┋* *⬡ ʟᴏɢᴏ*
*┋* *⬡ ʀᴇᴍᴏᴠᴇʙɢ*
*┋* *⬡ ʀᴇᴍɪɴɪ*
*┋* *⬡ ғᴀɴᴄʏ*
*┋* *⬡ ᴠᴠ*
*┋* *⬡ ϙʀ*
*┋* *⬡ ʀᴇᴀᴅϙʀ*
*┋* *⬡ ᴛɪɴʏ*
*┋* *⬡ sʜᴏʀᴛ*
*┋* *⬡ ᴠᴇʀsɪᴏɴ*
*┋* *⬡ ᴛᴇᴍᴘᴍᴀɪʟ*
*┋* *⬡ ᴇɴᴄᴏᴅᴇ*
*┋* *⬡ ᴅᴇᴄᴏᴅᴇ*
*┋* *⬡ ʀɪɴɢᴛᴏɴᴇs*
*┋* *⬡ ᴜʀʟ*
*┋* *⬡ ᴜʀʟ2*
*┋* *⬡ ᴜᴘʟᴏᴀᴅ*
*┋* *⬡ ᴛᴏᴘᴅғ*
╰─────────────╶╶···◈*

*⚙️ \`SUBZERO-SETTINGS\` ⚙️* 

╭─────────────···◈
*┋* *⬡ sᴜʙᴢᴇʀᴏsᴇᴛᴛɪɴɢs*
*┋* *⬡ sᴇᴛᴛɪɴɢs*
*┋* *⬡ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ*
*┋* *⬡ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ  sᴇᴛ*
*┋* *⬡ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
*┋* *⬡ ᴀɴᴛɪᴄᴀʟʟ*
*┋* *⬡ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ*
*┋* *⬡ ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
*┋* *⬡ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
*┋* *⬡ ᴀᴜᴛᴏʀᴇᴘʟʏ*
*┋* *⬡ sᴇᴛᴘʀᴇғɪx*
*┋* *⬡ sᴇᴛᴏᴡɴᴇʀɴᴀᴍᴇ*
*┋* *⬡ sᴇᴛᴏᴡɴᴇʀɴᴜᴍʙᴇʀ*
*┋* *⬡ sᴇᴛᴍᴏᴅᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
*┋* *⬡ ᴘɪɴɢ*
*┋* *⬡ ᴍʀғʀᴀɴᴋ*
*┋* *⬡ ᴏᴡɴᴇʀ*
*┋* *⬡ sᴜʙᴢᴇʀᴏɪɴᴄ*
*┋* *⬡ ᴀʙᴏᴜᴛ*
*┋* *⬡ sᴇᴛᴛɪɴɢs*
*┋* *⬡ ᴠᴇʀsɪᴏɴ*
*┋* *⬡ sᴜᴘᴘᴏʀᴛ*
*┋* *⬡ ᴀʟɪᴠᴇ*
*┋* *⬡ sᴇssɪᴏɴs*
*┋* *⬡ ʀᴇᴘᴏᴛʀᴇᴇ*
*┋* *⬡ ʟɪsᴛᴘʟᴜɢɪɴs*
*┋* *⬡ ᴘʟᴜɢɪɴᴅʟ*
╰─────────────╶╶···◈*

*🔞 \`NSFW-CMD\` 🔞* 

╭─────────────···◈
*┋* *⬡ ᴇᴊᴀᴄᴜʟᴀᴛɪᴏɴ*
*┋* *⬡ ᴘᴇɴɪs*
*┋* *⬡ ᴇʀᴇᴄ*
*┋* *⬡ ɴᴜᴅᴇ*
*┋* *⬡ sᴇx*
*┋* *⬡ ᴄᴜᴛᴇ*
*┋* *⬡ ᴏʀɢᴀsᴍ*
*┋* *⬡ ᴀɴᴀʟ*
*┋* *⬡ sᴜsᴘᴇɴsɪᴏɴ*
*┋* *⬡ ᴋɪss*
*┋* *⬡ xᴠɪᴅᴇᴏ*
╰─────────────╶╶···◈*

*🐛 \`BUG MENU\` ⚙* 

╭─────────────···◈
*┋* * ʙᴜɢs ᴄᴏᴍɪɴɢ sᴏᴏɴ ⚠️*
*┋* 
*┋* *⬡ ᴢᴇʀᴏᴄʀᴀsʜ*
*┋* *⬡ ᴢᴇʀᴏғʀᴇᴇᴢᴇ*
*┋* *⬡ ᴢᴇʀᴏʟᴀɢ*
*┋* *⬡ ᴢɪᴏs*
*┋* *⬡ ᴢᴀɴᴅʀᴏɪᴅ*
*┋* *⬡ ᴢᴋɪʟʟ*
*┋* *⬡ ᴢsᴘᴀᴍ*
*┋* *⬡ ᴢғʟᴏᴏᴅ*
*┋* *⬡ ᴢᴇʀᴏᴇxᴇᴄᴜᴛɪᴏɴ*
*┋* *⬡ ᴢʜᴇᴀᴅsʜᴏʀᴛ*
*┋* *⬡ ᴢᴜɪ*
╰─────────────╶╶···◈*

*━━━━━━━━━━━━━━━━━━━━*⁠⁠⁠⁠
> ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ
*━━━━━━━━━━━━━━━━━━━━━*
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.postimg.cc/WpQLCg85/White-and-Green-Simple-Professional-Business-Project-Presentation.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '🍁『 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 』🍁 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3
        await conn.sendMessage(from, { //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/blob/main/audios/subzero-menu.mp3
            audio: { url: 'https://files.catbox.moe/qda847.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

//  SUBZERO SC BY MR FRANK
