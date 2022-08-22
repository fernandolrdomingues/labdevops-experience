import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { withCookies } from 'react-cookie'
import FormLogin from '../components/FormLogin'

const Login = (props) => {
  const { cookies } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [codCN, setCodCN] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState();
  const [errorAPI, setErrorAPI] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const auth = async () => {
        setAuthenticated(false)
      }
      setIsLoading(false);
    auth()
  };

  const setDefaultHeaders = (user, token) => {
    axios.defaults.headers.common.user_id = user
    axios.defaults.headers.common.access_token = token
  }

  return (authenticated) ? (
    <Redirect to="/landing" />
  ) : (
    <FormLogin
      isLoading={isLoading}
      codCN={codCN}
      setCodCN={setCodCN}
      password={password}
      setPassword={setPassword}
      authenticated={authenticated}
      errorAPI={errorAPI}
      handleSubmit={handleSubmit} />
  );
}

export default withCookies(Login);
