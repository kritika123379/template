import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCard from "./Sections/SectionCards.js";
import Sectionfeatured from "./Sections/Sectionfeatured.js";
import LandKit from "components/LandKit/LandKit.js";
import Idea from "components/Idea/Idea.js";
import BiasSection from "components/BiasSection/BiasSection.js";
import Gettingstarted from "components/Gettingstarted/Gettingstarted.js";
import Getted from "components/Getted/Getted.js";
import SectionBiased from "components/SectionBiased/SectionBiased.js";
import Ideas from "components/Ideas/Ideas.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="LandKit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg-a.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Build designs <br/>that scale</h1>
                <h3 className={classes.subtitle}>
                  Landkit comes with a multitude of carefully designed page layouts, purpose built content blocks.
                   <br/>
                  <Button color="success">Buy Now </Button>
                  <Button color="danger">View The Webflow</Button>
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <LandKit/>
      <Ideas/>
     <BiasSection/> 
     
      <SectionBiased/>
      <Sectionfeatured/>
      <SectionCard/>
     
      <Getted/>
     
     
        {/*
          <BiasSection/>
          <SectionBasics />
           <Gettingstarted/>
           <Idea/>
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />*/}
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
      {/*  <SectionExamples />
      <SectionDownload />*/}
      </div>
      <Footer />
    </div>
  );
}
