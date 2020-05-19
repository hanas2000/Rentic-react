import React from 'react';
import photo from './images.png';
import './User.scss';
import PopUp from '../PopUp/PopUp'
import axios from "axios";
import {CONFIG} from "../../config";
import Auth from "../../utils/Auth/Auth";

class User extends React.Component {
    state = {
        isShownPopUp: false,
        user: {},
        imageHash: Date.now()
    };

    componentDidMount = () => {
        axios.get(CONFIG.apiServer + "user/" + Auth.loggedId)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        user: res.data,
                        imageHash: Date.now()
                    });
                    if (this.state.user.name === null) {
                        this.setState({
                            isShownPopUp: true,
                        });
                    }
                } else {
                    Auth.logOut();
                    window.location.href = "/signin";
                }
            }).catch((error) => {
        });
    };

    onClosePopup = () => {
        this.setState({isShownPopUp: false})
    };

    updateUserData = (user) => {
        this.setState({user});
    }

    renderCarField = () => {
        if (this.state.user.car) {
            return (
                <>
                    <h4 className="col-6" id="car-title">Rented car</h4>
                    <h4 className="col-6 db-info" id="car">{this.state.user.car.name}</h4>
                </>)
        } else {
            return (
                <>
                </>)
        }
    }

    onFileChangeHandler = (files) => {
        let reader = new FileReader();
        let file = files[0];

        reader.onloadend = () => {
            const formControls = {...this.state.formControls};
            const control = {...formControls.photo};
            control.file = file;
            control.url = reader.result;
            formControls.photo = control;
            const formData = new FormData();
            formData.append('file', file);
            axios.post(CONFIG.apiServer + "user/" + Auth.loggedId + "/image", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.data);
                    this.setState({
                        formControls: formControls,
                        user: res.data,
                        imageHash: Date.now()
                    });

                }).catch((error) => {
            });

        };
        reader.readAsDataURL(file)
    };

    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="main-user">
                        <div className="first-user-block row">
                            <div className="col-xs-12 col-md-4 col-sm-4">
                                <div className="photo-user">
                                    <input type="file" id="photo_input" onChange={(event) => {
                                        this.onFileChangeHandler(event.target.files)
                                    }}/>
                                    <img className="user-avatar"
                                         src={this.state.user.photo ? this.state.user.photo + "?" + this.state.imageHash : photo} alt="user"/>
                                </div>
                            </div>
                            <div className="user-info container col-xs-12 col-sm-8 col-md-8">
                                <h2 className="name-surname">{((this.state.user.name === null || this.state.user.name === undefined) ? "" : this.state.user.name) + " " + ((this.state.user.surname === null || this.state.user.name === undefined) ? "" : this.state.user.surname)}</h2>
                                <div className="row">
                                    <h4 className="col-6">№ passport</h4>
                                    <h4 className="col-6 db-info" id="passport">{this.state.user.passport}</h4>

                                    <h4 className="col-6">№ driver licence</h4>
                                    <h4 className="col-6 db-info"
                                        id="driver-licence">{this.state.user.driverLicence}</h4>

                                    <h4 className="col-6">E-mail</h4>
                                    <h4 className="col-6 db-info" id="e-mail">{this.state.user.email}</h4>

                                    <h4 className="col-6">Date Of Birth.</h4>
                                    <h4 className="col-6 db-info" id="date-of-birth">{this.state.user.dateOfBirth}</h4>

                                    <h4 className="col-6">City</h4>
                                    <h4 className="col-6 db-info" id="city">{this.state.user.city}</h4>

                                    <h4 className="col-6">Credit card</h4>
                                    <h4 className="col-6 db-info" id="creditCard">{this.state.user.creditCard}</h4>

                                    <h4 className="col-6">Phone number</h4>
                                    <h4 className="col-6 db-info" id="phone-number">{this.state.user.phoneNumber}</h4>

                                    {this.renderCarField()}
                                </div>
                                <button type="submit" className="btn btn-success btn-block edit"
                                        onClick={() => {
                                            this.setState({isShownPopUp: true})
                                        }}>Edit
                                </button>
                            </div>
                            <PopUp
                                onClosePopup={this.onClosePopup}
                                isShownPopUp={this.state.isShownPopUp}
                                user={this.state.user}
                                updateUserData={this.updateUserData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
