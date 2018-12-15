import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'all .8s cubic-bezier(.29,0,.15,.9)',
  }
})

class HeroImage extends React.Component {
  state = {
    hero: 0,
  }

  componentWillMount(){
    this.setState({
      interval: setInterval(this.changeHeroImage, 8000)
    })
  }

  componentWillUnmount(){
      clearInterval(this.state.interval)
  }

//counts up to 6 and then resets
  changeHeroImage = () => {
    if (this.state.hero === 6){
      this.setState({
        hero: 0
      })
    }
    else {
      this.setState({
        hero: this.state.hero + 1
      })
    }
  }

  render() {

    const { classes } = this.props

    const heroImages = [
      {
        url: 'images/hero/0.jpg',
        position: 'right'
      },
      {
        url: 'images/hero/1.jpg',
        position: 'left'
      },
      {
        url: 'images/hero/2.jpg',
        position: 'center'
      },
      {
        url: 'images/hero/3.jpg',
        position: 'center'
      },
      {
        url: 'images/hero/4.jpg',
        position: 'right'
      },
      {
        url: 'images/hero/5.jpg',
        position: 'center'
      },
      {
        url: 'images/hero/6.jpg',
        position: 'right'
      },
    ]

    return (
      <div className={classes.root}>
        {
          heroImages.map( (image, index, imageArray) => {
            if (imageArray[this.state.hero].url === image.url) {
              return (
                <div key={index} className={classes.image} style={{ backgroundPosition: `${image.position}`, backgroundImage: `url(${image.url})`, opacity: '1' }}></div>
              )
            } else return (
                <div key={index} className={classes.image} style={{ backgroundPosition: `${image.position}`, backgroundImage: `url(${image.url})`, opacity: '0', height: '0' }}></div>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(styles)(HeroImage)
