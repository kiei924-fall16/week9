var React = require('react')

var Job = require('./Job')

var JobList = React.createClass({
  getInitialState: function() {
    return { jobs: [] }
  },
  componentDidMount: function() {
    fetch("http://codepen.io/jobs.json").then(function(response) {
      return response.json()
    }).then(function(json) {
      this.setState({
        jobs: json.jobs
      })
    }.bind(this))
  },
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {this.state.jobs.map(function(job) {
            return <Job key={job.hashid} job={job} />
          })}
        </ul>
      </div>
    )
  }
})

module.exports = JobList