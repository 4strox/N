const { cmd } = require("../command");
const { isJidGroup } = require('@whiskeysockets/baileys');

cmd({
  pattern: "vv3",
  alias: ["viewonce", 'retrieve','👀','💀'],
  react: '😏',
  desc: "Owner Only - retrieve quoted message to bot's inbox",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isOwner }) => {
  try {
    if (!isOwner) {
      return await client.sendMessage(from, {
        text: "*❌ Command for owner only.*"
      }, { quoted: message });
    }

    if (!match.quoted) {
      return await client.sendMessage(from, {
        text: "*Reply to a view once message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const botInbox = client.user.id; // Bot's own JID (inbox)
    const isGroup = isJidGroup(from);
    const currentTime = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Create context info similar to anti-delete plugin
    let contextInfo = `*⚊❮ VIEW-ONCE MEDIA RETRIEVED ❯⚊*\n\n` +
                     `*🕒 Time:* ${currentTime}\n` +
                     `*📌 Source:* ${isGroup ? 'Group' : 'Private Chat'}\n` +
                     `*👤 Sender:* @${message.sender.split('@')[0]}`;

    if (isGroup) {
      const groupMetadata = await client.groupMetadata(from);
      contextInfo += `\n*👥 Group:* ${groupMetadata.subject}`;
    }

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: contextInfo,
          mimetype: match.quoted.mimetype || "image/jpeg",
          contextInfo: {
            mentionedJid: [message.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: contextInfo,
          mimetype: match.quoted.mimetype || "video/mp4",
          contextInfo: {
            mentionedJid: [message.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false,
          contextInfo: {
            mentionedJid: [message.sender],
            forwardingScore: 999,
            isForwarded: true
          }
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    // Forward to bot's inbox using same pattern as anti-delete
    await client.sendMessage(botInbox, messageContent);
    
    // Notification in original chat
    await client.sendMessage(from, {
      text: "✅ View-once media has been forwarded to my inbox",
      contextInfo: {
        mentionedJid: [message.sender]
      }
    }, { quoted: message });
    
  } catch (error) {
    console.error("vv Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error retrieving view-once message:\n" + error.message
    }, { quoted: message });
  }
});
