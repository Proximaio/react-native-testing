'use strict';


var React = require('react-native');


class Fetcher{
  constructor()
  {

  }
  getSubredditPromise(redditName){
    var str = "https://reddit.com/r/"+redditName+".json";
    return fetch(str)
  }
}

module.exports = Fetcher;
