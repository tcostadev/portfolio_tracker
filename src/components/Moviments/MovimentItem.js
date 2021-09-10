import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import React, {useState} from 'react'

const MovimentItem = ({item, currency}) => {
    const [editMode, setEditMode] = useState(false);

    var classMoviment = 'moviment-item ';
    if (item.type === 'income'){
        classMoviment += 'income';
    }else{
        classMoviment += 'expense';
    }

    const onClickEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className={classMoviment}>
            <h3>
                {
                  editMode ? <label>edit mode</label> : <label>read mode</label>
                }
                
                <label>
                    {item.moviment}
                </label>
                <label>
                    {item.value} {currency}
                    <FaPencilAlt className="moviment-action edit-moviment" onClick={onClickEditMode} />
                    <FaTimes className="moviment-action delete-moviment" /*onClick={() => onDelete(task.id)}*/ />
                </label>
            </h3>
            <p>
                {item.date}
            </p>
        </div>
    )
}

export default MovimentItem
