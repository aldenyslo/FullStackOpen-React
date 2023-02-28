const Notification = ({status, msg}) => {
    if (msg === null) {
        return null
    }

    const baseStyle = {
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={status === "success" ? {...baseStyle, color: "green"} : {...baseStyle, color: "red"}}>{msg}</div>
    )
}

export default Notification