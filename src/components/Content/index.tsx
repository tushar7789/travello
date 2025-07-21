import React from 'react'
import './style.css'

import { itemInterface, searchBarPropInterface } from "@/interfaces/props";
import AddItemComp from './AddItemComp';

const itemCapacityPerBox = 4;

const Content: React.FC<searchBarPropInterface> = ({ itemList, setItemList }) => {
    const nOfBox = Math.floor(itemList.length / itemCapacityPerBox) + 1;
    const itemsOnLastBox = itemList.length % itemCapacityPerBox;

    return (
        <div className='content-container'>
            {
                Array.from({ length: nOfBox }, (_, index: any) => (
                    <div className='c-box-container' key={index}>
                        {
                            itemList
                                .slice(index * 4, index * 4 + ((index + 1 === nOfBox) ? (itemsOnLastBox !== 0 ? itemsOnLastBox : itemCapacityPerBox) : itemCapacityPerBox))
                                .map((ele: itemInterface, ind: any) => (
                                    <div className='c-item-container' key={ind}>
                                        <AddItemComp ele={ele} itemList={itemList} setItemList={setItemList} />
                                    </div>
                                ))
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default Content;