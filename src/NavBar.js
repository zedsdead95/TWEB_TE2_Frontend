import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const styles = theme => ({
    bar: {
        marginRight: 100,
    },
    head: {
        flexGrow: 1,
        color: "white",
    },
    title:{
        fontFamily: "Caladea",
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: "white",
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

})

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
                <AppBar >
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h4" color="inherit">Movies</Typography>

                                <Button component={Link} to="/movies" className={classes.menuButton} color="inherit" aria-label="Menu">
                                    Films populaires
                                </Button>
                                <Button component={Link} to="/newmovies" className={classes.menuButton} color="inherit" aria-label="Menu">
                                    Films récents
                                </Button>
                           
                </AppBar>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
