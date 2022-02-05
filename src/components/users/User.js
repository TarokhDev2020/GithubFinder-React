import React, {useEffect, Fragment} from 'react'
import Repos from '../repos/Repos';
import {connect} from 'react-redux';
import {getUser, getRepos} from '../../actions/userActions';
import  {Link} from 'react-router-dom';

const User = ({user: {_user, loading}, getUser, getRepos, match}) => {

    useEffect(() => {
        console.log(`The username is: ${match.params.login}`);
        getUser(match.params.login);
        getRepos(match.params.login);
    }, [])

    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company} = _user;

    if (loading === true) {
        return <div><h4>Loading...</h4></div>
    } 

    return (
        _user !== null && (<Fragment>
            <Link to = "/" className = "btn btn-light">Back to search</Link>
            Hireable: {' '}
            {hireable ? <i className = "fas fa-check text-success"/> : <i className = "fas fa-times-circle text-danger"/>}
            <div className = 'card grid-2'>
                <div className = "all-center">
                    <img src = {avatar_url} className = "round-img" style = {{width: '150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment><h3>Bio: <p>{bio}</p></h3></Fragment>}
                    <a href = {html_url} className = "btn btn-dark my-1">Visit github profile</a>
                    <ul>
                        <li>
                            {login && <Fragment><strong>Username: {login}</strong></Fragment>}
                        </li>
                        <li>
                            {company && <Fragment><strong>Company: {company}</strong></Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment><strong>Website: {blog}</strong></Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className = "card text-center">
                <div className = "badge badge-primary">Followers: {followers}</div>
                <div className = "badge badge-success">Following: {following}</div>
                <div className = "badge badge-light">Public Repos: {public_repos}</div>
                <div className = "badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos/>
        </Fragment>)
    )
}

const mapStateToProps = state => {
    return {user: state.user}
}

export default connect(mapStateToProps, {getUser, getRepos})(User)
