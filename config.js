const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94720797915,94763621705";
global.owner = process.env.OWNER_NUMBER || "94741850340";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94720797915";
global.read_status_from = process.env.READ_STATUS_FROM || "94720797915";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVmTlg3Y2xiWVJ2ZHNwRHN2ejc2OVIwemxZRkFXWFovNThmbXp6TkdYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0trak9VeExRdFp3bWZLcCt6WGgvMHVlcXIrR3NmdVB1NDV2L0xmbmQxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUpSaFdLM3VPdlRtdHZPcmpmRHB3VXZBSmlPYTQ0TXhIelZEVHczQm5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbEJBaEZXWmdkOTdHS0M5aTVGMkpOcGhhalhheE5abTFYZDh0MFNGZkE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJRkNSVk9uQTRvVGErSmxOeVBJOENHNVMwandRUW96RjZkK05kYkpxMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRUQVpEZzJoTHdzNTNuRHlJSXo2OThGc3M5eEh2K2JnMS95bjdGN2s5M0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlxY1lWbklPVEFteVpYSTYwcnlsTHNEV1UyeHhiL0dtbUgwRHJjdmVuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEd1WGpaMXpoWHExQU14STRQaDNxTm1KN1NTa3BTakpXcWdKUUFtV09BUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZibm1xWmFaRndNRmJZQzVUNzBYbmNuRE9uNUEwUjYxMlZQb2xaWVRGckJEYmoxMEtKL1RnYWZiNmkwamdkUEg4ellYazNWSXFhM3gwWHdITVgwK2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6IlRMQVluZklXUUdBbFA4NTh3TVBYcy9UTHBQSTVkTkVYR2d1YUZWdXRCNkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTczODUxNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzcwODc3OTFEMzkwOEEyQUQ4RkFCM0NDOUVEMjAwRjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTUwNTE0OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVXdGZHZKdHdRSG1FN05nSG1OSFZQZyIsInBob25lSWQiOiI2NGI4NDEzZi1jNzY4LTQ4NDUtOGEyNC1hMTE5ZGU5MDIzNjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2hQdDJHM3FwR1B4THY0Uk0xRjlmMjJJcWtJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9jQlBwYzFxTFQ3T0JRbHJ3elFNanN5dmFJWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzNFRRTUZMWSIsIm1lIjp7ImlkIjoiOTQ3NTczODUxNjY6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01QeDk0Z0hFT3VoOXJNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJzNjBlQWkvRGlFRGo5c3duQ1hQSG9hcWJ0VG5oaWhpUU8rbnRSRWNpRlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndDQ1hhNUEzbHpYTTZxRlQ3bHg2M0F0dllSZk1UV0VEY244dDhBRjNRSWxha2NaTUlIb2dMRHozQkIxMkNndXpudDlTUFhWYmtPYnlwNDJiU1RsMkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwNy9RNU9vNFBaN2hkemhMeFcyYVNIZlVsN2hBWEZEa2hIR2lkY0pBUXpwV2taY0xCSHpkaHdiQVNFSGpnUXMrYmxPU1NkeVpKaExnYzJRMXB2MFdqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3Mzg1MTY2OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE3T3RIZ0l2dzRoQTQvYk1Kd2x6eDZHcW03VTU0WW9Za0R2cDdVUkhJaFcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk1MDUxNDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVpRIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝙼𝚁 𝙲𝙷𝙰𝙼𝙰𝙻𝙺𝙰",
  author: process.env.PACK_AUTHER || "MR CHAMALKA",
  packname: process.env.PACK_NAME || "CHAMA-MD",
  botname: process.env.BOT_NAME || "•𝙲𝙷𝙰𝙼𝙰-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "Mr Chamalka",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-33bf1d46-7449-48ce-bf43-77dc075a49f8",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "masteryt94757385166",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
