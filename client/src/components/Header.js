import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { theme } from '../theme/theme';


const useStyles = makeStyles((theme) => ({
    container: {
        border: 'none',
        boxShadow: 'none',
        height: 66
    },
    navlink: {
        margin: '6px 21px',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 2.4,
        color: theme.palette.darkgreen.main,
        boxSizing: 'border-box',
        '&:hover': {
            textDecoration: 'none',
        }
    }
}))

const NavLink = (props) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <Link href="#"
            onClick={preventDefault}
            color='secondary'
            variant="body2"
            className={classes.navlink}
        >
            {props.text}
        </Link>
    )
}

export default function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="sticky" style={props.style}
            className={classes.container}>
            <Toolbar>
                <IconButton>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Ms_0d861bc7-9edb-4ab4-a0a2-7b3e96441403_100x.png?v=1614795317" alt="logo"/>
                </IconButton>
                <NavLink text='Home' />
                <NavLink text='Story Bouquet (Faux Flower)' />
                <NavLink text='Bespoke Flower Arrangement' />
                <NavLink text='About Us' />
            </Toolbar>
        </AppBar>
    )
}