var React = require('react')

var Job = require('./Job')

var JobList = React.createClass({
  getInitialState: function() {
    return { jobs: [] }
  },
  componentDidMount: function() {
    fetch("https://api.usa.gov/jobs/search.json?query=information+technology&size=100").then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({
        jobs: json
      })
    }.bind(this))
  },
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {this.state.jobs.map(function(job) {
            return <Job key={job.id} job={job} />
          })}
        </ul>
      </div>
    )
  }
})

module.exports = JobList