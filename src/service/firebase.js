import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAbJoFmhO0phtz8c_34TGG1bCCYtVbLsO8",
    authDomain: "react-app-b75a1.firebaseapp.com",
    databaseURL: "https://react-app-b75a1-default-rtdb.firebaseio.com",
    projectId: "react-app-b75a1",
    storageBucket: "react-app-b75a1.appspot.com",
    messagingSenderId: "1098345707033",
    appId: "1:1098345707033:web:a159984bfc54b5f0d11c88"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snopshot) => {
            cb(snopshot.val());
        })
    }

    closePokemonsSoket = () => {
        this.database.ref('pokemons').off();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snap => snap.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = ( data, cb) => {
        let newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
    }
}

export default Firebase;
