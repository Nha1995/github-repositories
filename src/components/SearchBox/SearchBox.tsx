import React, { useState } from 'react';
import './SearchBox.css';

interface Props {
    setString(searchString: string): void
}

export function SearchBox({setString}: Props) {
    const [currentString,setcurrentString] = useState('')
    const sendQueryHandler = () => {
        if (currentString) {
            setString(currentString);
        }
    }
    return (
        <>
            <h1 className='searchTitle'>Запрограммируем наш собственный Google!</h1>
            <div className='searchBox'>
                <input 
                    type="text"
                    className='searchBox__input'
                    onChange={({target}) => {
                        setcurrentString(target.value)
                    }}
                />
                <button
                    type='button'
                    className='searchBox__button'
                    onClick={() => sendQueryHandler()
                }>
                    Искать
                </button>
            </div>
        </>
    )
}