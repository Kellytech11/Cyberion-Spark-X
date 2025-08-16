// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVGBFQxIiOWG4qCArifWMfSiigFCksChQn/PcNtHt6ImZ3tpenoi4nz8k8md9BRnCBpqgGw+8gp7iCDDVLVucIDIFaRhGioA1CyCAYgtWs0O931dxvyDofk6SWL4qz64qsK4g5t7l0k7tnZol6P+3ewKMN8vKQ4uA3gC2PHY7r3SbcqzN5VF7g7ULW10tsJGwn6/W8p8TOIfHpJSZv4NEgQkxxFht5gs6IwnSKahdi+jX6O/fCdgE/GbX2Vxfy2ygv/CPPz/01N6AucQq9ut+7euhsva/RJ6EQFXZAr2peOAvTIyexdb53LvF9U0+mSNrq8OrDWoeC86Jf4DhDoRmijGFWfznvG7s1E+sa0+58Vx0noZWoVNLRTHW3o5l+si/8SVleL+kqjb9GvH8tLS/tobxKkwnUjVPM34QWRh7J1hMmHNOerHP9CX+pxZ+Ju/TDK6f/k3eoR5TxNS9mlqXvDMe6J5DI4rGHp/Zhz6sb7tbpcDcsjcnX6E8c+YQHvpSuyKCzONj9yTKt7sLeOlTiZqulu8FuuXbxeKzHn/QhK+nvWBaVQOYcdy0rsnbo4jxdBHh92p2spUq9XpWHZyj0V4tyNs3nK81mLoV74t3GrqCK+m2xt+TMX9QmlwSeNEe1PUoGVaK8PRWdUG2GYNh9tAFFMS4YhQyTrNnjRbENYFj5KKCIPdML1JXueRYJrwHXkra+fyvvU7xUFGEmcEi/07l11a63QcyvxDfQBjklASoKFE5wwQitHVQUMEYFGP75rFQjmqIzYcjCIRgCvidKnMRJg/6g+0fx7ZpAVsA8/5YhBtogouTsIDBktERt8HwwkLqGxmsjjuPFkWT0BVXQepoqyQNVHoiq2Eg8v4Iu8RkVDJ5zMOxKvZ4gdCVJePzVBhm6sZd/GtVCtw0iTAu2yso8JTD8MNfHIQwCUmbMr7NAaxaIgiH3uY0Yw1lcNMrKDNIgwRXSGh1gGMG0QD8SjSgKP7S8Dw+NhE39ZWfeE3h+BBruDdAvuRkOuF/Tk8HmNnBWS8UEbZA+X3V7vMjxsjAQOL7f45uHzcHjB+EGP0QM4rQAQ6A50qkyiWpMo17srMZjZRcrWqyAT4Efhn0ZYmDol/lM7jGD2RPbKp3BsW/N+W540hW75S15bTy+zKJgbShv/wAChoDOnX2XpmcZmQWm4/GMkwyPXjw1d6sRtY2O7Thjtr77PN304N7Q7ihaeXXN2Znh+XK5pmKhb5f+1U5IOdVMT+3cVO+tiRaiCgfo52Dm/sSnLT9etBZL4lbn0p/ZunVp1eEJF0Gy4Y6BUa510RjPJp1V/x4yVdzLUCjVkpiK5YYcX7me5x+357O4jk3P3VyP3quVnq2cvo9Q/G5y/PyNMHpOpPcS/WcpX8Qbx3GP9k8Y7zPuX+aEGqlK/3iM0GFh+7e6Phxds4WXjG33ylXrnAw5TpLLcSuMFgp4NNbPU8giQs/NkDkfIGgDSsrGv2YWkd9E0hTONOKX7BQWTPnsiX9osz73uuVSkk9gkYAhEBbyXpAbg9dKnvsMso8WA0rz2dYUPP4GQoumbQUIAAA=",
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
