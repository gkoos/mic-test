import React from 'react';
import './App.css';

class App extends React.Component {
    state = {status: "loading"}

    async componentDidMount() {
        const response = await fetch('/api/create', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                name: "Name"
            }
        });
        const data = await response.json();

        this.setState({status: data.status});
    }

    render() {
        return (
            <div className="App">
                <h1>Frontend</h1>
                Status: {this.state.status}
            </div>
        );
    }
}

export default App;
