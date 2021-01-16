import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuIcon,
    Typography
} from '@material-ui/core'

const Nav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Tarot Readings
                    </Typography>
                    <Button href='/reading'>
                        Reading
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav