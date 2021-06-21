const { static, Router } = require("express");
const api = Router();
const fs = require("fs");
const { join } = require("path");

const RoutesPath = join(__dirname, "Routes");


api.use("/", static(join(__dirname, "..", "assets")));

//Handle Login and other stuff

const session = require("express-session");
const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");

let config;
try {
  //Config for testing
  config = require("../dev-config");
} catch {
  //Config for production
  config = require("../config");
}

passport.use(
  new DiscordStrategy(
    {
      clientID: config.ClientID,
      clientSecret: config.ClientSecret,
      callbackURL: config.Website + config.CallbackURL,
      scope: config.Scopes.join(" "),
    },
    function (accessToken, refreshToken, profile, done) {
      //User logged in yay!
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);


module.exports = api;
