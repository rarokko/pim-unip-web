import React, { Component } from 'react';
import Request from './Request';
import { Grid, Box, Input, Button, Typography, Tabs, Tab, TabPanel, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class DataList extends Component {

    constructor() {
        super();

        this.state = {
            page: window.location.pathname.substring(1),
            value: 0,
            getData: [],
            insertData: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.getValues = this.getValues.bind(this);
    }

    getValues() {
        Request.get(this.state.page)
        .then((response) => {
            this.setState({ getData: response.data })
        })
        .catch((err) => {
            console.log(err);
            alert("Erro na requisição");
        })
    }

    insertValues() {
        Request.post(this.state.page, this.state.insertData)
        .then((response) => {
            alert("Dados inseridos com sucesso");
            this.getValues();
        })
        .catch((err) => {
            console.log(err);
            alert("Digite todos os campos corretamente");
        })
    }

    handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState((state) => {
            return {
                insertData: {
                    ...state.insertData,
                    [name]: value
                }
            }
        });

        console.log(this.state.insertData);
    }

    handleChange(e, newValue) {
        this.setState({ value: newValue });
    }

    componentDidMount() {
        this.getValues();
    }

    render() {

        return (
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="secondary"
                    centered
                >
                    <Tab label="Consultar" />
                    <Tab label="Incluir" />
                </Tabs>

                {this.state.value == 0 && this.state.getData.length > 0 &&
                    <div style={{ overflow: "auto" }}> 
                        <Table>
                            <TableHead>
                            <TableRow>
                                {Object.keys(this.state.getData[0]).map((key) => {
                                    return <TableCell>{Request.separateCamelCase(key)}</TableCell>
                                })}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.getData.map((item, index) => (
                                <TableRow key={index}>
                                    {Object.keys(item).map((key) => {
                                        return <TableCell>{item[key]}</TableCell>
                                    })}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </div>
                }


                {this.state.value == 1 && this.state.getData.length > 0 &&
                    <Grid
                    container 
                    justify="center"
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    style={{ marginTop: 20 }}
                    >
                        <Grid 
                            container 
                            justify="center"
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            lg={8}
                            md={8}
                            sm={8}
                        >
                            {Object.keys(this.state.getData[0]).map((key) => {
                                return (
                                    <Grid item>
                                        <Input
                                            name={key}
                                            onChange={(e) => this.handleInputChange(e)}
                                            placeholder={Request.separateCamelCase(key)}
                                            value={this.state.insertData.key}
                                            required={true}
                                            type="text"
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item>
                            <Button onClick={() => this.insertValues()} color={"primary"}>
                                INSERIR
                            </Button>
                        </Grid>
                    </Grid>
                }

            </div>
        );

    }
  }
  