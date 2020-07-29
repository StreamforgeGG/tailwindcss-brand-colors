const plugin = require("tailwindcss/plugin");

const colors = {
  adobe: "#ff0000",
  airbnb: "#fd5c63",
  algolia: "#050f2c",
  amazon: "#ff9900",
  android: "#a4c639",
  atlassian: "#003366",
  behance: "#1769ff",
  codepen: "#0ebeff",
  dailymotion: "#00aaff",
  deviantart: "#05cc47",
  discord: "#7289da",
  dribbble: "#ea4c89",
  dropbox: "#007ee5",
  duolingo: "#7ac70c",
  etsy: "#d5641c",
  evernote: "#2dbe60",
  facebook: "#3b5998",
  github: "#333",
  google: "#4285f4",
  instagram: "#e1306c",
  linkedin: "#0077b5",
  messenger: "#0084ff",
  microsoft: "#f65314",
  netflix: "#e50914",
  pocket: "#ef4056",
  react: "#00d8ff",
  reddit: "#ff4500",
  shopify: "#96bf48",
  skype: "#00aff0",
  slack: "#611f69",
  snapchat: "#fffc00",
  spotify: "#1db954",
  stripe: "#6772e5",
  telegram: "#0088cc",
  trello: "#0079bf",
  tumblr: "#35465c",
  twitch: "#6441a5",
  twitter: "#1da1f2",
  uber: "#09091a",
  ubuntu: "#dd4814",
  vimeo: "#162221",
  vue: "#42b883",
  whatsapp: "#075e54",
  wikipedia: "#000000",
  youtube: "#ff0000",
  vue: "#42b883",
};

module.exports = plugin(function () {}, { theme: { extend: { colors } } });
