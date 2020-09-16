import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { ResumeDrawer } from '../components';

const useStyles = makeStyles((theme) =>
    createStyles({
        homeRoot: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            margin: 'auto',
        },
        subtitle: {
            fontSize: 21,
        },
        actionsContainer: {
            marginTop: 24,

            '& a:first-child': {
                marginRight: 12,
            },

            [theme.breakpoints.down('300')]: {
                '& a': {
                    width: '100%',
                    marginBottom: 12,
                },

                '& a:first-child': {
                    marginRight: 0,
                },
            },
        }
    }),
);

const Home = () => {
    const classes = useStyles();

    const [showResume, setShowResume] = React.useState(false);

    const handleToggleDrawer = () => {
        setShowResume(!showResume);
    };

    return (
        <div className={classes.homeRoot}>
            <Typography variant='h1'>Entrance Test</Typography>
            <Typography variant='body1' className={classes.subtitle}>
                Joana Dias | UI/UX Designer and Front-end Developer
            </Typography>
            <div className={classes.actionsContainer}>
                <Button variant="contained" color="primary" component={Link} to="/entrance-test">
                    Review test
                </Button>
                <Button variant="contained" color="secondary" onClick={handleToggleDrawer}>
                    View CV
                </Button>
            </div>
            <ResumeDrawer open={showResume} handleToggleDrawer={handleToggleDrawer} />
        </div>
    )
}

export default Home;