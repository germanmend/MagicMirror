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
  		module: "MMM-OpenmapWeather",
  		position: "top_right",	// This can be any of the regions.
  									// Best results in left or right regions.
  		config: {
    			// See 'Configuration options' for more information.
    			locationID: "3530597", //Location ID from http://openweathermap.org/help/city_list.txt
    			appid: "a9aa81340342e664ca7140e66f7c7d3e",  //openweathermap.org API key
    			colorIcon: true,
          degreeLabel: true,
          updateInterval: 1800000,
          useKMPHWind: true,
          roundTemp: true
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
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-alt",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/60/MX_Holidays.ics"
            //url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
            //www.calendarlabs.com/ical-calendar/ics/75/MX_Holidays.ics
          }
        ],
        maximumEntries: 5
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
