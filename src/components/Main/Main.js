import React from "react";
import "./Main.scss";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h1 className="heading-rentik">Why <span className="rentik">Rentik</span> ?</h1>
                    <h3 className="mouse"></h3>
                </div>
                <div className="main-block">
                    <div className="block row">
                        <div className="card first-block col-md-4 col-xs-12">
                            <div className="heading">PAY ONLINE AND SAVE</div>
                            <div className="description">
                                <p>
                                    You can save up to 15% of the rental price just by choosing Pay now option while
                                    booking
                                </p>
                            </div>
                        </div>
                        <div className="card second-block col-md-4 col-xs-12">
                            <div className="heading">RENTIK FLEX</div>
                            <div className="description">
                                <p>
                                    When you need a car for more than 1 month. Service assistance 24/7
                                </p>
                            </div>
                        </div>
                        <div className="card third-block col-md-4 col-xs-12">
                            <div className="heading">HELLO WEEKEND</div>
                            <div className="description">
                                <p>
                                    Unlock amazing weekend experiences with a Rentik car hire and save
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="find-car">
                    <div className="frame">
                        <h2 className="heading-find">YOU’RE ONLY A MINUTE AWAY FROM FINDING YOUR CAR!</h2>
                        <p className="description-find">Find out who is training where and when
                            Use filters to quickly select the most suitable car you are looking for and the time and
                            location you want to rent car.
                            You will see a list of cars.
                            Once you find car that match your interests, just rent it.</p>
                        <a href="car">
                            <button type="submit" className="btn btn-success btn-block rent">RENT CAR</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
