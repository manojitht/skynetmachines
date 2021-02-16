import React from 'react';

const Card = (props) => {
    const { username, email, id} = props;
    return (
        <div className='tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robo here.' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{ username }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;