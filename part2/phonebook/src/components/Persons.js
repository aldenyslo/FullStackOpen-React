import Person from "./Person"

const Persons = ({persons, deleteHandler}) => {
    return (
        persons.map((person) => <Person key={person.id} person={person} deleteHandler={deleteHandler} />)
    )
}

export default Persons