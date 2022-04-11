import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import React, {useState} from 'react'

const MovementItem = ({item, currency}) => {
    const [editMode, setEditMode] = useState(false);

    var classMovement = 'movement-item ';
    if (item.type === 'income'){
        classMovement += 'income';
    } else {
        classMovement += 'expense';
    }

    const onClickEditMode = () => {
        setEditMode(!editMode);
    };
    const onClickRemove = () =>{
        
    };

    return (
        <div className={classMovement}>
            <h3>
                {editMode ? <input type="text" value={item.description}/> : <label>{item.description}</label>}
                <label>
                    {
                        editMode? <input type="text" value={item.value}/> : item.value
                    }
                    {currency}
                    <FaPencilAlt className="movement-action edit-movement" onClick={onClickEditMode} />
                    <FaTimes className="movement-action delete-movement" /*onClick={() => onDelete(task.id)}*/ />
                </label>
            </h3>
            <p>
                {item.date}
            </p>
        </div>
    )
}

export default MovementItem
