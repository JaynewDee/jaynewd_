import React, { Component } from "react";
import { Octokit } from "octokit";

const getProject = (config) => {
  return new Octokit({ auth: process.env.PRIVATE_KEY }).rest.repos.get(config);
};
const getReadme = (config) => {
  return new Octokit({ auth: process.env.PRIVATE_KEY }).request(
    "GET /repos/{owner}/{repo}/readme",
    config
  );
};

function projectLayout(Page, config) {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
        readme: "",
      };
    }

    componentDidMount() {
      getProject(config).then((data) => this.setState({ data: data.data }));
      getReadme(config).then((readme) => {
        this.setState({ readme: atob(readme.data.content) });
      });
    }

    render() {
      return (
        <section className="projectWrapper">
          <Page data={this.state.data} readme={this.state.readme} />
        </section>
      );
    }
  }
  return HOC;
}

export default projectLayout;
