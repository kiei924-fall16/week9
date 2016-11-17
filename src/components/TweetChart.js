var React = require('react')

var ReactChartJS = require('react-chartjs-2')
var {Pie} = ReactChartJS

var tweets = require('../data/trumps_tweets.json')

var TweetChart = React.createClass({
  render: function() {
    var androidTweets = tweets.reduce(function(count, tweet) {
      return count + (tweet.statusSource === 'android')
    }, 0)
    var iphoneTweets = tweets.reduce(function(count, tweet) {
      return count + (tweet.statusSource === 'iphone')
    }, 0)
    var data = {}
    var options = {}
    return (
      <div className="map col-sm-12">
        <Pie data={data} height={120} options={options} />
      </div>
    )
  }
})

module.exports = TweetChart