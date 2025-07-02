import config from '../../config.cjs';

const unblock = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['unblock'];

    if (!validCommands.includes(cmd)) return;
    
    if (!isCreator) return m.reply("*📛 THIS IS AN OWNER COMMAND*");

    // Extract the number from the command (either after "unblock" or mentioned/quoted)
    let numberToUnblock = '';
    if (m.mentionedJid.length > 0) {
      numberToUnblock = m.mentionedJid[0];
    } else if (m.quoted) {
      numberToUnblock = m.quoted.sender;
    } else if (text) {
      // Extract numbers from the text (could be after "unblock" command)
      numberToUnblock = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else {
      return m.reply('Please specify a user to unblock by mentioning, quoting, or providing their number after the command.');
    }

    // Unblock the user
    await gss.updateBlockStatus(numberToUnblock, 'unblock')
      .then(async (res) => {
        // Notify command sender in the chat
        await m.reply(`Successfully unblocked ${numberToUnblock.split('@')[0]}.`);
        
        // Notify the unblocked user via PM
        try {
          await gss.sendMessage(numberToUnblock, { 
            text: `You have been unblocked by the bot owner. You can now message the bot again.`
          });
        } catch (pmError) {
          console.log('Could not send PM notification to unblocked user:', pmError);
        }
      })
      .catch((err) => m.reply(`Failed to unblock user: ${err}`));
  } catch (error) {
    console.error('Error:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default unblock;
