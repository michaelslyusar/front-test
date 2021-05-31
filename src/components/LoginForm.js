import React from 'react';

export default class LoginForm extends React.Component {
    state = {
        description: '',
        notes: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    };

    render() {
        return (
            <form className="login-form mt6">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" 
                       name="username" 
                       value={this.state.description} 
                       onChange={this.onDescriptionChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <textarea onChange={this.onNoteChange}
                          value={this.state.notes}
                          placeholder="Notes">

                </textarea>

                <button className="login-button center-50">Login</button>
            </form>
        )
    }

}

