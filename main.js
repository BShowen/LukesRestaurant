/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const app = (function(){
  document.querySelector("body").innerHTML = "<div id='app'></div>";
  const root = document.querySelector('#app');
  const render = (node) => {
    root.appendChild(node);
  }
  return { render };
})();

const textComponent = function(text){
  const p = document.createElement("p");
  p.innerText = text; 
  return p;
}

app.render(new textComponent("HelloBradley!!"));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50TGFuZGluZ1BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gKGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmlubmVySFRNTCA9IFwiPGRpdiBpZD0nYXBwJz48L2Rpdj5cIjtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcbiAgY29uc3QgcmVuZGVyID0gKG5vZGUpID0+IHtcbiAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG4gIHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuY29uc3QgdGV4dENvbXBvbmVudCA9IGZ1bmN0aW9uKHRleHQpe1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuaW5uZXJUZXh0ID0gdGV4dDsgXG4gIHJldHVybiBwO1xufVxuXG5hcHAucmVuZGVyKG5ldyB0ZXh0Q29tcG9uZW50KFwiSGVsbG9CcmFkbGV5ISFcIikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==