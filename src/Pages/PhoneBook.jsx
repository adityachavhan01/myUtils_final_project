import React, { useState } from "react";

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const addDetails = () => {
    if(name.trim() && phoneNumber.trim()){
      setContacts([...contacts, { id:name, name:name,number:phoneNumber}]);
      setName("");
      setphoneNumber("");
    }
  };

  // css
  const shinyBlackStyle = {
    background: "linear-gradient(145deg, #000000, #ff0000)",
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex max-w-2xl space-x-4">
        <div className="w-lg p-5 rounded-lg shadow-lg" style={shinyBlackStyle}>
          <div className="text-white">
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border text-black p-2 flex-grow rounded-md"
            />
            <h4>Phone Number</h4>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              className="border text-black p-2 flex-grow rounded-md mb-2"
              placeholder="Enter a phone 10 digit number..."
            />
            <div>
              <button
                onClick={addDetails}
                className="bg-blue-950 text-white px-4 py-2 rounded-md"
              >
                Add Details
              </button>
            </div>
          </div>
        </div>


        <div className="w-lg p-5 rounded-lg shadow-lg" style={shinyBlackStyle}>
          {/* Additional content can go here */}
          <h1 className="text-white">Contacts</h1>
          <ul>
            {
              contacts.map(contacts => (
                <li key={contacts.id}
                className="bg-white text-black p-2 m-2 flex justify-between items-center rounded-md">
                  
                  <h4>{contacts.name}</h4>
                  <p>{contacts.number}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;
