import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        boardRoot: {
            margin: '54px 0 0 124px',
        },
    }),
);

const Board = ({pageTitle, subtitle}) => {
    const classes = useStyles();

    const renderTitle = () => (
        <React.Fragment>
            <Typography variant='h1'>{pageTitle}</Typography>
            <Typography variant='h4'>{subtitle}</Typography>
        </React.Fragment>
    );

    return (
        <div className={classes.boardRoot}>
            {renderTitle()}
        </div>
    )
}

export default Board;