import React from 'react'
import { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    
    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
                console.log("Selected contact data :", data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchSelectedContact();
    }, [selectedContactId]);
    
    
    return (
    <div>
      <p>Info</p>
    </div>
  )
}
