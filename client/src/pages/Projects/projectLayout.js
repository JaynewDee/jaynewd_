import React, { Component } from "react";

function projectLayout(Page, fetchConfig) {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true
      }
    }
    render() {
      return <Page id={this.id} repoName={this.name} clone={this.clone} url={this.url} {...this.props}/>;
    }
  }
  return HOC;
}

export default projectLayout;
