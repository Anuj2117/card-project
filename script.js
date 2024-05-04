// const form = document.querySelector("form"); // Select the form element

// Select all input fields using form as the parent element
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const country = document.querySelector("#country");
const state = document.querySelector("#state");
const district = document.querySelector("#district");
const city = document.querySelector("#city");
const number = document.querySelector("#number");

// Select all elements to display the form data
const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const countryname = document.querySelector(".countryname");
const statename = document.querySelector(".statename");
const districtname = document.querySelector(".districtname");
const cityname = document.querySelector(".cityname");
const phonenumber = document.querySelector(".phonenumber");

const submit = document.querySelector("#submit");
submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const elem = document.querySelector("#uploadimage");
    const file = elem.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        console.log("anuj");
        document.getElementById("displayimage").src = event.target.result;
    };

    reader.readAsDataURL(file);

    console.log(fname.value);
    firstname.innerText = fname.value;
    lastname.innerText = lname.value;
    countryname.innerText = country.value;
    statename.innerText = state.value;
    districtname.innerText = district.value;
    cityname.innerText = city.value;
    phonenumber.innerText = number.value;
});
