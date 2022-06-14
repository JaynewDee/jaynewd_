import React, { Component } from "react";
import { Octokit } from 'octokit';

const getProject = (config) => {
  return new Octokit({auth: process.env.PRIVATE_KEY
  }).rest.repos.get(config)
}


function projectLayout(Page, config) {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
      getProject(config).then((data) => {
        this.setState(data.data)
      })
    }
    render() {
      return (
      <Page
          data={this.state}
        />
        )
      
    }
  }
  return HOC;
}

export default projectLayout;
