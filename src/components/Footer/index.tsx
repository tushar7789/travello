import React from 'react'
import './style.css'
import { itemListPropInterface } from '@/interfaces/props'

const Footer: React.FC<itemListPropInterface> = ({ itemList }) => {
    let n = itemList.slice().filter((e) => e['checked']).length;

    return (
        <div className='footer-container'>
            <div>
                There are&nbsp;
                <span style={{ fontStyle: 'italic', fontWeight: '600' }}>{n}</span>
                &nbsp;items to be packed!
            </div>
        </div>
    )
}

export default Footer;