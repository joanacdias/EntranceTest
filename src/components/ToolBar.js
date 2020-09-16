import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        toolBarRoot: {
            backgroundColor: '#F9FBFA',
            position: 'fixed',
            top: 150,
            overflow: 'hidden',
            width: 60,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
        toolbarButtonRoot: {
            padding: `12px 0`,

            '&:first-child': {
                paddingTop: 24,
            },

            '&:last-child': {
                paddingBottom: 24,
            }
        }
    }),
);

const ToolBar = ({activeTool, handleToolClick}) => {
    const classes = useStyles();

    return (
        <div className={classes.toolBarRoot}>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('stickyNote')}
            >
                <img src='/icons/ic_poststick.svg' alt='poststick icon' />
            </Button>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('text')}
            >
                <img src='/icons/ic_text.svg' alt='text icon' />
            </Button>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('shapes')}
            >
                <img src='/icons/ic_rectangle.svg' alt='rectangle icon' />
            </Button>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('draw')}
            >
                <img src='/icons/ic_draw.svg' alt='draw icon' />
            </Button>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('media')}
            >
                <img src='/icons/ic_image.svg' alt='media icon' />
            </Button>
            <Button
                classes={{
                    root: classes.toolbarButtonRoot,
                }}
                onClick={() => handleToolClick('layout')}
            >
                <img src='/icons/ic_blocks.svg' alt='blocks icon' />
            </Button>
        </div>
    )
}

export default ToolBar;