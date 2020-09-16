import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        zoomRoot: {
            height: 38,
            backgroundColor: '#F5F5F5',
            border: '1px solid #90A4AE',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: 0,
        },
        zoomLhs: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #90A4AE',
            height: '100%',
            padding: '0 12px',
        },
        zoomRhs: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'column',
            height: '100%',

            '& button': {
                height: '100%',
            },

            '& button:first-child': {
                borderBottom: '1px solid #90A4AE',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            }
        },
        zoomAmount: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            letterSpacing: '-0.015em',
            color: '#102542',
        },
        zoomButtonLabel: {
            lineHeight: 0,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            letterSpacing: '-0.015em',
            color: '#102542',
            position: 'relative',
            top: '-2px',
        },
        zoomButtonRoot: {
            minWidth: 'unset',
            padding: '0 16px',
        }
    }),
);

const Zoom = () => {
    const classes = useStyles();

    return (
        <div className={classes.zoomRoot}>
            <div className={classes.zoomLhs}>
                <Typography className={classes.zoomAmount}>100%</Typography>
            </div>
            <div className={classes.zoomRhs}>
                <Button 
                    classes={{
                        root: classes.zoomButtonRoot,
                    }}
                >
                    <Typography className={classes.zoomButtonLabel}>+</Typography>
                </Button>
                <Button 
                    classes={{
                        root: classes.zoomButtonRoot,
                    }}
                >
                    <Typography className={classes.zoomButtonLabel}>-</Typography>
                </Button>
            </div>
        </div>
    )
}

export default Zoom;