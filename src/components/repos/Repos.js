import React from 'react'
import {connect} from 'react-redux';
import RepoItems from './RepoItems';

const Repos = ({user: {repos}}) => {
    return (
        <div>
            {repos.map(repo => (
                <RepoItems key = {repo.id} repo = {repo}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {user: state.user}
}
 
export default connect(mapStateToProps)(Repos);
