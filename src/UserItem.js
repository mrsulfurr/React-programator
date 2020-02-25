import React, {Component} from 'react';

class UserItem extends Component {
    render() {
        return (
            <div>
                Login: {this.props.username}, Imię i nazwisko: {this.props.name}
            </div>
        );
    }
}

export default UserItem;