import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const profile = async (m, sock) => {
  const prefix = config.PREFIX;
  const pushName = m.pushName || 'User';
  
  const cmd = m.body.startsWith(prefix) 
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "profile") {
    await m.React('🕵'); // React with a detective icon
    
    try {
      // Get user's WhatsApp profile info
      const [userProfile] = await sock.onWhatsApp(m.sender);
      const profilePictureUrl = await sock.profilePictureUrl(m.sender, 'image');
      
      // Newsletter subscription status (simulated)
      const isSubscribed = Math.random() > 0.5; // Random true/false for demo
      const subscriptionStatus = isSubscribed ? "Subscribed ✅" : "Not Subscribed ❌";
      
      // Create profile message
      const profileMessage = `
╭─❖ USER PROFILE ❖─╮
│
│ • Name: ${pushName}
│ • Phone: ${userProfile?.jid.split('@')[0] || 'N/A'}
│ • Newsletter: ${subscriptionStatus}
│
╰───────────────❖

╭─❖ NEWSLETTER FEATURES ❖─╮
│
│ Stay updated with our weekly newsletter!
│ 
│ Benefits:
│ • Exclusive content
│ • Early access to features
│ • Special announcements
│ • Beta testing opportunities
│
│ To subscribe: ${prefix}subscribe
│ To unsubscribe: ${prefix}unsubscribe
│
╰───────────────❖
`;

      // Send profile info with newsletter promotion
      await sock.sendMessage(
        m.from,
        {
          text: profileMessage,
          contextInfo: {
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363315115438245@newsletter',
              newsletterName: "𝕭𝖔𝖙 𝖇𝖞 𝕮𝖆𝖗𝖑",
              serverMessageId: -1,
            },
            forwardingScore: 999,
            externalAdReply: {
              title: "𝕭𝖚𝖉𝖉𝖞 𝖃𝕿𝕽",
              body: "Profile & Newsletter",
              thumbnailUrl: profilePictureUrl || 'https://files.catbox.moe/ptr27z.jpg',
              sourceUrl: 'https://whatsapp.com',
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m }
      );
      
      // If profile picture exists, send it separately
      if (profilePictureUrl) {
        await sock.sendMessage(
          m.from,
          { image: { url: profilePictureUrl }, caption: "Your Profile Picture" },
          { quoted: m }
        );
      }
      
      await m.React('✅'); // React with success icon
      
    } catch (error) {
      console.error("Profile error:", error);
      await sock.sendMessage(
        m.from,
        { text: "Failed to fetch profile information. Please try again later." },
        { quoted: m }
      );
      await m.React('❌'); // React with error icon
    }
  }
};

export default profile;
