
import config from '../../config.cjs';

const readmore = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  
  if (cmd === "readmore") {
    try {
      // Extract the message after the command
      const message = m.body.slice(prefix.length + cmd.length).trim();
      
      if (!message) {
        return await sock.sendMessage(m.from, {
          text: '❌ *Usage:* .readmore [message]\nExample: .readmore how are you carl?',
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999
          }
        }, { quoted: m });
      }
      
      // Create the proper WhatsApp readmore format
      const readmoreMessage = `${message.slice(0, 1)}${String.fromCharCode(8203)}${message.slice(1)}`;
      
      await sock.sendMessage(m.from, {
        text: readmoreMessage,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999
        }
      }, { quoted: m });

    } catch (error) {
      console.error(error);
      await sock.sendMessage(m.from, {
        text: '❌ *Error Occurred*\n\n' +
              '⚠️ ' + error.message,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999
        }
      }, { quoted: m });
    }
  }
}

export default readmore;
