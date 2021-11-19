import React, {useState} from 'react';

function ShoppingList() {
    const [list, setList] = useState([])
    const [newItem, setNewItem] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newList = [...list]
        newList.push(newItem);
        setList(newList);
        setNewItem("")
    }

    console.log(list);

    return (
        <div>
            <h1>Shopping List</h1>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemInput">Add new item:</label>
                <br />
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                
                <input type="submit" />
            </form>

            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ShoppingList
