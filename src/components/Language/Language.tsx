import React from "react";
import './Language.css';

interface Props {
    color: string
    name: string
}

export function Language({color, name}: Props) {
    return (
        <div className='language'>
            <div className='language__circle' style={{ background: `${color}` }}/>
            <span className='language__name'>{name}</span>
        </div>
    )
}