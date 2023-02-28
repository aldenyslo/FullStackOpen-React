const Country = ({name, showHandler}) => {
    return <p>{name} <button onClick={() => showHandler(name)}>show</button></p>
}

export default Country