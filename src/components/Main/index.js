import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flex: '1'
  },
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  heroImage: {
    height:'50px', //TEMP
    gridColumnStart: '5',
    gridColumnEnd: '12',
    backgroundColor: 'grey',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      gridColumnStart: '2',
    },
  },
  heroText: {
    gridColumnStart: '2',
    gridColumnEnd: '5',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10em',
    zIndex: '2',
    [theme.breakpoints.down('sm')]: {
      gridColumnEnd: '12',
    },
  },
  heroName: {
    marginBottom: '1.3em',
    fontWeight: '700',
    width:'150%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroContactButton: {
    width: '15em',
    height: '4em',
    marginBottom: '15em',
  }
})

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>

        <div className={classes.section}>
          <div className={classes.heroText}>
            <Typography variant="h6" color="textSecondary" style={{width: '150%', marginBottom: '2em'}}>
              Hello, my name is
            </Typography>
            <Typography variant="h3" className={classes.heroName}>
              Nathan Tutchton
            </Typography>
            <Typography variant="h6" color="textSecondary">
              I design and develop
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{marginBottom: '4em'}}>
              beautiful full-stack applications.
            </Typography>
            <Button variant="contained" color="primary" className={classes.heroContactButton}>
              Contact Me
            </Button>
          </div>
          <div className={classes.heroImage}>

          </div>
        </div>

        <div id="work" className={classes.section}>
          <Typography variant="h2">
            work
          </Typography>
        </div>

        <div id="skills" className={classes.section}>
          <Typography variant="h2">
            skills
          </Typography>
        </div>

        <div className={classes.blurb}>
          <Typography variant="h2">
            blurb
          </Typography>
        </div>

        <div id="projects" className={classes.section}>
          <Typography variant="h2">
            projects
          </Typography>
        </div>

      </div>

    </div>
  );
}

export default withStyles(styles)(Main);
