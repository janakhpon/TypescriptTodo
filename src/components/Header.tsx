import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import * as routes from '../routes'
import styled from 'styled-components';

const NavLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nav: {
      display: 'block',
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit" className={classes.nav}>
            <NavLink className="nav-item" to={routes.HOME}>
              HOME
      </NavLink>
          </Button>
          <Button color="inherit" className={classes.nav}>
            <NavLink className="nav-item" to={routes.LANDING}>
              LANDING
      </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
