var React = require('react')

var ReactChartJS = require('react-chartjs-2')
var {Bar} = ReactChartJS

var movies = require('../data/movies.json')

var MovieChart = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12">
        <h1>This would be an awesome place to display a chart of movie runtimes.</h1>
      </div>
    )
  }
})

module.exports = MovieChart