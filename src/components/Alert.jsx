// Start coding here



function Alert(props) {
    const {ClassName,Emoji,Text} = props
    return (
        <>
        <div className={ClassName}>
            <div className="emoji">{Emoji}</div>
            <p className="text">{Text}</p>
        </div>
        </>
    )
}

export default Alert
