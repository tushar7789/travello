import React from 'react'
import './style.css'

let itemList = [
    {
        "item": "sock",
        "amount": 3,
        "checked": false
    },
    {
        "item": "shirt",
        "amount": 5,
        "checked": false
    }
]

const itemCapacityPerBox = 4;

const Content = () => {
    const nOfBox = Math.round(itemList.length / itemCapacityPerBox);
    const itemsOnLastBox = itemList.length % itemCapacityPerBox;

    return (
        <div className='content-container'>
            {
                Array.from({ length: nOfBox }, (_, index: any) => (
                    <div className='c-box-container' key={index}>
                        {
                            itemList
                                .slice(index * 4, index * 4 + ((index + 1 === nOfBox) ? itemsOnLastBox : itemCapacityPerBox))
                                .map((ele: any, ind: any) => (
                                    <div className='c-item-container'>
                                        <input type='checkbox' />
                                        <span
                                            style={{
                                                marginLeft: '10px'
                                            }}
                                        >
                                            {ele['item']}
                                            &nbsp;&nbsp;&nbsp;
                                            <i>{ele['amount']}</i>
                                        </span>
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