import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import MajorArcana from '../components/MajorArcana'
import Card from '../components/Card'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Slide,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const Reading = (props) => {
    const [cards, setCards] = useState([])
    const [open, setOpen] = useState(false)
    const [card, setCard] = useState({})
    const [layout, setLayout] = useState(0)

    const getCards = () => {
        const deck = MajorArcana
        let drawn = []
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * Math.floor(deck.length))
            let num2 = Math.round(Math.random())
            let newCard = deck[num]
            console.log(newCard)
            if (num2 === 0) {
                newCard.up = true
            } else {
                newCard.up = false
            }
            drawn.push(newCard)
            deck.splice(num, 1)
        }
        setCards(drawn)
    }

    useEffect(() => {
        getCards()
    }, [])

    const handleChange = (e) => {
        setLayout(e.target.value)
    }

    const handleCard = (c) => {
        setCard(c)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    let content = ''
    switch (layout) {
        case 0:
            content = (
                <div>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={layout}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value={1}>3 Card Layout</MenuItem>
                        </Select>
                        <FormHelperText>Select your Layout</FormHelperText>
                    </FormControl>
                </div>
            )
            break
        case 1:
            // getCards()
            content = (
                <div>
                    <h1 color='secondary'>3 Card Layout</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {cards.length ? cards.map((c, i) => <Card key={i} card={c} handleCard={handleCard} />) : null}
                    </div>
                </div>
            )
            break
        default:
            content = ''
            break
    }

    return (
        <div>
            <Nav />
            <div>
                {content}
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ color: 'white' }}>{card.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{ color: 'white' }}>
                            Meanings:
                                <br />
                            {card.up ? card.upKey : card.revKey}
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={handleClose} style={{ color: 'white' }}>
                                Close
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Reading