import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (Cmp) => {
  return connect(
    (state) => ({ isLogin: state.isLogin }),
    null
  )((props) => {
    useEffect(() => {
      props.isLogin || props.history.push("/Login");
    });
    return <Cmp {...props} />;
  });
};
