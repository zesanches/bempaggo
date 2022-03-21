import React, { useState } from 'react'
import './styleQtd.css'

export default function StickerQtd() {
    const [qtd, setQtd] = useState(0)

    const add = () => {
        setQtd(qtd + 1)
        console.log(qtd)
    }

    const remove = () => {
        if (qtd === 0) {
            return
        }
        setQtd(qtd - 1)
        console.log(qtd)
    }


    return (
        <div className="qtd-container">
            <button className="remove" onClick={() => remove()}>-</button>
            <input type="" className="qtd-input" value={qtd} />
            <button className="add" onClick={() => add()}>+</button>
        </div>
    )
}
