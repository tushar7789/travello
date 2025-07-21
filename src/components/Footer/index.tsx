import React from 'react'
import './style.css'
import { itemListPropInterface } from '@/interfaces/props'

const Footer: React.FC<itemListPropInterface> = ({ itemList }) => {
    let n = itemList.filter((e) => !e['checked']).length;
    console.log('initial item list len:', itemList);

    return (
        <div className='footer-container'>
            {
                n !== 0 ?
                    <div>
                        There&nbsp;{n === 1 ? 'is' : 'are'}
                        &nbsp;
                        <span style={{ fontStyle: 'italic', fontWeight: '600' }}>{n}</span>
                        &nbsp;
                        {n === 1 ? 'item' : 'items'}&nbsp;to be packed!
                    </div>
                    :
                    <div>
                        YAY! You are all set!
                    </div>
            }
        </div>
    )
}

export default Footer;