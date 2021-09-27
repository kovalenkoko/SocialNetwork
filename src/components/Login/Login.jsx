import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          placeholder={"Email"}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required]}
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      {props.error && (
        <div className={classes.formSummaryError}> {props.error}</div>
      )}
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
