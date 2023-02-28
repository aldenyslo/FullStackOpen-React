const Search = ({value, changeHandler}) => {
    return (
        <div>find countries <input onChange={changeHandler} value={value} /></div>
    )
}

export default Search