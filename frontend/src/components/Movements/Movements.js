import React from 'react';
import MovementItem from './MovementItem'
import './Movements.css'

const Movements = (props) => {
    
    let movements = <h1>No movements available!</h1>

    if (props.movements.length > 0){
        movements = props.movements.map((mov, index) => (
            <MovementItem key={mov._id} item={mov} currency={props.currency}/>
        ));
    }
    
    return (
        <main className="movements-list">
            {movements}
        </main>
    )
}
export default Movements