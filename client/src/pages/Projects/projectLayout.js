import React, {Component} from 'react';

const defaults = {
    id: 0,
    repoName: "Name of Repo",
    url: "/",
    clone: "/"
}

const projectLayout = (Page, data=defaults) => {
    class HOC extends Component {
        state = data;
        render () {
            return (
                <Page id={this.state.id} repoName={this.state.name} url={this.state.html_url} clone={this.state.clone_url}/>
            )
        }
    }
    return HOC;
}

export default projectLayout;