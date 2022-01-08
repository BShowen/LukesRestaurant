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

app.render(new textComponent("Hello world!"));