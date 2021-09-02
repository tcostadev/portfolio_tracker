import { FaTimes } from 'react-icons/fa'
import React from 'react'

const MovimentItem = ({item, currency}) => {
    return (
        <div className="moviment-item">
            <h3>
                <label>
                    {item.moviment}
                </label>
                <label>
                    {item.value} {currency}
                    <FaTimes className="delete-moviment" /*onClick={() => onDelete(task.id)}*/ />
                </label>
            </h3>
            <p>
                {item.date}
            </p>
        </div>
    )
}

export default MovimentItem
