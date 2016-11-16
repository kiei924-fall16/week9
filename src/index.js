var React = require('react')
var ReactDOM = require('react-dom')

var Header = require('./components/Header')
var NavBar = require('./components/NavBar')
var BaseballChart = require('./components/BaseballChart')
var MovieChart = require('./components/MovieChart')
var SentimentChart = require('./components/SentimentChart')
var TweetChart = require('./components/TweetChart')
var TacoList = require('./components/TacoList')
var TacoMap = require('./components/TacoMap')
var HotelList = require('./components/HotelList')
var HotelMap = require('./components/HotelMap')

var App = React.createClass({
  viewChanged: function(view) {
    this.setState({
      currentView: view
    })
  },
  renderMainSection: function() {
    switch (this.state.currentView) {
      case "taco-list":
        return <TacoList />
      case "taco-map":
        return <TacoMap />
      case "hotel-list":
        return <HotelList />
      case "hotel-map":
        return <HotelMap />
      case "baseball":
        return <BaseballChart />
      case "movies":
        return <MovieChart />
      case "tweets":
        return <TweetChart />
      case "sentiment":
        return <SentimentChart />
      default:
        console.log("No view")
    }
  },
  getInitialState: function() {
    return {
      currentView: "taco-list"
    }
  },
  render: function() {
    return (
      <div>
        <Header />
        <NavBar currentView={this.state.currentView} viewChanged={this.viewChanged} />
        <div className="main row">
          {this.renderMainSection()}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
