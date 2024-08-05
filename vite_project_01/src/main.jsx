import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
return(
  <div>
    <h1>My custom app !</h1>
  </div>
)
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     traget: "_blank",
//   },
//   childern: "Click me to visit google ",
// };

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://www.google.com",traget: "_blank"},
  "Click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(

         reactElement
)
 