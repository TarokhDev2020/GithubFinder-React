import React from 'react'
import {Link} from 'react-router-dom';

const UserItems = ({user}) => {
    return (
        <div className = "card text-center">
            <img src = {user.avatar_url} alt = "" className = "round-img" style = {{width: '60px'}}/>
            <h3>{user.login}</h3>
            <div>
                <Link to = {`/user/${user.login}`} className = "btn btn-dark">More</Link>
            </div>
        </div>
    )
}

export default UserItems
