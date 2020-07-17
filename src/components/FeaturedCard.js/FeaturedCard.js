import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginTop:20
  },
  pos: {
    marginBottom: 0,
  },
});

export default function FeaturedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{textAlign:"center"}}>
      {/*<CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>*/}
      <CardContent>
      <Typography variant="h5" component="h2">
      <InfoIcon/>
      </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>Information Technology</b>
        </Typography>
       
       
        <Typography variant="body2" component="p">
        Fully customizable informational 
          <br />
          {'"bar for the top or bottom."'}
        </Typography>
      </CardContent>
     
    </Card>
  );
}