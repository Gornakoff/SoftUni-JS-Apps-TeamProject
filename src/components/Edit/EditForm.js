import React, { Component } from 'react';

export default class EditForm extends Component {
    render() {

        return (

            <form className="form-inline" onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        name="newtask"
                        placeholder="New Task"
                        value={this.props.newtask}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="Date"
                        name="newdate"
                        placeholder="Date"
                        value={this.props.newdate}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="newlocation"
                        placeholder="Location"
                        value={this.props.newlocation}
                        onChange={this.props.onChangeHandler}
                        className="form-control"
                        required="required"
                    />
                </div>
                <div className="form-group">
                    <select name="Priority">
                        <option value="high">High Priority</option>
                        <option value="normal">Normal Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                </div>

                <input
                    type="submit"
                    name="btnLogin"
                    value="Create"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                    onSubmit={this.props.onSubmitHandler}
                />
            </form>

        );
    }
}