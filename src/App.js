import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Box, Input, SwipeableDrawer, Button, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import 'typeface-roboto';
import Login from './pages/Login';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import DataList from './pages/DataList';

class App extends Component {

  constructor() {
    super();

    // <Route exact path="/" component={Login} />
    // <Route exact path="/register" component={Register} />
    // <Route exact path="/home" component={Home} />
    // <Route exact path="/pneu" component={DataList} />
    // <Route exact path="/abastecimento" component={DataList} />
    // <Route exact path="/veiculo" component={DataList} />
    // <Route exact path="/cliente" component={DataList} />
    // <Route exact path="/manutencao" component={DataList} />
    // <Route exact path="/motorista" component={DataList} />
    // <Route exact path="/multa" component={DataList} />
    // <Route exact path="/pecas" component={DataList} />
    // <Route exact path="/seguro" component={DataList} />
    // <Route exact path="/viagem" component={DataList} />

    this.pages = [
      { page: "pneu", name: "Pneus" },
      { page: "abastecimento", name: "Abastecimentos" },
      { page: "veiculo", name: "Veiculos" },
      { page: "cliente", name: "Clientes" },
      { page: "manutencao", name: "Manutenções" },
      { page: "motorista", name: "Motoristas" },
      { page: "multa", name: "Multas" },
      { page: "pecas", name: "Peças" },
      { page: "seguro", name: "Seguros" },
      { page: "viagem", name: "Viagens" }
    ]

    this.state = {
      menuOpen: false
    };

    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ menuOpen: true });
  };

  handleDrawerClose() {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Router>

            <div>
              <AppBar
                  position="fixed"
                >
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={this.handleDrawerOpen}
                      edge="start"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                      Frotas UNIP
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Drawer
                  anchor="left"
                  open={this.state.menuOpen}
                  onClose={this.handleDrawerClose}
                >
                  <div>
                    <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <Divider />
                  <List>

                    {window.location.pathname == "/" &&
                      <ListItem button key="Login">
                        <ListItemText primary="Login" />
                      </ListItem>
                    }

                    {window.location.pathname != "/" && this.pages.map((item, index) => (
                      <Link onClick={this.handleDrawerClose} to={item.page}>
                        <ListItem button key={item.page}>
                          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                          <ListItemText primary={item.name} />
                        </ListItem>
                      </Link>
                    ))}

                  </List>
                </Drawer>
            </div>
  
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route key="/pneu" exact path="/pneu" component={DataList} />
            <Route key="/abastecimento" exact path="/abastecimento" component={DataList} />
            <Route key="/veiculo" exact path="/veiculo" component={DataList} />
            <Route key="/cliente" exact path="/cliente" component={DataList} />
            <Route key="/manutencao" exact path="/manutencao" component={DataList} />
            <Route key="/motorista" exact path="/motorista" component={DataList} />
            <Route key="/multa" exact path="/multa" component={DataList} />
            <Route key="/pecas" exact path="/pecas" component={DataList} />
            <Route key="/seguro" exact path="/seguro" component={DataList} />
            <Route key="/viagem" exact path="/viagem" component={DataList} />
          </Switch>
      </Router>
    );
  }

}

export default App;
