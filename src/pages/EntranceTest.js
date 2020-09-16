import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { NavBar, Zoom, ToolBar, Board } from '../components';

const useStyles = makeStyles((_theme) =>
    createStyles({
        entranceTestRoot: {
            position: 'relative',
        },
    }),
);

const toolMap = {
    stickyNote: {
        id: 0,
        label: 'Sticky Note',
    },
    text: {
        id: 1,
        label: 'Text',
    },
    shapes: {
        id: 2,
        label: 'Shapes',
    },
    draw: {
        id: 3,
        label: 'Draw',
    },
    media: {
        id: 4,
        label: 'Media',
    },
    layout: {
        id: 5,
        label: 'Layout',
    },
};

const EntranceTest = () => {
    const classes = useStyles();

    // Hard coded data stored in local state. Would replace with actual workshop and board names if application was to be further developed.
    const [workshopName, setWorkshopName] = React.useState('');
    const [board, setBoard] = React.useState('');
    const [activeTool, setActiveTool] = React.useState(toolMap['stickyNote']);

    React.useEffect(() => {
        setWorkshopName('Workshop Name');
        setBoard('Board A');
    }, []);

    const handleToolClick = (tool) => {
        setActiveTool(toolMap[tool])
    };

    return (
        <React.Fragment>
            <NavBar workshopName={workshopName} board={board} />
            <div className={classes.entranceTestRoot}>
                <ToolBar activeTool={activeTool} handleToolClick={handleToolClick} />
                <Zoom />
                <Board pageTitle={activeTool.label} subtitle={activeTool.id} />
            </div>
        </React.Fragment>
    )
}

export default EntranceTest;