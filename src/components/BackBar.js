import React from 'react';
import { useHistory } from "react-router-dom";
import { Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) =>
    createStyles({
        backBarRoot: {
            height: '54px',
        },
        buttonRoot: {
            '&:hover': {
                background: 'transparent',
            }
        },
        label: {
            position: 'relative',
            top: 2,
            fontWeight: 500,
        },
        startIcon: {
            margin: 0,
        },
    }),
);

const BackBar = ({ handleBackClick }) => {
    const classes = useStyles();
    let history = useHistory();

    return (
        <div className={classes.backBarRoot}>
            <Button 
                onClick={handleBackClick ? handleBackClick : () => history.goBack()} 
                color="primary" 
                startIcon={<ArrowBackIosIcon color='primary' />}
                classes={{
                    root: classes.buttonRoot,
                    startIcon: classes.startIcon,
                }}
            >
                    <Typography variant='body1' className={classes.label}>Back</Typography>
            </Button>
        </div>
    )
}

export default BackBar;