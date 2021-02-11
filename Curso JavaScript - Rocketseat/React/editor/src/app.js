import React from 'react';
import MyEditor from './components/MyEditor';
import './app.css';

class App extends React.Component {
    render(){
        return(
            <div id="app">
                <MyEditor />
            </div>
        );
    }
}

export default App;
