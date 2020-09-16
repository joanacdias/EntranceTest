import React from 'react';
import { Drawer } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { BackBar } from '.';
import Skeleton from '@material-ui/lab/Skeleton';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) =>
    createStyles({
        resumeDrawerRoot: {
            height: '75px',
        },
        resumerDrawerPaper: {
            width: '60%',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        resumeContainer: {
            height: '100%',
            padding: 16,

            '& canvas': {
                width: '100% !important',
                height: '100% !important',
                borderRadius: 4,
            }
        },
        loadingStateContainer: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        skeleton: {
            borderRadius: 4,
        }
    }),
);

const ResumeDrawer = ({open, handleToggleDrawer}) => {
    const classes = useStyles();

    const [pdfIsLoading, setPdfIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setPdfIsLoading(false)
        }, 2000);
    }, []);

    const renderLoadingState = () => (
        <div className={classes.loadingStateContainer}>
            <Skeleton className={classes.skeleton} variant="rect" width='100%' height='100%' />
        </div>
    );

    const renderResume = () => (
        <Document
            file="resume.pdf"
            loading={renderLoadingState()}
        >
            <Page 
                pageNumber={1} 
            />
        </Document>
    );

    return (
        <Drawer 
            open={open} 
            classes={{
                root: classes.resumeDrawerRoot,
                paper: classes.resumerDrawerPaper
            }}
            anchor={'right'} 
            onClose={handleToggleDrawer}
        >
            <BackBar handleBackClick={handleToggleDrawer} />
            <div className={classes.resumeContainer}>
                {pdfIsLoading && renderLoadingState()}
                {!pdfIsLoading && renderResume()}
            </div>
        </Drawer>
    )
}

export default ResumeDrawer;