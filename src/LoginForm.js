import React, {Component} from 'react';
import FieldValidationResults from "./FieldValidationResults";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        // inicjalizacja stanu komponentu - wartości pól formularza
        this.state = { login: '', errorText: ''} // wartość początkowa pola i wyników walidacji
    }
    // event - obiekt przechowujący szczegóły wystąpienia zdarzenia 'change'
    // celem metody jest zapis nowej wartości pola do obiektu 'state'
    // oraz przykładowa walidacja pola
    handleChange = (event) => {
            const newValue = event.target.value; // wartość pobrana z pola po zmianie
            const updatedState = { login: newValue, errorText: ''}; // nową wartość pola oraz ew. komunikat błędu walidacji
            if (newValue.length < 4){
                updatedState.errorText = 'Za krótki tekst w polu'
            }
            this.setState( updatedState);
    }
    handleSubmit = (event) => {
        event.preventDefault(); // wyłączam domyślny submit
        // docelowo - np. komunikacja z serwerem
        console.log('Dane z formularza: '+this.state.login);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.login}
                onChange={this.handleChange}/> {/* podłączyć metodę, która zaktualizuje stan wg zawartości pola*/}
                <FieldValidationResults fieldErrorText={this.state.errorText} />
                <input type="submit" value="submit"/>
            </form>
        );
    }
}
export default LoginForm;