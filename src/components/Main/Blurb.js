import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '4em',
    margin: '0 15% 5em 15%',
    padding: '3em 0',
    [theme.breakpoints.down('lg')]: {
      margin: '0 5% 5em 5%',
    },
    [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridRowGap: '2em',
    },
  },
  blurbWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  blurbTitle: {
    fontWeight:'600',
    marginBottom: '.8em',
  },
  blurbText: {
    margin: '1em 0',
  },
})

const Blurb = props => {
  const { classes } = props
  return (
      <div className={classes.root}>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Passion
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            I enjoy solving complex problems and building mission-critical software that delivers reliable, maintainable, and effective results under real-world constraints.          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            Software development requires creative and collaborative practice. Whether building new applications or modernizing legacy systems, I translate stakeholder ideas into clear technical plans and maintainable full-stack implementations.
            {/* I approach software development as both a creative and collaborative discipline. Building new applications or restructuring legacy systems provides the opportunity to balance thoughtful design with practical engineering. I enjoy shaping ideas with stakeholders, translating requirements into technical plans, and expressing those decisions through well-structured, maintainable code across the full stack. */}
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Vision
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            Great products come from alignment between users and engineers. I focus on modernizing systems through clear workflows, resilient architectures, and flexible design and backend foundations that support long-term growth and reliability.
            {/* I believe strong user experience emerges from close alignment between users, designers, and engineers. I focus on modernizing systems not only through contemporary frameworks, but through clearer workflows, resilient architectures, and repeatable development standards. Whether refining an existing product or starting from a blank slate, I aim to establish flexible design systems and backend foundations that support long-term evolution and operational reliability.           */}
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            With new ideas, I try to build a foundation of intelligent design standards and a flexible code base that will guide future development.
          </Typography>
        </div>

        <div className={classes.blurbWrapper}>
          <Typography className={classes.blurbTitle} variant="h5">
            My Impact
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            I design and build from scratch when no design team exists, or help translate architectural and UX decisions into working code.
          </Typography>
          <Typography className={classes.blurbText} variant="body1">
            {/* I enjoy taking on multiple roles, acting as a liaison between designers and engineers, as well as between clients and products. I have designed and implemented interfaces end-to-end in environments without dedicated design teams, and have worked closely with customers, product owners, and engineers to translate UX decisions into production systems. By combining UX sensibility with backend, containerization, and deployment experience, I help teams deliver systems that are both intuitive to use and dependable to run. */}
            I take on multiple roles, bridging designers, engineers, and customers to move products forward. I design and implement interfaces end-to-end and translate UX decisions into production systems, combining UX sensibility with backend and deployment experience to deliver reliable, intuitive software.
          </Typography>
        </div>

      </div>
  )
}

export default withStyles(styles)(Blurb)
