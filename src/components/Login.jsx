import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export default withRouter(
  connect((state) => ({ isLogin: state.isLogin }), {
    login: () => ({ type: "LOGIN" })
  })((props) => {
    const { login } = props;
    const [user, setUser] = useState("Admin");
    const onChange = useCallback((e) => {
      setUser(e.target.value);
    });
    const submit = useCallback((e) => {
      e.preventDefault();
      login();
      props.history.push("/");
    }, []);
    return (
      <div className="jumbotron">
        <label>user</label>
        <form onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              name="user"
              value={user}
              onChange={onChange}
              className="form-control"
              aria-describedby="sizing-addon3"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-group-xs">Login</button>
          </div>
        </form>
      </div>
    );
  })
);
