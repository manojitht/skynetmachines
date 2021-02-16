import React from 'react';
import Card from '../components/Card';

const CardList = ({ machines }) => {
    
    return(
        machines.map((name, i) => {
            return <Card 
            key={i} 
            id={machines[i].id} 
            name={machines[i].name} 
            username={machines[i].username}
            email={machines[i].email}
            />
        })
    );
}

export default CardList;