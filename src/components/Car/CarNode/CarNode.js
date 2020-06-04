import React from "react";
import axios from "axios";
import {CONFIG} from "../../../config";
import Auth from "../../../utils/Auth/Auth";
import swal from 'sweetalert';

class CarNode extends React.Component {
    renderFeatures = () => {
        if (!this.props.car.features) {
            return '';
        }
        return this.props.car.features.map((feature, index) => (
                <li>
                    <p>{feature.name}</p>
                </li>
            )
        );
    }

    rentCar = (car) => {
        axios.post(CONFIG.apiServer + "user/" + Auth.loggedId + "/rent/" + car.id, {
            apiKey: Auth.loggedApiKey,
            dateFrom: this.props.dateFrom,
            dateTo: this.props.dateTo,
            dropOff: this.props.dropOff,
            pickUp: this.props.pickUp
        })
            .then((res) => {
                if (res.status === 200) {
                    swal("Congrats!", "You rent a car!", "success");
                    console.log(res.data);
                } else {
                    Auth.logOut();
                    window.location.href = "/signin";
                }
            }).catch((error) => {

        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="rent-car row">
                    <div className="image col-md-6 col-xs-12">
                        <img src={this.props.car.photo} className="photo" alt="car"/>
                    </div>
                    <div className="col-md-6 col-xs-12 align-items-center d-flex">
                        <div className="w-100">
                            <h2 className="heading-find">{this.props.car.name}</h2>
                            <p>{this.props.car.content}</p>
                            <h4>Features:</h4>
                            <ul>
                                {this.renderFeatures()}
                            </ul>
                            <h5 className="price">Price: {this.props.car.price}$</h5>
                            <button type="submit" className="btn btn-success btn-block rent" onClick={() => {
                                this.rentCar(this.props.car)
                            }}>RENT CAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarNode;
