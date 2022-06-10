import React from "react"

export const projectLayout = (Page, data) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
                this.state = data;
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }


        render() {
            return <Page data={this.state.data} {...this.props} />
        }
    }
}