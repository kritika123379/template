import React, { Component } from 'react'
import "./Getted.css";
class Getted extends Component {
    render() {
        return (
            <div className="get-started-section">
                <div className="container">
                    <div className="align-center">
                    <h3  className="hero-title_50px">Get Started</h3>
                        <div className="margin-15px">
                            <p className="sub-heading">
                                 "No credit card required"<br/>
                            </p>
                        </div>
                    </div>
                    <div className="subscribe-wrapper">
                        <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" class="form">
                        <input type="text" class="text-field w-node-8c7deaa5b58e-0e15684b w-input" maxlength="256" name="Name" data-name="Name" placeholder="Enter your name" id="Name" required=""/>
                        <input type="email" class="text-field w-node-b157c8e583c3-0e15684b w-input" maxlength="256" name="Email" data-name="Email" placeholder="Enter your email" id="Email" required=""/>
                        <input type="submit" value="Get Started →" data-wait="Please wait..." class="button subscribe orange w-button"/>
                        <label id="w-node-8afe2cc37944-0e15684b" class="w-checkbox checkbox-field">
                        <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox">
                        </div><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" required="" style={{opacity:"0",position:"absolute",zIndex:"-1",textAlign:"center"}}></input>
                        <p class="cookies-font check" style={{textAlign:"center"}}>By signing up you agree to our <a href="#">Terms &amp; Condition</a>.
                        </p><span class="checkbox-label w-form-label" style={{textAlign:"center"}}>Checkbox</span></label>
                        </form>
                        </div>
                        <div class="or-line"><div class="or-block">Or</div></div>
                        <div class="social-wrapper no-line">
                        <a href="#" class="social-icon w-inline-block">
                        <img src="https://assets.website-files.com/5e9ef5c40065a0807315684a/5ea072e724768331ec367f0c_facebook.png" width="14" alt=""/>
                        </a><a href="#" class="social-icon w-inline-block">
                        <img src="https://assets.website-files.com/5e9ef5c40065a0807315684a/5ea072e78afd7434efbc490b_twitter.png" width="14" alt=""/>
                        </a>
                        <a href="#" class="social-icon w-inline-block">
                        <img src="https://assets.website-files.com/5e9ef5c40065a0807315684a/5ea072e85c2b3766c3886bc8_instagram.png" width="15" alt=""/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Getted
