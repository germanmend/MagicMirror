/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "0.0.0.0", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: "alert",
    },
    {
      module: "clock",
      position: "top_left",
      config: {
        showSunTimes: true
      }
    },
    {
        module: 'MMM-CoinMarketCap',
        position: "top_left",
        header: "Cryptos",
        config: {
            apiKey: '24aa5ad0-4c67-4c89-a788-63c284ed8c7a',
            currencies: ['bitcoin', 'ethereum', 'ripple'],
            view: 'graphWithChanges',
            conversion: 'MXN',
            // See below for more Configuration Options
        }
      },
      {
  module: "MMM-NowPlayingOnSpotify",
  position: "top_right",

  config: {
    clientID: "854da5fa52af4b7cba0ce0a87a277840",
    clientSecret: "5499cd55b2ce442891e24846ac6dc7e5",
    accessToken: "BQByq8Huix9vJr-4svAbEiXxOtt7n9qP_epBJcC_6ProPjAP6BtLUSGNhEQ4LS1lQzP2ASshVMTgPk4TwyUqNygs-_fDQEWF32sLF1ZO_iArOljYhgazZWIVXUGS4oSylivbQ87T7KDRuCQGPPAWeSw",
    refreshToken: "AQBUGjNxvpZY6ejw7qjdVUJ_vT8k0YT2wh4JTw_c65dnOkKc9YSHF8PbfmZVqVzh4nHhAkkgySdiXqBwvVKdhsZzF2p_MhS5W5qgxJ-HMZvRkuptgLDsSLgDdZajMbWVFMY",
    moduleWidth: "200"
  }
},
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-alt",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/60/MX_Holidays.ics"
          }
        ],
        maximumEntries: 5
      }
    },
    {
			module: "compliments",
			position: "bottom_bar",
      config: {
        remoteFile: 'https://github.com/germanmend/MagicMirror/blob/master/config/compliments.json',
        updateInterval: 5000,
      }
		},
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "New York Times",
            url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
