import React from 'react'

function Admin(props) {

    function addButtonHandler() {

    }
    function deleteButtonHandler() {

    }
    function editButtonHandler() {

    }

    return(
        <>
        <h2>This is Private Admin Page</h2>
        <input placeholder='Add Post'></input>
        <button onClick={addButtonHandler}>Add</button>
        <button onClick={deleteButtonHandler}>Delete</button>
        <button onClick={editButtonHandler}>Edit</button>
        </>
    )
}
export default Admin