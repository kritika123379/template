import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Parallax from 'components/Parallax/Parallax';
import Card from "../Card/Card"
import SectionBiased from 'components/SectionBiased/SectionBiased';
export default function BiasSection() {
  return (
  
    <Card>
      <Grid container spacing={60}> 
        <Grid item xs={6} className="">  
        <img src="assets/img/bg-b.png" alt=""/>
         <Parallax image={require("assets/img/bg-b.png")}>
       </Parallax>
        </Grid>
        <Grid item xs={6} spacing={12}>  
       <SectionBiased/>
        </Grid>      
      </Grid>
      </Card>
   
  );
}