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

export default class Register extends Component {

    constructor() {
        super();

        this.state = {
            user: "",
            pass: ""
        }
    }

    login() {

        Request.post("registerUser", {
            "nomeDoUsuario": this.state.user,
            "senha": this.state.pass
        })
        .then(() => {
            alert("Registro efetuado com sucesso");
            this.setState({ registerOk: true });

        })
        .catch((err) => {
            alert("Usuário ou senha inválidos");
        })

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        if (this.state.registerOk) {
            return <Redirect to="/"/>
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
                Registrar
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
                      Register
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link to="/">
                        <Button color={"secondary"}>
                            Login
                        </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Grid>
        );

    }
  }
  