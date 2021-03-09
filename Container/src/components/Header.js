import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
      //borderBottom: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid #97144d`,
    },
    toolbar: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    link: {
      margin: theme.spacing(1, 1.5),
      borderColor: '#97144d',
      color: '#fff',
      backgroundColor: '#97144d'
    },
    heading: {
      color: '#97144d',
      fontSize: '1.5em',
      fontWeight: 'bold'
    }
  }));
    
export default ({isSignedIn, onSignOut }) => {
    const classes = useStyles();

    const onClick = () => {
        if (isSignedIn && onSignOut) {
          onSignOut();
        }
    };
    
    return(
        <React.Fragment>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.heading}
              variant="h6"
              color="inherit"
              noWrap
            >
              Bank of Young India
            </Typography>
            {isSignedIn && (
                <React.Fragment>
                    <Button
                    variant="outlined"
                    className={classes.link}
                    component={Link}
                    to= '/'
                    onClick={onClick}
                    >
                    Logout
                    </Button>
                    </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
}