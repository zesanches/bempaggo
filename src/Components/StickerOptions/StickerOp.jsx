import React from 'react'
import { Sticker } from './Sticker'
import './styleOp.css'

export default function StickerOp() {
    return (
        <div className="sticker-container">
            <form>
                {Sticker.map((sticker, i) =>
                    <div className="option-container">
                        <input type="checkbox"></input>
                        <label className="label">{sticker.title}</label>
                        <img src={sticker.icon} alt='Framework Icon'></img>
                    </div>)}
            </form>
        </div>
    )
}