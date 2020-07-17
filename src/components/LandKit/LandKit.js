import React, { Component } from 'react'
import Video from "../../assets/svgs/video"
import Card from "../../components/Card/Card";
import arrow  from "../../assets/img/arrow.png";
import "./Landkit.css";

class LandKit extends Component {
    render() {
        return (
            <Card>
            <div class="col-md-8 col-md-offset-2 text-center" style={{textAlign:"center",padding:"150px"}}>
            <div style={{textAlign:"center"}}>
              <Video/>  
              <img src={arrow} alt="" width="50px" height="50px"/>
            </div>
            <h2 className="title">See How<span className="add-scribble-below"> Landkit</span> Works</h2>
            <h5>Watch the two-minute video to learn how.</h5>
            </div>
            </Card>
        )
    }
}

export default LandKit
