const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FvTxcsGwMwqKNGMaQ8nS3B";
global.website=process.env.GURL || "https://chat.whatsapp.com/FvTxcsGwMwqKNGMaQ8nS3B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ⸙ 𝐌𝐑־ 𓆩«𝚭𝚫𝚰𝚴𔒝»ꜛ؜𓆪²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923144247057";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_40_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHZWZTV0V2NmZ6Z2dNNk1JVklqWkNYeVo4anhtRkVkOHVBQThZYzVXcXBBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJudG9pXzMwbVRjaUVCQVhHMXNyMUJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMWNlMGVmLTc4YjMtNGMxMC1hMTlhLWYwZjc1YTQ5ZmJmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxODUsXG4gICAgICA4MyxcbiAgICAgIDIwNSxcbiAgICAgIDE2NSxcbiAgICAgIDE2NyxcbiAgICAgIDUyLFxuICAgICAgMSxcbiAgICAgIDE2NSxcbiAgICAgIDQ4LFxuICAgICAgMTIzLFxuICAgICAgMjIzLFxuICAgICAgNzAsXG4gICAgICAxNTIsXG4gICAgICAzNyxcbiAgICAgIDIyOSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMSxcbiAgICAgIDM4LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDE4NCxcbiAgICAgIDE3OSxcbiAgICAgIDY4LFxuICAgICAgMjI1LFxuICAgICAgMTMyLFxuICAgICAgMjcsXG4gICAgICAxNjgsXG4gICAgICAxNDEsXG4gICAgICAxMzAsXG4gICAgICAyMyxcbiAgICAgIDEwOSxcbiAgICAgIDIxMyxcbiAgICAgIDg4LFxuICAgICAgMjAwLFxuICAgICAgMTgwLFxuICAgICAgNTksXG4gICAgICAxMjAsXG4gICAgICAxNjYsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTdBNk03R1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0NDI0NzA1NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzI4Njk3ODc0MjI5MTQ6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm5aeThnRUVQeld1YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNWGJQRG5uUDFlSng0WUoxZFU3eTAwYWxCTmZPOW1CZ0JxMmUxWGJxdUNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJFK2wrTDVZUjBPdFg2bm5nYmdFcGhwNTdsc0czSzl5Q0krZ3AydVJPbkNUb0RyWlFoOWI4RFJObWs3U2pqRUkycHVGVWwzK1AzOEZ2bThCRXlCcURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFNOHNPUjN2TExiTUgwdFd4ZUJmeU1qNmdQbHI0NVJEeEgwU3d0MHdGZ3pacXVtc0YzdGxrckNZWjAzeDBoK1BsSWpUcEhhOENObmVDYVJYWExEU2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0NDI0NzA1NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MDY4MTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ⸙ 𝐌𝐑־ 𓆩«𝚭𝚫𝚰𝚴𔒝»ꜛ؜𓆪²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "⸙ 𝐌𝐑־ 𓆩«𝚭𝚫𝚰𝚴𔒝»ꜛ؜𓆪-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "⸙ 𝐌𝐑־ 𓆩«𝚭𝚫𝚰𝚴𔒝»ꜛ؜𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
