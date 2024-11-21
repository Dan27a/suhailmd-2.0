const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_59_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFDUUsvdTZ5UWpJd2UwY0tZdXpKcWU4MUYwQWRTa251OXozMzd1M1h3Mzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlrTDZSWnRfUlhlTGw3YVZOejY5RXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjAwZmExZDYtZDE2OS00ZjJhLTljOGEtNzgxZWExYmVjZDc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDI0MCxcbiAgICAgIDE3MCxcbiAgICAgIDMxLFxuICAgICAgMTQ4LFxuICAgICAgMjA2LFxuICAgICAgMTM3LFxuICAgICAgOTgsXG4gICAgICA2NixcbiAgICAgIDIyMixcbiAgICAgIDE0NCxcbiAgICAgIDIxMyxcbiAgICAgIDg0LFxuICAgICAgOTgsXG4gICAgICA0MixcbiAgICAgIDkxLFxuICAgICAgMzIsXG4gICAgICAyMTcsXG4gICAgICAyNDYsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyNTIsXG4gICAgICA5LFxuICAgICAgMjA1LFxuICAgICAgNDIsXG4gICAgICA1MSxcbiAgICAgIDc4LFxuICAgICAgOTksXG4gICAgICAyMjQsXG4gICAgICAxNjksXG4gICAgICAyMDgsXG4gICAgICAxNzEsXG4gICAgICAyMTEsXG4gICAgICAxOTcsXG4gICAgICAxNyxcbiAgICAgIDY1LFxuICAgICAgMTIsXG4gICAgICA0OCxcbiAgICAgIDAsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZYU1FMR0wxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjgzMDc2MTM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI5MDU1NDcxMzMwMTY6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRGJ0L1lERUl5bytya0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhOWnJ0bzdlbzVEOFlvMmFCb2E2QS9PSm0rZ3BiQ0w3SGMzUVNQQmF5UWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTdaa2FHV3VVRXA4OGZJT1Rud3pCMHdGNWUxbzZFTTRiZjkycU5lQmRPOHlscWZGNlpmaGNGeXFhSERxR0E5Y0JqbElCcGZFdkpVN3VKNnJFTWpDQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1VLalRlcys0blVGWDBQL3V2VXIrbXJ3UmhMMTVNbkphSGJTQ1UwQTZ0V0ZYQm1yaXJuaEl0STIyTXBoYytnWk5LcjROOXRJeUFtTjNNczByZTdpQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY4MzA3NjEzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjE1NDM4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlHWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFpCZW9lUVFFQS9xMFlHdXU1UkVsMzIrSVpJVVNOWXorenVjbTI3dmlVVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUzNjgzMTA0LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
