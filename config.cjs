// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaFkU0IiKGECURVDBtSbmASHBZEtMEpTq8N8n0KqujuiZnhqeklzuPefec+53UGBUQQu2YPIdlAQ1PoXdkrYlBBOg1FEECeiD0Kc+mIBWnw7Zdonn14Et93RzaU81GJvrwVHzrDobeHKdnfTCpnz6Au59UNanDAW/CfiWR9vBEp/Xmqk7861j7NyDdGPT65KXox6evZlbd4Y4zc7kF3DvIvqIoCLWyjPMIfEzC7YrH5GvwefkRNhzMqlxc7gUOlGX9OxSP4xlq8JoeFijgrr27VVjmK/Bby8iKZe+deS9MgvMarwj0tjRB+St3QwWsSdb5316tXvu/viEX6G4gKERwoIi2n657oaRiOPexnTxfq5Px8zbTKK2t1JXSXE8ZKWlRrfehgn28U76GnBhHyR7h+bcZrCL9TiXV4IqHuNkV8w9gnVDsNqVdFbS5k36GfiKfGgl/T91z+0UrqpjJLhnjMiwGbWNLxPJOMYZ53obL8db59SuR7qGvwZfHGgpa8SyEy21RFos87l2FmQqDhwZDemAe2WV/XR9oZF3/YTv05r8DuUsvwwtS91I0805pYm19hhheBXyLedDrK5hxTnHEYO30atxrbGxWN10xK6m1kGxThwdkYM0WuvU7631vTnlZv7xPFZU+eXBKIWtEYIJe+8DAmNUUeJThIvHHiP2gR82HgwIpI/yguBwYuu0VZYlc2uKqYthdiPXFgqLBPM0pepuwFyvi8vcqV5AH5QEB7CqYKijimLS2rCq/BhWYPLno1MdaQJzTKGJws4Ho6HIiIwoCRL7R/XtevZp5ZfltwJS0AcRwbkNwYSSGvbB44HAyOJ0pkwVbazJM4lhJWU4GvKSNJxpHcmOYv5MukE5rKifl2DCiiOW40bSULz/1QcFvNGnfjrWPNsHESIV3RZ1mWE//BDXx6EfBLguqNcWgdotIAET5nMbUoqKuOqY1YVPgjNqoNrxAJPIzyr4o9CQwPCDy/vwUHHY9X/kuNzcWfKgw94F+qU2E5H7tTyF390G9nYjG6APsscrdsQNGW7MSzzDCSOue9gd3H8A7uKHkPooq8AEqDafNgZWNGdOzpU9nyvDWFZjGXwS/BDsUxCSNr0snfGIanShL8zalhLBXHJsmE7lRW+94dT5/OJEwU6TX/4hCJiAATTkYe1a2+ZkGunuxuwRv1yQcmfCo4uWNHOMcqBNV/jq8btGjPTbW8Wat1UvxtVuY+3t0VTIEjfhk6u5b7x1rM9cpVN3H4SwQQH8OZlg6OXqemyPu4BBvV3wyiFx57KBdUFDe3MYXAIn7FmM1Fa9du+gZJPFs6baek3kRdJRb3UeiTy+LFSrCq12c1rss1JZP630sHL2PkLRu8jR4zdC8DGR3lv0n618Au8Ux9z7P8V4n3H/MieUSJGFJIngyV14t7Y9JSujhzaUHl7lqzpItXF8Pl+SAz9zZXDvpF9mPo0wycEEVPnJB31AcN3p1ygi/JtMqswYWvyknfkVlT898Q82Y8XnrRXBpe5XZzABvDt+5cedwFu5LD3q0w+LAbn7FqYF7n8DRqDDNQUIAAA=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : true, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : true, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Carl William",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254101617718",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
