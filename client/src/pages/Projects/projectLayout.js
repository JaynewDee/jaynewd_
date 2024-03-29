import React, { PureComponent } from "react";
import { getOneProject } from "../../utils/dbAPI/project";

function projectLayout(Page, projectName) {
  class HOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentDidMount() {
      getOneProject(projectName).then((data) => {
        this.setState({ data: data });
      });
    }

    render() {
      return (
        <section className="projectWrapper">
          {this.state.data ? (
            <Page data={this.state.data} loadState={this.state.loading} />
          ) : (
            <div> Loading ... </div>
          )}
        </section>
      );
    }
  }
  return HOC;
}

export default projectLayout;
