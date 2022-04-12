import logo from './logo.svg';
import './App.css';
import {nanoid}from'nanoid';
import data from "./data.json";
import { Fragment, useState } from 'react';
import ReadOnlyRow from './Components/ReadOnlyRow';
import EditableRow from './Components/EditableRow';

function App() {

  const[contacts, setContacts]=useState(data);
  const[addFormData,setAddFormData]=useState({
    name:"",
    address:"",
    phonenumber:"",
    email:"",
  });
  
  const[editFormdata,setEditFormData]=useState({
    name:"",
    address:"",
    phonenumber:"",
    email:"",
  });


  const[editContactId,setEditcontactId]=useState(null);

  const handleAddFormChange=(event)=>{
    event.preventDefault();
 
    const fieldName= event.target.getAttribute('name');
    const fieldValue= event.taget.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);
 
  };

  const handleEditFormChange=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute("name")
    const fieldValue= event.taget.value;

    const newFormData={...editFormdata};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit=(event)=>{
    event.preventDefault();

    const newContact={
      id:nanoid(),
     name:addFormData.name,
     address:addFormData.address,
     phonenumber:addFormData.phonenumber,
     email:addFormData.email
    };

    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit=(event)=>{
    event.preventDefault();

    const editedContact={
      id:editContactId,
      name:editFormdata.name,
      address:editFormdata.address,
      phonenumber:editFormdata.phonenumber,
      email:editFormdata.email
    }
    const newContacts=[...contacts];

    const index=contacts.findIndex((contacts)=>contacts.id===editContactId);

    newContacts[index]=editedContact;

    setContacts(newContacts);
    setEditcontactId(null);
  }

  const handleEditClick=(event,contact)=>{
    event.preventDefault();
    setEditcontactId(contact.Id);
  }

  const formvalues={
    name:contacts.name,
    address:contacts.address,
    phonenumber:contacts.phonenumber,
    email:contacts.email,
  };
  setEditFormData(formvalues);


const handleCancleClick=() =>{
  setEditcontactId(null);

};
  const handleDeleteClick=(contactId)=>{
    const newContacts=[...contacts];
     
    const index=contacts.findIndex((contact)=>contact.id===contactId);

    newContacts.splice(index,1);
    setContacts(newContacts);
    
  }
  return (
    <div className="App">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Address</th> 
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>
         </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <Fragment>
              {editContactId==contact.id? (
              <EditableRow 
              editFormdata={editFormdata}
              handleEditFormChange={handleEditFormChange}
              handleCancleClick={handleCancleClick}
              />
              ):(
            <ReadOnlyRow 
            contact={contact}
             handleEditClic99k={handleEditClick}
             handleDeleteClick={handleDeleteClick}
             />
              )}
            </Fragment>
          ))}

        </tbody>
      </table>
      </form>
      <h2>Add a Contacts</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" 
        name="name" 
        required="required" 
        placeholder="enter a name..."
        onChange={handleAddFormChange}
        />
        <input type="text" 
        name="address" 
        required="required" 
        placeholder="enter a address..."
        onChange={handleAddFormChange}
        />
        <input type="text" 
        name="phonenumber" 
        required="required" 
        placeholder="enter a phonenumber..."
        onChange={handleAddFormChange}
        />
        <input type="email" 
        name="email" 
        required="required" 
        placeholder="enter a email..."
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
              
  };
export default App;
