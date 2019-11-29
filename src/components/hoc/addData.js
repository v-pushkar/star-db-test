import React, { Component } from "react";
import Spiner from "./../spiner";
import ErrorIndicator from "./../errorIndicator";

const addData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false
    };

    componentDidMount() {
      getData().then(data => {
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
    // const loading = this.state.loading? <Spiner/> : null;
    // const haserror = this.state.hasError ? <ErrorIndicator/> : null;

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

export default addData;
