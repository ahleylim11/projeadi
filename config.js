module.exports = {
  Admins: ["UserID", "UserID"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || ">", 
  Port: 3000, 
  SupportServer: "https://discord.gg/a9SHDpD",
  Token: process.env.Token || "", 
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"],
  CallbackURL: "/api/callback", 
  "24/7": false, 
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif",
  Permissions: 2205280576, 
  Website: process.env.Website || "http://localhost", 

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};