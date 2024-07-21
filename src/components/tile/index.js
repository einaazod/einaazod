import React from 'react';
import './index.css';
import redirect from '../../assets/redirect.svg';
export function Tile({...props}) {
    const { title, image, titleClassName, url } = props


    const imageSource = require(`../../assets/${image}`)
    return (
        <div className="tile">
            <div className="redirect w-full text-right">
                <a href={url || '#'} rel="noopener noreferrer">
                    <img src={redirect} alt={url || '#'} width={30} height={30}/>
                </a>
            </div>
            <div className="tile__image w-full mb-2">
                <img src={imageSource} width={100} height={100} alt={title} />
            </div>
            <div className={`tile-title w-full ${titleClassName || ''}`}>{title}</div>
        </div>
    )
}