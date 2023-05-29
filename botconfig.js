module.exports = {
  Admins: ["UserID", "UserID"], 
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "!", 
  Port: 3000, 
  SupportServer: "", 
  Token: process.env.Token || "ODkyNDIxMjIwMDc3ODIxOTcz.GpuHyM._OlO3jODYBzi3BKBZ0ArPNAvamK0LhoBIVwgEs", 
  ClientID: process.env.Discord_ClientID || "892421220077821973", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "o-xh2GFjQZLaA9nR1LwTx0A2PBQ-Jq1R", 
  Scopes: ["identify", "guilds", "applications.commands"], 
  ServerDeafen: true,
  DefaultVolume: 100, 
  CallbackURL: "/api/callback", 
  "24/7": false, 
  CookieSecret: "", 
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", 
  EmbedColor: "RANDOM", 
  Permissions: 2205281600,
  Website: process.env.Website || "", 

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  
  
  Lavalink: {
    id: "Main", 
    host: "lavalink.lexnet.cc", 
    port: 443, 
    pass: "lexn3tl@val!nk", 
    secure: true, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "fc7e1d6ffd2a4e5bacfd577a2a827751", 
    ClientSecret: process.env.Spotify_ClientSecret || "3f6ea455aaa049859d185a97c2aebb6d", 
  },
};
