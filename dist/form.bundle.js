(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["form"],{

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xuXG5jb25zdCBmb3JtSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJvdXRzaWRlLWZvcm0tY29udGFpbmVyXCI+XG48Zm9ybSBjbGFzcz1cImZvcm1cIiBhY3Rpb249XCJcIj5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibG9jYXRpb25cIiBuYW1lPVwibG9jYXRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIExvY2F0aW9uXCIgLz5cbjxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+PGltZyBzcmM9XCIuLi9zcmMvc2VhcmNoLnBuZ1wiIC8+PC9idXR0b24+XG48L2Zvcm0+XG48ZGl2IGNsYXNzPVwidG9nZ2xlXCI+XG48ZGl2IGNsYXNzPVwidG9nZ2xlLWxhYmVsXCI+QzwvZGl2PlxuPGRpdiBjbGFzcz1cInRvZ2dsZS1zd2l0Y2hcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJ0b2dnbGUtbGFiZWwgYWN0aXZlXCI+RjwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbmA7XG5cbmZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gZm9ybUhUTUw7XG5jb250ZW50LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9