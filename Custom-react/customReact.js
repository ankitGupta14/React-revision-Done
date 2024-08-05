function customRender(reachElement, container) {
  /*   const domElement = document.createElement(reachElement.type)
   domElement.innerHTML = reachElement.childern
   domElement.setAttribute('href', reachElement.props.href)
   domElement.setAttribute('traget',reachElement.props.traget)
   container.appendChild(domElement) */

  // modified code for above uppar wla

  const domElement = document.createElement(reachElement.type);
  domElement.innerHTML = reachElement.childern;
  for (const prop in reachElement.props) {
    if (prop === "childern") continue;
    domElement.setAttribute(prop, reachElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reachElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    traget: "_blank",
  },
  childern: "Click me to visit google ",
};

const mainContainer = document.querySelector("#root");

customRender(reachElement, mainContainer);
