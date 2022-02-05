import React from 'react'
import {connect} from 'react-redux';
import UserItems from './UserItems';


const Users = ({user: {users, loading}}) => {

        if (loading) {
            return <h4>Loading...</h4>
        }

        return (
            <div style = {userStyle}>
                {users !== null && users.map(user => (
                    <UserItems key = {user.id} user = {user} />
                ))}
            </div>
        )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(Users);
