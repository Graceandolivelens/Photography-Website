async function loadComponents(){

const header = document.querySelector("#header");

const footer = document.querySelector("#footer");


if(header){

const response = await fetch("components/header.html");

header.innerHTML = await response.text();

}


if(footer){

const response = await fetch("components/footer.html");

footer.innerHTML = await response.text();

}

}


loadComponents();
// Contact Form

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = new FormData(form);

        try {

            const response = await fetch(form.action, {

                method: "POST",

                body: data,

                headers: {
                    Accept: "application/json"
                }

            });

            if (response.ok) {

                window.location.href = "thankyou.html";

            } else {

                alert("There was a problem sending your inquiry. Please try again.");

            }

        } catch (error) {

            alert("Something went wrong. Please try again.");

        }

    });

}