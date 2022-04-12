import React from "react";

const EditableRow=({editFormData,handleEditFormChange ,handleCancleClick})=>{
    return(
        <tr>
            <td>
            <input 
            type="text" 
        required="required" 
        placeholder="enter a name..."
        name="name"
        value={editFormData.name}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
            <input
        type="text" 
        required="required" 
        placeholder="enter a address..."
        name="address"
        value={editFormData.address}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
            <input
        type="text" 
        required="required" 
        placeholder="enter a phonenumber..."
        name="phonenumber"
        value={editFormData.phonenuber}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input
        type="email" 
        required="required" 
        placeholder="enter a email..."
        name="email"
        value={editFormData.email}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancleClick}>Cancle</button>

        </td>
        </tr>
    );
};

export default EditableRow;