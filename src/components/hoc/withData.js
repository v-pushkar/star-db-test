import React, { Component } from "react";
import Spiner from "../spiner";
import ErrorIndicator from "../errorIndicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false
    };

    componentDidMount() {
      this.props.getData().then(data => {
        this.setState({
          data,
          loading: false
        });
      });
    }
    componentDidCatch() {
      this.setState({
        isError: true
      });
    }
    
    render() {
      const { data, hasError } = this.state;
      if (!data) {
        return <Spiner />;
      }
      if (hasError) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
