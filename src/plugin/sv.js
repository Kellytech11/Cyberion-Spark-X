import config from '../../config.cjs';

const saveCommand = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  
  if (cmd === 'save') {
    if (!m.quoted) return m.reply("❌ Reply to a status to save it.").then(() => {
      Matrix.sendMessage(m.from, { edit: m.key, text: " " }); // Erase error msg too
    });
    
    try {
      const quotedMsg = m.quoted;
      const statusSender = quotedMsg.participant || quotedMsg.author;
      
      // Send saved status to user's PM
      await Matrix.sendMessage(
        m.sender, 
        {
          forward: quotedMsg,
          text: `📌 *Saved by* @${m.sender.split('@')[0]}\n👤 *Posted by* @${statusSender.split('@')[0]}\n\n⚡ *Powered by Carltech*`,
          mentions: [m.sender, statusSender]
        }
      );

      // Stealth edit: Replace "!save" with blank message
      await Matrix.sendMessage(
        m.from,
        { 
          edit: m.key, 
          text: " " // Invisible space
        }
      );

    } catch (error) {
      console.error("Error saving status:", error);
      await Matrix.sendMessage(
        m.sender, 
        { text: "⚠️ Failed to save. Try again later." }
      );
    }
  }
};

export default saveCommand;
