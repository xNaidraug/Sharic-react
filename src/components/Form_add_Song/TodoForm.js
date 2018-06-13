import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e) {

        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    state = {
        open: false,
        age: '',
    };
    handleChange = name => event => {
        this.setState({[name]: Number(event.target.value)});
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const {classes} = this.props;
        return (

            <div className="card col-md-1">

                <div onClick={this.handleClickOpen}>
                    <span id="editBtn" className="fas fa-edit"></span>
                </div>

                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Fill the form</DialogTitle>
                    <form onSubmit={this.handleSubmit} className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="responsible"
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.handleInputChange}
                                placeholder="Responsible"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                placeholder="Description"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInputChange}
                            >
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <button onClick={this.handleClose} type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </Dialog>
            </div>

        )
    }

}

export default TodoForm;