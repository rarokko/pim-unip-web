import React, { Component } from 'react';
import Request from './Request';
import { Grid, Box, Input, Button, Typography } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            user: "",
            pass: ""
        }
    }

    login() {

        Request.post("loginUser", {
            "nomeDoUsuario": this.state.user,
            "senha": this.state.pass
        })
        .then(() => {
            window._nomeUsuario = this.state.user;
            this.setState({ loginOk: true })
        })
        .catch((err) => {
            alert("Usuário ou senha inválidos");
        })

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        if (this.state.loginOk) {
            return <Redirect to="/home"/>
        };

        return (
            <Grid 
              container 
              justify="center"
              direction="column"
              alignItems="center"
              style={{ height: "100%" }}
            >
            <LocalShippingIcon color="primary" style={{ fontSize: 100 }}/>
            <Typography color="primary" variant="h5" gutterBottom={true}>
              Bem-vindo
            </Typography>
              <form>
                <Grid
                  container 
                  justify="center"
                  direction="column"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Input
                      name="user"
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Username"
                      required={true}
                      type="text"
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      name="pass"
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Password"
                      required={true}
                      type="password"
                    />
                  </Grid>
                  <Grid item>
                    <Button onClick={() => this.login()} color={"primary"}>
                      LOGIN
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link to="/register">
                        <Button color={"secondary"}>
                            REGISTRAR
                        </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Grid>
        );

    }
  }
  