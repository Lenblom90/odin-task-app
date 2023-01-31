import { useState } from "react";

export default function Overview({tasks, handleDelete, handleEdit}) {    
    return (
        <ol>
            {tasks.map((item, index) => {
                return (
                    <Task 
                        key={item.id} 
                        item={item} 
                        number={index + 1}
                        handleClick={handleDelete}
                        handleEdit={handleEdit}
                        />
                );
            })}
        </ol>
    )
}

function Task({item, number, handleClick, handleEdit}) {
    const [isEdit, setEdit] = useState(false);

    const handleEditBtn = () => {
        setEdit(!isEdit);
    }
    if(isEdit){
        return (
            <li>
                <input id="editField" defaultValue={item.title}/>
                <button itemID={item.id} onClick={handleEdit}>Resubmit</button>
            </li>
        );
    }

    return (
        <li>
            {item.title}
            <span>{" (item " + number + ")"}</span>
            <button itemID={item.id} onClick={handleEditBtn}>Edit</button>
            <button id={item.id} onClick={handleClick}>Delete</button>
        </li>
    );    
}