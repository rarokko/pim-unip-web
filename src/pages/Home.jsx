import React, { Component } from 'react';
import Request from './Request';
import { Grid, Box, Input, Button, Typography } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {

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
            console.log("then")
        })
        .catch((err) => {
            alert("Usuário ou senha inválidos");
        })

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Grid 
              container 
              justify="center"
              direction="column"
              alignItems="center"
              style={{ height: "100%" }}
            >
                <Typography color="primary" variant="h5" gutterBottom={true}>
                Seja bem vindo, {window._nomeUsuario}
                </Typography>

                <Typography color="secondary" variant="body" gutterBottom={true}>
                Navegue no menu lateral, através do botão superior esquerdo.
                </Typography>
            </Grid>
        );

    }
  }
  