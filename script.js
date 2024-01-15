import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsisWpbiNSJ1-339DkNf8qfvpRgBk_AJs",
  authDomain: "humidity-d9ff8.firebaseapp.com",
  databaseURL:
    "https://humidity-d9ff8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "humidity-d9ff8",
  storageBucket: "humidity-d9ff8.appspot.com",
  messagingSenderId: "873224271369",  
  appId: "1:873224271369:web:d4c26b906a4aad8d612ad8",
  measurementId: "G-NBG23ZGFKG",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Assuming you have an HTML element with id "data-list" to display the data
const dataList = document.getElementById("data-list");

// Reference to a specific node in your database
const itemsRef = ref(database, "Humidity_Details"); // Replace 'items' with your actual node name

// Listen for changes in the data
onValue(itemsRef, (snapshot) => {
  dataList.innerHTML = ""; // Clear previous data

  // Iterate through the snapshot to get the data
  snapshot.forEach((childSnapshot) => {
    const data = childSnapshot.val();
    dataList.innerHTML += `<div class="col-md-6 col-lg-4" >
                            <div class="card mx-auto my-4" style="width: 18rem;">
                            <img src=${data.img} class="card-img-top" alt="...">
                            <div class="card-body">
                              <div class= "d-flex">
                              <img class="me-2" src="./png/humidity.png" style="width: 25px; height: 25px">
                                <span class="card-title"><i><b>Humidity:</b></i> ${data.humidity}%</span>
                              </div>
                              <div class= "d-flex">
                                <img class="me-2" src="./png/temperature.png" style="width: 25px; height: 25px">
                                <span class="card-title"><i><b>Temperature:</b></i> ${data.temperature}°C</span>
                              </div>
                            </div>
                            </div>
                          </div>`;             
  });
});
