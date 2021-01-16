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
    Slide
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const Reading = (props) => {
    const [cards, setCards] = useState([])
    const [open, setOpen] = useState(false)
    const [card, setCard] = useState({})

    const getCards = () => {
        const deck = MajorArcana
        let drawn = []
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * Math.floor(deck.length + 1))
            drawn.push(deck[num])
            deck.splice(num, 1)
        }
        setCards(drawn)
    }

    useEffect(() => {
        getCards()
    }, [])

    const handleCard = (c) => {
        setCard(c)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Nav />
            <div>
                <h1 color='secondary'>3 Card Layout</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    {cards.length ? cards.map((c, i) => <Card key={i} card={c} handleCard={handleCard} />) : null}
                </div>
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
                            <div>
                                <h4>Meanings:</h4>
                                {card.upKey}
                            </div>    
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