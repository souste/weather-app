const content = document.createElement("div");
content.className = "content";
document.body.appendChild(content);

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const formHTML = `
<div class="outside-form-container">
<form class="form" action="">
<input type="text" id="location" name="location" placeholder="Enter Location" />
<button class="submit-button"><img src="../src/search.png" /></button>
</form>
<div class="toggle">
<div class="toggle-label">C</div>
<div class="toggle-switch"></div>
<div class="toggle-label active">F</div>
</div>
</div>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);
