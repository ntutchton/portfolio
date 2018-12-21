import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForwardIos'
import ArrowBack from '@material-ui/icons/ArrowBackIos'

const styles = theme => ({
  root: {
    textAlign: 'left',
    padding:  '0 10%',
    display: 'flex',
  },
  navigation: {
    display: 'flex'
  },
  navButton: {
    height: '100%',
    width: '100%',
    borderRadius: '0',
  },
  card: {
    flex:'1',
  },
})

class TestimonialCard extends React.Component{

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.navigation}>
          <Button className={classes.navButton}><ArrowBack /></Button>
        </div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be
              *
              nev
              * o *
              lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <div className={classes.navigation}>
          <Button className={classes.navButton}><ArrowForward/></Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TestimonialCard)
