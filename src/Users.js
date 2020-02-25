import React, {Component} from 'react';
import UserItem from "./UserItem";

class Users extends Component {
    constructor(props) {
        super(props);
        // stan ? - początkowy, przed komunikacją z backendem
        this.state = {userList: []}
    }
    // po tym, jak komponent został dołączony do DOM
    componentDidMount() {
        fetch('/usersdb.json') // kiedyś to się jakoś wykona
            .then( response => {
                if ( 200 === response.status){
                    response.json().then( users => {
                        console.log(users);
                        this.setState( {userList: users});
                    });
                }
            }) // na otrzymanie poprawnych wyników (coś przyszło, może być np. 404)
            .catch(ex => console.log('Błąd komunikacji z serwerem'))
    }
    render() {
        return (
            <div>
                { this.state.userList.map( u => <UserItem key={u.id} username={u.username} name={u.name} />)}
            </div>
        );
    }
}

export default Users;