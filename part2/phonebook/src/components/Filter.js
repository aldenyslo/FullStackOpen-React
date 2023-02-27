const Filter = ({value, changeHandler}) => {
    return (
        <div>filter shown with <input value={value} onChange={changeHandler} /></div>
    )
}

export default Filter