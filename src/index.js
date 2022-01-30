import './sass/main.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';


const firebaseConfig = {
  apiKey: "AIzaSyD0DUjAYi0kG-QG1BXTv0CSZLwVRsdVfHs",
  authDomain: "practice-37ec2.firebaseapp.com",
  databaseURL: "https://practice-37ec2-default-rtdb.firebaseio.com",
  projectId: "practice-37ec2",
  storageBucket: "practice-37ec2.appspot.com",
  messagingSenderId: "995824463584",
  appId: "1:995824463584:web:f69374a399285df7942a85",
  measurementId: "G-YZQVCVPXJR"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const refs = {
    button1 : document.querySelector('.button1'),
    button2: document.querySelector('.button2'),
    modal: document.querySelector('.modal'),
    closeButton: document.querySelector('.close'),
    form: document.querySelector('.form'),
    input: document.querySelector('.input1'),
    password: document.querySelector('.input2'),
    
}
function writeUserData( email, password) {
  const db = getDatabase();
  set(ref(db, 'users/' + uuidv4()), {
    email: email,
    password: password,
  });
    console.log(db)
}

function openModal() {
    
    refs.modal.classList.toggle('invis');
// console.log(firebase)
}
function openModalRegistr() { 
console.log("asd")

}
function clickButton(e,email, password) { 
    e.preventDefault();
    email = refs.input.value;
    password = refs.password.value
    console.log("email:",refs.input.value);
    console.log("password:",refs.password.value);
 //   localStorage.removeItem("feedback-form-state");
    refs.form.reset();
        writeUserData(email, password)


}

refs.button1.addEventListener('click', openModal)
refs.button2.addEventListener('click', openModalRegistr)
refs.closeButton.addEventListener('click', openModal)
refs.form.addEventListener('submit',clickButton)