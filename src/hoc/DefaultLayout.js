import React from 'react';
import "./Default.scss";
import Auth from "../utils/Auth/Auth";

function DefaultLayout(props) {
    const renderHeaderButtons = () => {
        if (!Auth.isLoggedIn) {
            return (
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/signin">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Sign Up</a>
                    </li>
                </>)
        } else {
            return (
                <>
                    <li className="nav-item user-page">
                        <a className="nav-link" href="/user">User page</a>
                    </li>
                    <li className="nav-item log-out">
                        <a className="nav-link" onClick={Auth.logOut} href="/signin">Log out</a>
                    </li>
                </>)
        }
    }
    return (
        <div className="App">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" href="/">Rentik</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#x">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="x">
                    <ul className="navbar-nav justify-content-right">
                        {renderHeaderButtons()}
                    </ul>
                </div>
            </nav>
            <div className="content">
                {props.children}
            </div>
            <footer className="bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="footer_nav">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Privacy policy</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                    <p>&copy; All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default DefaultLayout;
