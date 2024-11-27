const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Afica/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348143174879";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_13_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY29heGlhVmdJNGVxM21lWnFqaXBQeFVLaVM5ZXpqZ3NnOFh2RkYxV0FMTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHU3TXNoeWlST09OTjRudXlfbF83Z1wiLFxuICBcInBob25lSWRcIjogXCIwZTJkNzI3OS0zZGJiLTQ5N2QtYTQ2ZS05ZWMwYTc0MmQ4NjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgNjcsXG4gICAgICAxMzgsXG4gICAgICAxMSxcbiAgICAgIDIzOSxcbiAgICAgIDE5MixcbiAgICAgIDI0LFxuICAgICAgMTY3LFxuICAgICAgMjksXG4gICAgICAzNSxcbiAgICAgIDEzNixcbiAgICAgIDIxMyxcbiAgICAgIDgxLFxuICAgICAgMTAxLFxuICAgICAgMTExLFxuICAgICAgMTM4LFxuICAgICAgNTAsXG4gICAgICAxMTYsXG4gICAgICAxLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNDgsXG4gICAgICAxODEsXG4gICAgICA3NCxcbiAgICAgIDE5MSxcbiAgICAgIDIxOCxcbiAgICAgIDIwMCxcbiAgICAgIDE2LFxuICAgICAgNDAsXG4gICAgICA1OSxcbiAgICAgIDI1MyxcbiAgICAgIDgyLFxuICAgICAgMTkxLFxuICAgICAgMTY4LFxuICAgICAgMTYzLFxuICAgICAgMTY0LFxuICAgICAgMTQ5LFxuICAgICAgMTc5LFxuICAgICAgMjA5LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRTU1BOOEVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzMTc0ODc5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzUyMDU4ODkyNzQwNzM6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdYMXFJQkVNL0NuYm9HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnRjB1UjhyM2wrNThLdEhDSDJZMUZVWE54Y2hmUW92V2U5cUxpWm44S0I4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpHUHgxNUljWG5LRldMNjAxRW5od3FkdkViMWhGVU5aYmJEYm1HMk1KNG8weTF3MGkxVUM0cnU5VkM4b3VxM0NJbDRobS92V004RGJmWkh5RkhMREJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd2WnVFV0xQZ0ZRQmVtbjFod0pMUmZjMnJuclpob1MwdHU3SmZ2MHVLME16d3c3R0JuRkF5K2pEa2RUNFphNjhvNk9TNDdGeDFlZWt6alBMbUlMeEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMxNzQ4Nzk6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3MzEyMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEMjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQyNy5qc29uIjogIntcImtleURhdGFcIjpcIk1jS0VGTzZ5M1NVaU11Vjhnb21aK25hRmRLSHdrREYzTTFVdWszYSsxcE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQxMTUwNzA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyNTUzNjUyNzg2XCJ9Igp9"  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
