import React from "react";
import './Language.css';

interface Props {
    color: string
    name: string
}

export function Language({color, name}: Props) {
    return (
        <>
            <span className='language__circle' style={{ background: `${color}` }}/>
            <span className='language__name'>{name}</span>
        </>
    )
}