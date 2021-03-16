import React, { Component } from 'react'
import './home.css';
import img_logo from './img/logo.png';
class Home extends Component {

    render() {
        return (
            <div>
                <div className="back-ground"></div>
                <div className="main-container">
                    <div className="first-container">
                        <div className="netflix-logo">
                            <img src={img_logo} alt="" />
                        </div>
                        <div className="language">
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>
                            <div>
                                <button className="btn-sign">Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className="second-container"> 
                            <div className="heading">Unlimitade movies, TV shows and more.</div>
                            <div className="heading-first">Watch anywhere. Cancel anytime.</div>
                            <div className="heading-second">Ready to watch? Enter your email to create or restart your membership.</div>
                            <div className="email">
                                <input className="eml" type="text" placeholder="Email address"/>
                                <button className="btn-getstart"  onClick={(e) => window.location.href='https://www.netflix.com/in/'}>Get Started</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
