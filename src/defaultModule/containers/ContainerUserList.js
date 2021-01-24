import { Component } from 'react';
import UserList from '../components/UserList'
import User from '../components/User'

class ContainerUserList extends Component {
    render() {
        return (
            <header className='header'>
                <User name="Liza"/>
                <UserList />
            </header>
        )
    }
}

export default ContainerUserList;