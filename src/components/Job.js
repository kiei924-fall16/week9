var React = require('react')

var Job = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <h4 className="list-group-item-heading">
          <a href={this.props.job.url} target="_blank">{this.props.job.company_name}</a></h4>
        <p className="list-group-item-text">{this.props.job.title}</p>
      </li>
    )
  }
})

module.exports = Job