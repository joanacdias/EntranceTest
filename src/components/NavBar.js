import React from 'react';
import { Link } from 'react-router-dom'
import { 
    Button, 
    Avatar, 
    Typography, 
    useMediaQuery, 
    useTheme, 
    IconButton, 
    MenuItem, 
    MenuList,
    Grow,
    Paper,
    Popper, 
    ClickAwayListener,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        navBarRoot: {
            height: '75px',
            backgroundColor: '#F7F9F8',
            borderBottom: '1px solid rgba(16, 37, 66, 0.5)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            justifyContent: 'space-between',
        },
        logoContainer: {
            width: 64.57,
            cursor: 'pointer',

            '& img': {
                width: '100%',
            }
        },
        userAvatar: {
            backgroundColor: '#E87867',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 18,
            cursor: 'pointer',
        },
        navBarLhs: {
            display: 'flex',
        },
        navBarRhs: {
            display: 'flex',
        },
        popperPaper: {
            marginTop: 8,
        },
        breadcrumbsContainer: {
            backgroundColor: '#D7DEDD',
            height: 40,
            padding: '0 0 0 12px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            marginLeft: 26,
        },
        workshopName: {
            fontFamily: 'Roboto',
            fontWeight: 'normal',
            fontSize: 15,
            letterSpacing: '-0.015em',
            color: '#102542',
            cursor: 'pointer',
        },
        boardName: {
            fontFamily: 'Roboto',
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '-0.015em',
            color: '#102542',
            marginRight: 44,    
        },
        breadcrumbsContainerIcon: {
            width: 54,
            height: '100%',
            background: 'rgba(205, 215, 214, 0.8)',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        actionButtons: {
            '& button': {
                margin: '0 8px',
            },

            '& button:last-child': {
                marginRight: 36,
            },
        },
        actionsMenuContainer: {

        },
        mobileMenuIcon: {
            '&:hover': {
                backgroundColor: 'transparent',
            }
        },
    }),
);

const menuOptions = [
    'Invite',
    'Workshop menu',
    'Start workshop',
];
  

const NavBar = ({workshopName, board}) => {
    const classes = useStyles();
    const theme = useTheme();

    const [avatarMenuOpen, setAvatarMenuOpen] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = React.useState(null);

    const menuAnchorRef = React.useRef(null);
    const avatarAnchorRef = React.useRef(null);
    const biggerThanMediumWidth = useMediaQuery(theme.breakpoints.up('md'));

    const handleAvatarToggle = () => {
        setAvatarMenuOpen((prevOpen) => !prevOpen);
    };

    const handleMenuClick = (event) => {
        setMobileMenuOpen((prevOpen) => !prevOpen);
    };

    const handleAvatarMenuClose = (event) => {
        if (avatarAnchorRef.current && avatarAnchorRef.current.contains(event.target)) {
          return;
        }
    
        setAvatarMenuOpen(false);
        handleListKeyDown(event);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setAvatarMenuOpen(false);
        }
    };

    const handleMobileMenuClose = (event) => {
        // setAnchorEl(null);
        if (menuAnchorRef.current && menuAnchorRef.current.contains(event.target)) {
            return;
        }
      
        setMobileMenuOpen(false);
        handleListKeyDown(event);
    };
    

    const renderLogo = () => (
        <div className={classes.logoContainer}>
            <img src='images/logo.png' alt='logo' />
        </div>
    );

    const renderUserAvatar = () => (
        <React.Fragment>
            <Avatar 
                className={classes.userAvatar}
                ref={avatarAnchorRef}
                aria-controls={avatarMenuOpen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleAvatarToggle}
            >
                FA
            </Avatar>
            <Popper 
                open={avatarMenuOpen} 
                anchorEl={avatarAnchorRef.current} 
                role={undefined} 
                transition 
                disablePortal
                placement="bottom-end"
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    >
                    <Paper
                        classes={{
                            root: classes.popperPaper,
                        }}
                    >
                        <ClickAwayListener onClickAway={handleAvatarMenuClose}>
                        <MenuList autoFocusItem={avatarMenuOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem component={Link} to="/home">Back to Home Screen</MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );

    const renderBreadcrumbs = () => (
        <div className={classes.breadcrumbsContainer}>
            <Typography className={classes.workshopName}>{workshopName}</Typography>
            <Typography className={classes.boardName}>&nbsp;{">"} {board}</Typography>
            <div className={classes.breadcrumbsContainerIcon}>
                <img src='icons/ic_screen_blue.svg' alt='screen icon' />
            </div>
        </div>
    );

    const renderActionButtons = () => (
        <div className={classes.actionButtons}>
            <Button 
                variant="outlined" 
                color="secondary" 
                startIcon={<img src='icons/ic_plane_pink.svg' alt='plane icon' />}
            >
                Invite
            </Button>
            <Button variant="contained" color="secondary">Workshop menu</Button>
            <Button variant="contained" color="primary">start workshop</Button>
        </div>
    );

    const renderActionsMenu = () => (
        <div className={classes.actionsMenuContainer}>
            <IconButton
                aria-label="more"
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                ref={menuAnchorRef}
                disableFocusRipple
                disableRipple
                disableTouchRipple
                className={classes.mobileMenuIcon}
            >
                <MoreVertIcon />
            </IconButton>
            <Popper 
                open={mobileMenuOpen} 
                anchorEl={menuAnchorRef.current} 
                transition 
                placement="bottom-end"
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    >
                    <Paper
                        classes={{
                            root: classes.popperPaper,
                        }}
                    >
                        <ClickAwayListener onClickAway={handleMobileMenuClose}>
                            <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                {menuOptions.map((option) => (
                                    <MenuItem key={option} onClick={handleMobileMenuClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );

    return (
        <div className={classes.navBarRoot}>
            <div className={classes.navBarLhs}>
                {renderLogo()}
                {renderBreadcrumbs()}
            </div>
            <div className={classes.navBarLhs}>
                {biggerThanMediumWidth && renderActionButtons()}
                {!biggerThanMediumWidth && renderActionsMenu()}
                {renderUserAvatar()}
            </div>
        </div>
    )
}

export default NavBar;