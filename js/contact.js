const btnContact = document.getElementById("btn-ver");
const contactSection = document.getElementById("contact-form");

btnContact.addEventListener("click", verFormularioContacto);

function verFormularioContacto() {
  if (contactSection.classList.contains("ocultar")) {
    contactSection.classList.remove("ocultar");
  } else {
    contactSection.classList.add("ocultar");
  }
}

//Form

const $form = document.getElementById("form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    alert("Gracias por el mensaje");
  }
}
