var React = require('react')

var hotels = require('../data/hotels.json')

var Place = require('./Place')

var HotelList = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12">
        <h1>This would be an awfully good place for a list of hotels.</h1>
      </div>
    )
  }
})

module.exports = HotelList