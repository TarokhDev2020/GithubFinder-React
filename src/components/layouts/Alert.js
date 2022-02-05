import React from 'react'
import {connect} from 'react-redux';


const Alert = ({user: {alert}}) => {
    return (
        alert !== null && <div className = {`alert alert-${alert.type}`}>
            <i className = "fas fa-info"/> {alert.msg}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(Alert);
