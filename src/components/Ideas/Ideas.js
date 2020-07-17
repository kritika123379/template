import React, { Component } from 'react'
import "./Idea.css";

class Ideas extends Component {
    render() {
        return (
            <div>
             <div className="container-ideas">
                <div className="lightbox-wrapper">
                    <div className="margin-block">
                        <div className="author-quote">
                            <div className="author-circle">
                            <div className="author-wrapper">
                                <div className="content-inside">
                                    <div className="_80-percent-block ">
                                    <img  className="bulb" src="https://assets.website-files.com/5e9ef5c40065a0807315684a/5ea0347fca3b8956535dabf0_logo-1.png" width="120" alt=""></img>
                                    <div className="margin-40">
                                    <p>
                                    "The Mastertheme  team provides excellent  support,listens to their users continually works to improove their product"
                                    <br/>
                                    </p>
                                    </div>
                                    <div className="margin-20px">
                                    <h4>John Doe ,Idea Strategy</h4>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>   
            </div>
        )
    }
}

export default Ideas
