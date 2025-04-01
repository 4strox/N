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

async function getBotVersion() {
    try {
        if (!config.REPO) throw new Error('config.REPO is not defined');
        const repoUrl = config.REPO;
        // Convert GitHub URL to raw URL base
        const baseRawUrl = repoUrl.replace('github.com', 'raw.githubusercontent.com');
        // Try "main" then "master" branch if necessary
        const branches = ['main', 'master'];
        for (const branch of branches) {
            const rawUrl = `${baseRawUrl}/${branch}/package.json`;
            try {
                const { data } = await axios.get(rawUrl);
                if (data && data.version) return data.version;
            } catch (e) {
                // Continue trying next branch
            }
        }
        // Fallback default version if nothing was fetched
        return '3.0.0';
    } catch (error) {
        console.error("Version check error:", error);
        return 'Unknown';
    }
}

cmd({
    pattern: "menua",
    desc: "subzero menu",
    alias: "help",
    category: "menu",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch version dynamically from the repository's package.json
        const version = await getBotVersion();

        // Calculate total commands from the commands collection (supports both arrays and objects)
        const totalCommands = Array.isArray(commands) ? commands.length : Object.keys(commands).length;

        let dec = `

       \`\`\`${config.BOT_NAME}\`\`\`
    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ғʀᴀɴᴋ (🇿🇼)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}* 
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB 
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
*┋* *⬡ ᴄᴏᴘɪʟᴏɴ*
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
*┋* *⬡ &*
*┋* *⬡ ᴠᴠ*
*┋* *⬡ ᴠᴠ2*
*┋* *⬡ sᴀᴠᴇ*
*┋* *⬡ 👀*
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
*┋* *⬡ ᴋɪᴄᴋᴀʟʟ2*
*┋* *⬡ sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *⬡ sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *⬡ ᴘʀᴏᴍᴏᴛᴇ*
*┋* *⬡ ᴅᴇᴍᴏᴛᴇ*
*┋* *⬡ ʜɪᴅᴇᴛᴀɢ*
*┋* *⬡ ᴛᴀɢᴀʟʟ*
*┋* *⬡ ɢᴇᴛᴘᴘ*
*┋* *⬡ ɪɴᴠɪᴛᴇ*
*┋* *⬡ ʀᴇᴠᴏᴋᴇ*
*┋* *⬡ ᴊᴏɪᴎʀᴇǫᴜᴇsᴛs*
*┋* *⬡ ᴀʟʟʀᴇǫ*
*┋* *⬡ ᴍᴜᴛᴇ*
*┋* *⬡ ᴜɴᴍᴜᴛᴇ*
*┋* *⬡ ᴄʟᴏsᴇ
*┋* *⬡ ᴏᴘᴇɴ*
*┋* *⬡ ʟᴇᴀᴠᴇ*
*┋* *⬡ ɢɴᴀᴍᴇ*
*┋* *⬡ ɢᴅᴇsᴄ*
*┋* *⬡ ᴊᴏɪᴎ*
*┋* *⬡ ɢɪɴғᴏ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *⬡ ɢᴇᴛʙɪᴏ
*┋* *⬡ ᴏᴘᴇɴᴛɪᴍᴇ*
*┋* *⬡ ᴄʟᴏsᴇᴛɪᴍᴇ*
╰─────────────╶╶···◈*

*📃 \`INFO-CMD\` 📃* 

╭─────────────···◈
*┋* *⬡ ᴍᴇɴᴜ*
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
*┋* *⬡ ᴛʀᴀɴsʟᴀᴛᴇ*
*┋* *⬡ ᴛᴛs*
*┋* *⬡ ᴀᴛᴛᴘ*
*┋* *⬡ ʟᴏɢᴏ*
*┋* *⬡ ʀᴇᴍᴏᴠᴇʙɢ*
*┋* *⬡ ʀᴇᴍɪɴɪ*
*┋* *⬡ ғᴀɴᴄʏ*
*┋* *⬡ ᴠᴠ*
*┋* *⬡ ᴠᴠ2*
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
*┋* *⬡ ʀᴇᴘᴏʛᴛʀᴇᴇ*
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

*⚠️ \`BUG MENU\` ⚠️* 

╭─────────────···◈
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
> ＭＡＤＥ ＢＹ ＭＲ Ｆʀᴀɴᴋ
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

        // Send audio from provided URL
        await conn.sendMessage(from, {
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
