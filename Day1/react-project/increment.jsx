const domContainer = document.querySelector('#root');

// Render text inside root div
// ReactDOM.render('Hello world!', domContainer);

// Using React.createElement
// let newElement = React.createElement('div', null, 'Hello World!');

// // Passing React content in the 3rd parameter
// let pElement = React.createElement('div', null, React.createElement('p', null, 'Hello World!'));

// // Passing Multiple React contents
// let multiElement = React.createElement('div', null, [
//     React.createElement('p', null, 'Hello World!'),
//     React.createElement('p', null, 'New World!'),
// ]);


// const reactIncrement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
// );

// const Increment = () => {
//   return (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
//   );
// }

// ReactDOM.render(<><Increment /><Increment /><Increment /></>, domContainer);

// let number = 0;

// let button = document.querySelector('#button');
// let display = document.querySelector('#display');

// button.addEventListener('click', () => {
//     number++;
//     display.textContent = number;
// });

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
            </div>
        </div>
    );
};

ReactDOM.render(<div className="container"><Increment /><Increment /><Increment /></div>, domContainer);
