import React from 'react';
import { Redirect } from 'react-router-dom';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            business_name: '',
            email: '',
            telephone_number: '',
            submitStatus: '',
            submitted: false
        };
    }

    async sendFormData() {
        this.setState({ submitStatus: 'Submitting data...' });

        const {submitStatus, submitted, ...formData} = this.state;
        const response = await fetch('/api/create', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json(); console.log(data);

        if (response.status === 201) {
            this.setState({ submitted: true });
        }
        else {
            this.setState({ submitStatus: "Something went wrong, please try again later" });
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.sendFormData();

    }

    render(props) {
        if (this.state.submitted === true) {
            return <Redirect to='/success' />
        }

        return (
            <form id="lead_form" onSubmit={this.handleSubmit}>
                <h2>Enter your details here</h2>
                <div className="my-2">You complete the form. We call you. Good things happen.</div>
                {this.state.submitStatus &&
                <div className="my-2 alert alert-danger">{this.state.submitStatus}</div>
                }
                <div className="form-group">
                    <input className="form-control form-control-lg" placeholder="Your full name" type="text" name="name" maxLength="100" onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                <input className="form-control form-control-lg" placeholder="Your company name" type="text" name="business_name" maxLength="100" onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" placeholder="Your email address" type="email" name="email" maxLength="80" onChange={this.handleInputChange} required/>
                </div>
                <div className="form-group">
                    <input className="form-control form-control-lg" placeholder="Your telephone number" type="tel" name="telephone_number" onChange={this.handleInputChange} pattern="[0-9]{10,13}" required/><br/>
                </div>
                <button className="btn btn-primary form-control form-control-lg">Next</button>
            </form>
        )
    }
}

export default ContactForm;