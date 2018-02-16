import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

// var Rebase = require('re-base');
// var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyCOhjXpQz-J5hPu-q-3dO1XGPfDJEmSnr8",
    authDomain: "notes-3f129.firebaseapp.com",
    databaseURL: "https://notes-3f129.firebaseio.com",
    projectId: "notes-3f129",
    storageBucket: "notes-3f129.appspot.com",
    messagingSenderId: "156942768522"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
