import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import React, {useState} from 'react'

const MovementItem = ({item, currency}) => {
    const [editMode, setEditMode] = useState(false);

    var classMovement = 'movement-item ';
    if (item.type === 'income'){
        classMovement += 'income';
    }else{
        classMovement += 'expense';
    }

    const onClickEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className={classMovement}>
            <h3>
                {
                  editMode ? <label>edit mode</label> : <label>read mode</label>
                }
                
                <label>
                    {item.movement}
                </label>
                <label>
                    {item.value} {currency}
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
