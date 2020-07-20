import React, { Component } from 'react'
import "./SectionBiased.css";
import Parallax from 'components/Parallax/Parallax';

class SectionBiased extends Component {
    render() {
        return (
            <div className="section">
                <div className="containerinit">
                    <div className="illustrator-grid">
                        <div className="illustration">
                            <img src="assets/img/bg-b.png" alt="" width="750" ></img>
                            
                        </div>
                        <div className="list-flex">
                        <div class="number-text">1</div>
                        <p><strong>We have a bias for action. </strong>
                        We act fast with clear priorities. We value speed, but take time to reflect when required.<br/></p>
                        <hr/>        
                        
                                <div class="number-text">2</div><p><strong>
                                We have a bias for action. </strong>
                                We act fast with clear priorities. We value speed, but take time to reflect when required.<br/>
                                </p>
                            
                        <hr/>
                            
                             <div class="number-text">3</div>
                             <p><strong>We have a bias for action. </strong>
                             We act fast with clear priorities. We value speed, but take time to reflect when required.<br/>
                             </p>
                            
                         <hr/>     
                        </div>


                    </div>
                </div>
            </div>            

        )
    }
}

export default SectionBiased
