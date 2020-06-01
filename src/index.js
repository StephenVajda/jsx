// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component

const App = () => {
    return(
        <div>This is the root</div>
    ) 
      
}

// Take the react component and show it on the screen
ReactDOM.render(<App></App>, document.querySelector('#root')
);
