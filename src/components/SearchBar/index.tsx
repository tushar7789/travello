'use client'

import React from 'react'
import './style.css'

const SearchBar = () => {
    const n: number = 15;

    const handleSubmit = (e: any) => {
        e.preventDefalut();
    }

    return (
        <div className='searchbar-container'>
            <div className='sb-select-container'>
                <select name="cars" id="cars">
                    {
                        Array.from({ length: n }, (_, index) => index + 1).map((num) => (
                            <option value={num} key={num}>{num}</option>
                        ))
                    }
                </select>
            </div>
            <div className='sb-input-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='add item'
                        style={{
                            marginRight: '20px',
                            width: '300px'
                        }}
                    />
                    <input type='submit' value='Add item' />
                </form>
            </div>
        </div>
    )
}

export default SearchBar;