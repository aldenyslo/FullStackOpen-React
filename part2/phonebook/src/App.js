import { useState } from 'react'
import Filter from "./components/Filter"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [newFilter, setNewFilter] = useState("")


  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  }

  const addInfo = (e) => {
    e.preventDefault();

    for (const person of persons) {
      if (person.name === newName) {
        window.alert(`${newName} is already added to phonebook`)
        return
      }
    }

    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject));
    setNewName("")
    setNewNum("")
  }

  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} changeHandler={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm submitHandler={addInfo} name={newName} nameChangeHandler={handleNameChange} num={newNum} numChangeHandler={handleNumChange} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App

