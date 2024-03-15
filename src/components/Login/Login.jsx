import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import style from './../common/FormControl/FormControl.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={"email"}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={'password'}
                       validate={[required]}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"Checkbox"}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
