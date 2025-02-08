import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBqIsA6ezpbyjFdUBG7v4Zu5YNko6kdNTE",
    authDomain: "fb-contact-b236b.firebaseapp.com",
    databaseURL: "https://fb-contact-b236b-default-rtdb.firebaseio.com",
    projectId: "fb-contact-b236b",
    storageBucket: "fb-contact-b236b.appspot.com",
    messagingSenderId: "915847927855",
    appId: "1:915847927855:web:a2c83d54b70f963de54eda"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const contact = document.getElementById('Contact').value.trim();
    const email = document.getElementById('Email').value.trim();
    const message = document.getElementById('Message').value.trim();

    set(push(ref(database, "messages")), { name, contact, email, message, timestamp: new Date().toISOString() })
    .then(() => {
        showPopup("Your message has been submitted!");
        document.getElementById('contactForm').reset();
    })
    .catch(() => alert("Error submitting message."));
});

function showPopup(message) {
    const popup = document.getElementById("successPopup");
    popup.style.display = "block";
    setTimeout(() => { popup.style.display = "none"; }, 3000);
}
