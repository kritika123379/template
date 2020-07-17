/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
// import Button from "../CustomButtons/Button"
const useStyles = makeStyles(styles);
//import of the card
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import "./Footer.css";
import { Facebook, Twitter,Camera} from "@material-ui/icons";
import Youtube from "../../assets/svgs/Youtube"

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const style={
    backgroundColor :"teal"
  }
  return (
    <div className="inner-container">
    <div className={footerClasses}>
      <div className={classes.container} >
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">     
            </div>
            <hr class="clearfix w-100 d-md-none pb-3"/>
            <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
            <h3 class="land">Land <span className="kit">Kit</span></h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <br/>
              <Button  color="danger" textcolor="white">Stay In Touch</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h5 className="title">UseFul Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Welcome</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Style Guide</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Licensing</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sign In</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h5>OFFICE</h5>
            <p>Greenwich Village & Soho,
            10012 New York, USA</p>
            <p><a href="/"><u>office@landkit.com</u></a></p> 
            <p><a href="/"><u>office@landkit.com</u></a></p>  
          </Grid>
          <Grid item xs={6} sm={3}>
              <p>FOLLOW</p>
              <Facebook/>
              <Twitter/>
              <Camera/>
          </Grid>
          </Grid>
          </div>
        </div>
        <div class="footer-copyright text-center py-3 land"> Copyright LandKit:
          Powered by<span class="green"><u><a class="green" href=""> . Webflow</a></u></span>
        </div>
      </footer>
      </div>
    </div>
    </div>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
