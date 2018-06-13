import React, {Component} from 'react';
import logo from './../../img/logo.png';
import './Profile.css';
import TextField from '@material-ui/core/TextField';
import TodoForm from "../Form_add_Song/TodoForm";
import Listas from "../List/Listas";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItem: true
        };
        this.displayProfileForm = this.displayProfileForm.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.restoreFormValue = this.restoreFormValue.bind(this);
    }

    // Function called after DOM has been done to display the edit button on mobiles
    componentDidMount() {
        // Hide profile form
        document.getElementsByClassName('profileForm')[0].style.display = 'none';
        // Always show the edit button if its a mobile or a tablet
        if (window.innerWidth <= 768) {
            document.getElementById('editBtn').style.display = 'block';
        }
    }

    displayProfileForm() {
        const show = !this.state.showItem;
        this.setState({
            showItem: show
        });
    }

    checkForm(e) {
        let validForm = false;
        // Validate form
        if (e.target.name === 'nickname') {
            e.target.setAttribute('maxlength', 20);
            e.target.setAttribute('minlength', 5);
            // Comprobar longitud mínima?
            // Comprobar si el nombre existe o no en el servidor
            //
        } else {
            e.target.setAttribute('maxlength', 150);
        }
        // If is valid it will be send to the database
        if (validForm) {
            // Enviar json
        }
    }

    restoreFormValue(e) {
        console.log(e);
        if (e.target.name === 'nickname') {
            console.log('Restaurar valor Nickname');
        } else {
            console.log('Restaurar valor Description');
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center">

                {/* Profile data container */}
                <div className="center col-md-8">

                    {/* Profile data */}
                    <div className="profile">
                        <div className="row">

                            <div className="profileData col-md-9 row">
                                {/* Profile picture */}
                                <div className="image col-md-4 col-sm-12">
                                    <img src={logo} alt="profile"/>
                                </div>

                                {/* Main */}
                                <div
                                    className="info col-md-8 col-sm-12 d-flex flex-column align-items-center justify-content-center">
                                    {/* Edit icon */}
                                    <div style={{display: ((this.state.showItem) ? 'block' : 'none')}}
                                         onClick={this.displayProfileForm}>
                                        <span id="editBtn" className="fas fa-edit"></span>
                                    </div>
                                    {/* Profile data */}
                                    <div className="data" style={{display: ((this.state.showItem) ? 'block' : 'none')}}>
                                        <h3 className="name">Nombre</h3>
                                        <div>Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, dis ac
                                            netus tellus leo massa gravida, mattis suscipit ante purus malesuada
                                            pulvinar.
                                        </div>
                                    </div>
                                    {/* Form */}
                                    <form className="profileForm"
                                          style={{display: ((!this.state.showItem) ? 'flex' : 'none')}}>
                                        <TextField name="nickname" label="Nickname"
                                                   onChange={this.checkForm}/> {/* Value: nombre original (sera required) */}
                                        <TextField name="description" label="Description" rowsMax="2" multiline
                                                   onChange={this.checkForm}/>
                                        <input type="file" name="profileImage"/>
                                        <div className="formButtons">
                                            <button type="reset" className="btn btn-secondary"
                                                    onClick={this.displayProfileForm}>Cancel
                                            </button>
                                            <button type="submit" className="btn btn-success" onClick={this.checkForm}>
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Profile stadistics (Following, Followers, Likes) */}
                            <div className="stats d-flex col-md-3">
                                <div className="box">
                                    <span className="value">523</span>
                                    <span className="parameter">Following</span>
                                </div>
                                <div className="box">
                                    <span className="value">1387</span>
                                    <span className="parameter">Followers</span>
                                </div>
                                <div className="box">
                                    <span className="value">146</span>
                                    <span className="parameter">Likes</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row'>
                    <TodoForm/>
                    <Listas/>

                </div>
            </div>

        );
    }
}

export default Profile;
