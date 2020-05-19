import React from "react";
import photo from './handshake.png';
import "./Car.scss";
import axios from "axios";
import {CONFIG} from "../../config";
import Auth from "../../utils/Auth/Auth";
import CarNode from "./CarNode/CarNode";

class Car extends React.Component {

    state = {
        dateFrom: '',
        dateTo: '',
        dropOff: '',
        pickUp: '',
        cars: [],
        hasCars: true,
        errorMessage: ''
    }

    componentDidMount = () => {
        axios.get(CONFIG.apiServer + "user/" + Auth.loggedId)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        user: res.data,
                    });
                    if (this.state.user.name === null) {
                        // window.location.href = "/user";
                    }
                } else {
                    Auth.logOut();
                    window.location.href = "/signin";
                }
            }).catch((error) => {
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.dateFrom && this.state.dateTo && this.state.dropOff && this.state.pickUp) {
            axios.post(CONFIG.apiServer + "user/" + Auth.loggedId + "/rent/", {
                apiKey: Auth.loggedApiKey,
                dateFrom: this.state.dateFrom,
                dateTo: this.state.dateTo,
                dropOff: this.state.dropOff,
                pickUp: this.state.pickUp
            })
                .then((res) => {
                    if (res.status === 200) {
                        this.setState({cars: res.data})
                        this.setState({errorMessage: ''});
                    } else {
                        Auth.logOut();
                        window.location.href = "/signin";
                    }
                }).catch((error) => {
                alert("Something went wrong!");
            });
        } else {
            this.setState({
                errorMessage: 'All fields must be filled in.',
                cars: []
            });
        }
    }

    renderCars = () => {
        const cars = [...this.state.cars];

        if (cars.length === 0 && !this.state.hasCars) {
            return (
                <div className="col-12">
                    <div className="default-block">
                        <h5 className="text-center">Cars are not found!!!</h5>
                    </div>
                </div>
            );
        }

        return cars.map((car, index) => (
                <CarNode
                    key={index}
                    car={car}
                    dateFrom={this.state.dateFrom}
                    dateTo={this.state.dateTo}
                    dropOff={this.state.dropOff}
                    pickUp={this.state.pickUp}
                />
            )
        );
    }

    render() {
        return (
            <div className="wrapper-car">
                <div className="container-fluid">
                    <div className="search-car">
                        <h2 className="heading-find"> Don`t lose the opportunity to use our car</h2>
                        <div className="row">
                            <div className="image col-md-6 col-xs-12">
                                <div>
                                    <img src={photo} className="photo handshake" alt="handshake"/>
                                </div>
                            </div>
                            <div className="search col-md-6 col-xs-12 align-items-center d-flex">
                                <form className="form-container-car w-100" onSubmit={(e) => {
                                    this.onSubmitHandler(e)
                                }}>
                                    <div className="form-group">
                                        <input type="text" id="pick-up-place" name="pick-up-place"
                                               className="form-control"
                                               placeholder="Pick up"
                                               onChange={(e) => this.setState({pickUp: e.target.value})}
                                               value={this.state.pickUp}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="drop-off-place" name="drop-off-place"
                                               className="form-control" placeholder="Drop off"
                                               onChange={(e) => this.setState({dropOff: e.target.value})}
                                               value={this.state.dropOff}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" id="pick-up-time" name="pick-up-time"

                                               className="form-control"
                                               onChange={(e) => this.setState({dateFrom: e.target.value})}
                                               value={this.state.dateFrom}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" id="drop-off-time" name="drop-off-time"

                                               className="form-control"
                                               onChange={(e) => this.setState({dateTo: e.target.value})}
                                               value={this.state.dateTo}/>
                                    </div>
                                    <p id="fields-empty">{this.state.errorMessage}</p>
                                    <button type="submit" className="btn btn-success btn-block rent">SEARCH CAR</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="cars">
                    {this.renderCars()}
                </div>
            </div>
        );
    }
}

export default Car;
