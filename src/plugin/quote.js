import config from '../../config.cjs';

const quotedChat = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    
    // Local array of wise quotes (100+ quotes)
   const wiseQuotes = [
  // Pain & Struggle
  "The wound is the place where the Light enters you. - Rumi",
  "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. - Khalil Gibran",
  "The lotus flower blooms most beautifully from the deepest and thickest mud. - Buddhist Proverb",
  "Your pain is the breaking of the shell that encloses your understanding. - Khalil Gibran",
  "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
  
  // Existential & Life Meaning
  "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde",
  "Man is not worried by real problems so much as by his imagined anxieties about real problems. - Epictetus",
  "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
  "You will never be happy if you continue to search for what happiness consists of. - Albert Camus",
  "Hell is other people. - Jean-Paul Sartre",
  
  // Emotional Depth
  "Tears are words that need to be written. - Paulo Coelho",
  "The quieter you become, the more you can hear. - Ram Dass",
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "We don't see things as they are, we see them as we are. - Anaïs Nin",
  "The most painful goodbyes are the ones never said but always felt.",

  // Human Nature
  "All cruelty springs from weakness. - Seneca",
  "No man chooses evil because it is evil; he only mistakes it for happiness. - Mary Wollstonecraft",
  "We accept the love we think we deserve. - Stephen Chbosky",
  "People will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
  "The opposite of love is not hate, it's indifference. - Elie Wiesel",

  // Growth & Transformation
  "You cannot swim for new horizons until you have courage to lose sight of the shore. - William Faulkner",
  "The snake that cannot shed its skin perishes. - Friedrich Nietzsche",
  "The broken will always be able to love harder than most. Once you've been in the dark, you learn to appreciate everything that shines.",
  "There are years that ask questions and years that answer. - Zora Neale Hurston",
  "Healing is an art. It takes time, it takes practice, it takes love.",

  // Time & Mortality
  "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live. - Norman Cousins",
  "We're all just walking each other home. - Ram Dass",
  "The trouble is, you think you have time. - Buddha",
  "Dying is easy, living is harder. - Lin-Manuel Miranda",
  "Time doesn't heal emotional pain, you need to learn how to live with it.",

  // Love & Connection
  "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear. - Oscar Wilde",
  "The most desired gift of love is not diamonds or roses or chocolate. It is focused attention. - Richard Warren",
  "Love is not about possession. It's about appreciation. - Osho",
  "Souls tend to go back to who feels like home. - N.R. Hart",
  "We are most alive when we're in love. - John Updike",

  // Self-Discovery
  "People often say that beauty is in the eye of the beholder, and I say that the most liberating thing about beauty is realizing that you are the beholder. - Salma Hayek",
  "The privilege of a lifetime is to become who you truly are. - Carl Jung",
  "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it. - Rumi",
  "We meet ourselves time and again in a thousand disguises on the path of life. - Carl Jung",
  "You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. - Buddha",

  // Mental Health & Darkness
  "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
  "Some days are just bad days, that's all. You have to experience sadness to know happiness. - Dita Von Teese",
  "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven. - John Milton",
  "Depression is being colorblind and constantly told how colorful the world is.",
  "It's okay to be a glowstick: sometimes we have to break before we shine.",

  // Wisdom & Perspective
  "The more I see, the less I know for sure. - John Lennon",
  "Knowing yourself is the beginning of all wisdom. - Aristotle",
  "The fool doth think he is wise, but the wise man knows himself to be a fool. - Shakespeare",
  "The only true wisdom is knowing you know nothing. - Socrates",
  "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",

  // Courage & Vulnerability
  "Vulnerability is the birthplace of innovation, creativity and change. - Brené Brown",
  "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'",
  "It takes courage to grow up and become who you really are. - E.E. Cummings",
  "The strongest hearts have the most scars.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu",

  // Society & Humanity
  "The world is a tragedy to those who feel, but a comedy to those who think. - Horace Walpole",
  "We live in a world where we have to hide to make love, while violence is practiced in broad daylight. - John Lennon",
  "The real hopeless victims of mental illness are those who appear normal. - Aldous Huxley",
  "Modern man is drinking and drugging himself out of awareness, or he spends his time shopping. - Terence McKenna",
  "People empty their trash into their computers and then wonder why they're surrounded by garbage.",

  // Nature & Universe
  "We are the cosmos made conscious and life is the means by which the universe understands itself. - Brian Cox",
  "You are not a drop in the ocean. You are the entire ocean in a drop. - Rumi",
  "The clearest way into the Universe is through a forest wilderness. - John Muir",
  "Adopt the pace of nature: her secret is patience. - Ralph Waldo Emerson",
  "We are all just energy condensed to a slow vibration - that we are all one consciousness experiencing itself subjectively. - Bill Hicks",

  // Creativity & Art
  "Art should comfort the disturbed and disturb the comfortable. - Cesar Cruz",
  "Every artist dips his brush in his own soul, and paints his own nature into his pictures. - Henry Ward Beecher",
  "Creativity takes courage. - Henri Matisse",
  "Art is the lie that enables us to realize the truth. - Pablo Picasso",
  "The purpose of art is to make the invisible visible. - Paul Klee",

  // Time & Presence
  "Realize deeply that the present moment is all you ever have. - Eckhart Tolle",
  "Wherever you are, be all there. - Jim Elliot",
  "The past is already gone, the future is not yet here. There's only one moment for you to live. - Buddha",
  "Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
  "Yesterday is history, tomorrow is a mystery, today is a gift. That's why it's called the present. - Eleanor Roosevelt",

  // Loss & Grief
  "Grief is the price we pay for love. - Queen Elizabeth II",
  "What is grief, if not love persevering? - WandaVision",
  "The reality is that you will grieve forever. You will not 'get over' the loss; you will learn to live with it. - Elisabeth Kübler-Ross",
  "Tears water our growth. - William Shakespeare",
  "When someone you love dies, you don't lose them all at once; you lose them in pieces over time.",

  // Final Wisdom
  "When the student is ready, the teacher will appear. - Buddhist Proverb",
  "This too shall pass. - Persian Adage",
  "Not all those who wander are lost. - J.R.R. Tolkien",
  "The only way out is through. - Robert Frost",
  "And still, I rise. - Maya Angelou"
];

    const validCommands = ['qc', 'quote', 'wisdom'];
    if (!validCommands.includes(cmd)) return;

    // Get sender details
    const senderContact = await gss.getContact(m.sender);
    const senderName = senderContact.notify || senderContact.vname || senderContact.name || m.pushName || "User";
    
    // Get mentioned user if any
    let mentionedUser = null;
    if (m.mentionedJid && m.mentionedJid.length > 0) {
      const mentionedContact = await gss.getContact(m.mentionedJid[0]);
      mentionedUser = {
        name: mentionedContact.notify || mentionedContact.vname || mentionedContact.name || m.mentionedJid[0].split('@')[0],
        jid: m.mentionedJid[0]
      };
    }

    // Get random quote
    const randomQuote = wiseQuotes[Math.floor(Math.random() * wiseQuotes.length)];
    
    // Prepare the message text
    let messageText;
    if (mentionedUser) {
      messageText = `@${mentionedUser.name.split(' ')[0]}, here's a quote for you:\n\n"${randomQuote}"\n\n- Shared by ${senderName}`;
    } else {
      messageText = `Here's your wisdom quote, ${senderName}:\n\n"${randomQuote}"`;
    }

    // Send the message
    await gss.sendMessage(m.from, {
      text: messageText,
      mentions: mentionedUser ? [mentionedUser.jid] : [],
      ...m
    });

  } catch (error) {
    console.error('Error in quote command:', error);
    m.reply('An error occurred while fetching a quote. Please try again.');
  }
};

export default quotedChat;
