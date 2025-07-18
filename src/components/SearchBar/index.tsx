'use client'

import React, { useState } from 'react'
import './style.css'
import { searchBarPropInterface, itemInterface } from '@/interfaces/props'

const SearchBar: React.FC<searchBarPropInterface> = ({ itemList, setItemList }) => {
    const n: number = 15;
    const [inputVal, setInputVal] = useState('');
    const [itemCount, setItemCount] = useState(1);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let temp = {
            'item': inputVal,
            'amount': itemCount,
            'checked': false
        }

        setItemList((itemList) => [...itemList, temp]);

    }

    const handleChange = (e: any) => {
        setInputVal(e.target.value);
    }

    const handleSelectChange = (e: any) => {
        setItemCount(e.target.value);
    }

    return (
        <div className='searchbar-container'>
            <div className='sb-select-container'>
                <select name="itemCount" id="itemCount" onChange={handleSelectChange}>
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
                        onChange={handleChange}
                    />
                    <input type='submit' value='Add item' />
                </form>
            </div>
        </div>
    )
}

export default SearchBar;