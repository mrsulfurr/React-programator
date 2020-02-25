import React, {Component} from 'react';
import AuctionModel from "./AuctionModel";

class NewAuction extends Component {

    constructor(props) {
        super(props);
        this.state = new AuctionModel(); // pusty obiekt typu AuctionModel
    }
    // aktualizacja stanu
    handleChange = event => {
        const newValue = event.target.type === 'number'
                          ? parseInt(event.target.value)
                          : event.target.value;
        const fieldName = event.target.name; // nazwa pola w formularzu
        const updatedState = { [fieldName]:newValue}; // zapisuje każde pole z formularza
        this.setState( updatedState);
    }
    // zapis do backendu ('bazy danych')
    handleSubmit = event => {
        event.preventDefault();
        fetch("http://localhost:3100/auctions", {
            method: "post",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => {
                console.log("Dodałem nową aukcję");
                console.log(response);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p><label htmlFor="title">Tytuł aukcji:&nbsp;</label>
                        <input type="text"
                               name="title"
                               id="title"
                               value={this.state.title}
                               onChange={this.handleChange}/></p>
                    <p><label htmlFor="amount">Ilość:&nbsp;</label>
                        <input type="number"
                               name="amount"
                               id="amount"
                               value={this.state.amount}
                               onChange={this.handleChange}/></p>
                    <p><label htmlFor="price">Cena:&nbsp;</label>
                        <input type="number"
                               name="price"
                               id="price"
                               value={this.state.price}
                               onChange={this.handleChange}/></p>
                    <p><label htmlFor="description">Opis:&nbsp;</label>
                        <textarea rows="10"
                                  cols="25"
                                  name="description"
                                  id="description"
                                  value={this.state.description}
                                  onChange={this.handleChange}/></p>
                    <p><input type="submit" value="Zapisz"/></p>
                </form>
            </div>
        );
    }
}

export default NewAuction;