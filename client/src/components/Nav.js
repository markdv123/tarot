import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Icon,
    Button,
    Typography
} from '@material-ui/core'

const Nav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href='/' edge="start" color="inherit" aria-label="menu">
                        <Icon >home</Icon>
                    </IconButton>
                    <Typography variant="h6">
                        Tarot Readings
                    </Typography>
                    <Button href='/reading'>
                        Do Reading
                    </Button>
                    <Button href='/cards'>
                        Cards
                    </Button>
                    <Button href='/layouts'>
                        Layouts
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav