import React from "react";
import "./reg.css"

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
        }
    }

    handleSubmit = () => {
        alert("You're successfully sign in")
    }

    render() {
        return(
            <form className="form">
                <div className="reg_form">
                    <h1>Registration</h1>
                    <label>
                        <b>Name:</b>
                        <input type="text" placeholder=""></input>
                    </label>
                    <br/>
                    <label>
                        <b>Surname:</b>
                        <input type="text" placeholder=""></input>
                    </label>
                    <br/>
                    <label>
                        <b>Email:</b>
                        <input type="text" placeholder=""></input>
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </div>
            </form>
        );
    };
}

export default Registration;