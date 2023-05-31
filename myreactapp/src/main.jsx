import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const element = React.createElement('h1', null, 'Hello, world!');

// let index = 0;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//     const element = (
//         <h1 className="heading" tabIndex={index}>
//             <span className="text">Hello {new Date().toLocaleTimeString()}</span>
//             <img src="" />
//         </h1>
//     );

//     root.render(element);
// }, 1000);



// function getGreeting(user) {
//     if (user) {
//         return (
//             <h1 className="heading">
//                 <span>Hello, {user}!</span>
//             </h1>
//         )
//     } else {
//         return <h1>Hello, user!</h1>
//     }
// }
