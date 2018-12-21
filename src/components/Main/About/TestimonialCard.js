import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    textAlign: 'left',
    padding:  '0 10%',
    display: 'flex',
  },
  card: {
    flex:'1',
    margin: '5px',
  },
  avatarImageWrapper: {
    marginBottom: '1em',
  },
  avatarImage: {
    borderRadius: '50%',
    margin: '0 auto',
    background: '#DDD',
    height: '150px',
    width: '150px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  quote: {
    margin: '0 5% 1em 5%',
  },
  author: {
    textAlign: 'right',
    marginRight: '5em',
  },
})

class TestimonialCard extends React.Component{

  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.avatarImageWrapper}>
              <div className={classes.avatarImage} style={{backgroundImage: `url(${this.props.image})`}}></div>
            </div>
            <Typography className={classes.quote} variant="h5" component="h2">
              "{ this.props.quote }"
            </Typography>

            <Typography className={classes.author} color="textSecondary">
              - { this.props.author}
            </Typography>
            <Typography className={classes.author} color="textSecondary">
              { this.props.authorTitle }
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

TestimonialCard.propTypes = {
  author: PropTypes.string.isRequired,
  authorTitle: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string,
};

TestimonialCard.defaultProps = {
  image:'images/testimonials/cthulhu.png'
};


export default withStyles(styles)(TestimonialCard)
