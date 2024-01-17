const content = document.getElementById("content");

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const formHTML = `
<form class="form" action="">
<input type="text" id="location" name="location" placeholder="Enter Location" />
<button class="submit-button"><img src="../src/search.png" /></button>
</form>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);
