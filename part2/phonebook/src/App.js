import { useState, useEffect } from 'react'
import personService from "./services/persons"
import Filter from "./components/Filter"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Notification from "./components/Notification"


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState("")
  const [newFilter, setNewFilter] = useState("")
  const [notifMsg, setNotifMsg] = useState(null)
  const [notifStatus, setNotifStatus] = useState("success")

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumChange = (e) => {
    setNewNum(e.target.value);
  }

  const addInfo = (e) => {
    e.preventDefault();

    const person = persons.find(person => person.name === newName);

    if (person) {
      updateInfo(person);
      return;
    }

    const personObject = {
      name: newName,
      number: newNum
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNotifStatus("success")
        setNotifMsg(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setNotifMsg(null)
        }, 5000)
        setNewName("")
        setNewNum("")
      })
  }

  const updateInfo = (person) => {
    if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
      const changedPerson = {...person, number: newNum}

      personService
        .update(person.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson));
          setNotifStatus("success")
          setNotifMsg(`Changed ${returnedPerson.name}'s phone number`)
          setTimeout(() => {
            setNotifMsg(null)
          }, 5000)
        })
        .catch(err => {
          setNotifStatus("error")
          setNotifMsg(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setNotifMsg(null)
          }, 5000)
        })
    }
  }

  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()));

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) {

      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification status={notifStatus} msg={notifMsg} />
      <Filter value={newFilter} changeHandler={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm submitHandler={addInfo} name={newName} nameChangeHandler={handleNameChange} num={newNum} numChangeHandler={handleNumChange} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deleteHandler={deletePerson} />
    </div>
  )
}

export default App

