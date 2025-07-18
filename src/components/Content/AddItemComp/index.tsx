'use client'

import React, { useState } from 'react'
import { addItemPropInterface } from '@/interfaces/props'
import '../style.css'

const AddItemComp: React.FC<addItemPropInterface> = ({ ele, itemList, setItemList }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckChange = (e: any) => {
        setIsChecked(isChecked => !isChecked);

        let newArray = itemList.map((e) => {
            if (ele['id'] === e['id']) {
                return e;
            } else {
                return {
                    ...e,
                    'checked': isChecked
                }
            }
        });

        setItemList(newArray);
    }

    return (
        <>
            <input type='checkbox' onChange={handleCheckChange} />
            {
                <span
                    className={isChecked ? 'checked-item' : 'unchecked-item'}
                >
                    {ele['item']}
                    &nbsp;&nbsp;&nbsp;
                    <i>{ele['amount']}</i>
                </span >
            }
        </>
    )
}
export default AddItemComp;