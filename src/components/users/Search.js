import React, {useState} from 'react'
import {connect} from 'react-redux';
import {searchUsers, clearUsers, setAlert, removeAlert} from '../../actions/userActions';


const Search = ({user: {users}, searchUsers, clearUsers, setAlert, removeAlert}) => {

    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something...', 'light');
            setTimeout(() => {
                removeAlert();
            }, 5000);
        }
        else {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form className = "form" onSubmit = {onSubmit}>
                <input type = "text" name = "text" value = {text} placeholder = "Search Users..." onChange = {onChange}/>
                <input type = "submit" value = "Search" className = "btn btn-dark btn-block"/>
            </form>
            {users !== null && (<button className = "btn btn-light btn-block" onClick = {clearUsers}>Clear</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {user: state.user};
}

export default connect(mapStateToProps, {searchUsers, clearUsers, setAlert, removeAlert})(Search);
