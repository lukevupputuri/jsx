// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtontext(){
    return 'Click on me!';
}
// Create a react component
const App = () => {
    return (
    <div> 
        <label className = "label" for ="name">
        Enter name:
        </label>
        <input id="name" type="text" />
        <button stylem= {{ backgroundColor: 'blue' , color:'white'}}>
        {getButtontext()}
        </button>
    </div>
    );
};
// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);