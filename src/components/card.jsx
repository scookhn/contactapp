import React from 'react';
import Avatar from './avatar'
import Detail from './details'

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <p className='name'>
                    {props.id}
                </p>
                <h2 className='name'>
                    {props.name}
                </h2>
                <Avatar imgURL={props.imgURL}/>
            </div>
            <div className='bottom'>
            <Detail phone={props.phone} email={props.email}/>
            </div>
        </div>
    )
};

export default Card


