const content = document.getElementById("content");

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const formHTML = `
<form class="form" action="">
<label for="location">Enter City:</label>
<input type="text" id="location" name="location" placeholder="Manchester" />
<button class="submit-button">Submit</button>
</form>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);
