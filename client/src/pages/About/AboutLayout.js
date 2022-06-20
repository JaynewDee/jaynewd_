import React from "react";

const aboutLayout = (Page) => {
  class Layout extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return <Page {...this.props} />;
    }
  }
  return Layout;
};

export default aboutLayout;
