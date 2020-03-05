import React, {Component} from 'react';


class RegisterFrom extends Component {
    render() {
        return (
            <div class="container">
                <form class="form-group">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Imię</label>
                        <input type="text" class="form-control"  placeholder="Podaj imię" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nazwisko</label>
                        <input type="text" class="form-control" placeholder="Podaj nazwisko" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Adres e-mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Wpisz adres" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Hasło</label>
                        <input type="password" class="form-control" placeholder="Podaj hasło" />
                    </div>
                    <button class="btn btn-primary btn-lg" type="submit" value="Submit" >Zarejestruj!</button>
                </form>
            </div>
        );
    }
}

export default RegisterFrom;