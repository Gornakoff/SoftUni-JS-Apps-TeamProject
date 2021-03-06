import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group data-group">
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={this.props.username}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                        required="required"
                    />
                </div>
                <div className="form-group data-group">
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                        required="required"
                    />
                </div>

                <input
                    type="submit"
                    name="btnLogin"
                    value="Login"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
            
        );
    }
}

export default LoginForm;