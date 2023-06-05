import ReactDOM from 'react-dom/client'
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock({locale}) {
//     return (
//         <h1 className="heading" tabIndex={index}>
//             <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" />
//         </h1>
//     );
// }

root.render(<Clock locale="en-US"/>);