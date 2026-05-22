
function Message(props) {
    return(
        <div className="alert alert-primary" role="alert">
            {props.mytext}
        </div>
    );
}

export default Message;