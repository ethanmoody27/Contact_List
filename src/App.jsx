import { useState } from 'react'
import ContactList from "./components/ContactList"
import SelectedContact from "./components/SelectedContact"
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={selectedContactId} />
      )}
    </>
  );
}

export default App
