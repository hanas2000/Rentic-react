import React from "react";
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import {CONFIG} from "../../config";
import Auth from "../../utils/Auth/Auth";

class PopUp extends React.Component {

    state = {
        name: '',
        surname: '',
        city: '',
        creditCard: '',
        phoneNumber: '',
        dateOfBirth: '',
        driverLicence: '',
        password: '',
        passport: '',
        errorMessage: ''
    };

    componentWillReceiveProps(props) {
        this.setState({
            name: props.user.name ? props.user.name : '',
            surname: props.user.surname ? props.user.surname : '',
            city: props.user.city ? props.user.city : '',
            creditCard: props.user.creditCard ? props.user.creditCard : '',
            phoneNumber: props.user.phoneNumber ? props.user.phoneNumber : '',
            dateOfBirth: props.user.dateOfBirth ? props.user.dateOfBirth : '',
            driverLicence: props.user.driverLicence ? props.user.driverLicence : '',
            passport: props.user.passport ? props.user.passport : '',
        })
    }

    allFields() {
        return (this.state.name === '' || this.state.surname === '' || this.state.city === '' || this.state.creditCard === '' ||
            this.state.phoneNumber === '' || this.state.dateOfBirth === '' || this.state.driverLicence === '' ||
            this.state.passport === '' || this.state.password === '');
    }


    updateUser() {
        if (!this.allFields()) {
            axios.put(CONFIG.apiServer + "user/" + Auth.loggedId, {
                name: this.state.name,
                surname: this.state.surname,
                city: this.state.city,
                creditCard: this.state.creditCard,
                phoneNumber: this.state.phoneNumber,
                dateOfBirth: this.state.dateOfBirth,
                driverLicence: this.state.driverLicence,
                password: this.state.password,
                passport: this.state.passport,
                apiKey: Auth.loggedApiKey,
            }).then((res) => {
                if (res.status === 200) {
                    this.props.onClosePopup();
                    this.props.updateUserData(res.data);
                }
            }).catch((error) => {
                alert("Something went wrong!");
            });
        } else {
            this.setState({errorMessage: 'All fields must be filled in.'})
        }
    }

    render() {
        return (
            <Modal
                onHide={this.props.onClosePopup}
                show={this.props.isShownPopUp}
                user={this.props.user}
                size="lg"
                animation={false}
            >
                <form className="form-container" onSubmit={(e) => {
                    e.preventDefault(); this.updateUser();
                }}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({name: e.target.value})} placeholder="Name"
                               value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({surname: e.target.value})} placeholder="Surname"
                               value={this.state.surname}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({passport: e.target.value})}
                               placeholder="Passport" value={this.state.passport}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({driverLicence: e.target.value})}
                               placeholder="Driver Licence" value={this.state.driverLicence}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({dateOfBirth: e.target.value})}
                               placeholder="Date of birthday(yyyy-mm-dd)" value={this.state.dateOfBirth}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({city: e.target.value})} placeholder="City"
                               value={this.state.city}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({creditCard: e.target.value})}
                               placeholder="Credit-card" value={this.state.creditCard}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               onChange={(e) => this.setState({phoneNumber: e.target.value})}
                               placeholder="Phone number" value={this.state.phoneNumber}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control"
                               onChange={(e) => this.setState({password: e.target.value})}
                               placeholder="Password" value={this.state.password}/>
                    </div>
                    <p id="fields-empty">{this.state.errorMessage}</p>
                    <button type="submit" className="btn btn-success btn-block">Save</button>
                </form>
            </Modal>
        );
    }
}

export default PopUp;
