import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ContactForm from './ContactForm';
import SubmitSuccess from './SubmitSuccess';

class App extends React.Component {
    render() {
        return (
            <Router>
                <h1>Make It Cheaper Contact Form</h1>
                <Route exact path="/" component={ContactForm} />
                <Route path="/success" component={SubmitSuccess} />
            </Router>
        );
    }
}

export default App;
