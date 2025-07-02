import config from '../../config.cjs';

const block = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['block'];
    if (!validCommands.includes(cmd)) return;
    
    if (!isCreator) return m.reply("*📛 THIS IS AN OWNER-ONLY COMMAND*");

    let user = '';
    if (m.mentionedJid && m.mentionedJid.length > 0) {
      user = m.mentionedJid[0];
    } else if (m.quoted) {
      user = m.quoted.sender;
    } else if (text) {
      const number = text.replace(/[^0-9]/g, '');
      if (!number) return m.reply('Please mention a user, reply to a message, or provide a phone number.');
      if (number.length < 10 || number.length > 15) return m.reply('Please provide a valid phone number.');
      user = number + '@s.whatsapp.net';
    } else {
      return m.reply('Please mention a user, reply to a message, or provide a phone number to block.');
    }

    if (!user.endsWith('@s.whatsapp.net')) {
      user += '@s.whatsapp.net';
    }

    await gss.updateBlockStatus(user, 'block')
      .then(async () => {
        // Reply to the command sender
        await m.reply(`✅ Successfully blocked @${user.split('@')[0]}`, null, { mentions: [user] });
        
        // Send notification to owner's PM
        const ownerJid = config.OWNER_NUMBER + '@s.whatsapp.net';
        const currentTime = new Date().toLocaleString();
        const notificationMsg = `🚨 *BLOCK NOTIFICATION* 🚫\n\n` +
                               `• *Blocked User:* @${user.split('@')[0]}\n` +
                               `• *Blocked By:* @${m.sender.split('@')[0]}\n` +
                               `• *Time:* ${currentTime}\n` +
                               `• *Chat:* ${m.isGroup ? `${m.chat} (Group)` : 'Private Chat'}`;
        
        await gss.sendMessage(ownerJid, { 
          text: notificationMsg,
          mentions: [user, m.sender]
        });
      })
      .catch((err) => m.reply(`❌ Failed to block user: ${err.message || err}`));
  } catch (error) {
    console.error('Error in block command:', error);
    m.reply('❌ An error occurred while processing the block command.');
  }
};

export default block;
