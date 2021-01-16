import React, {useState} from 'react'
import '../styles/Card.css'

const Card = (props) => {
    const [toggleClass, setClass] = useState(true)

    const flip = () => {
        setClass(!toggleClass)
    }

    return (
        <div className='cards'>
            <div className={toggleClass ? 'card flip' : 'card'}>
                <div className='card-front' onClick={flip}>
                    <img alt='front' src={props.img} className='card-img' />
                </div>
                <div className='card-back' onClick={flip}>
                    <img alt='back' src='/tarot-cards/back.png' className='card-img' />
                </div>
            </div >
        </div >
    )
}

export default Card