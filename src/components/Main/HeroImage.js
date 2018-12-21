import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  },
  nextImageWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  nextImageRow: {
    width:'100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nextImage: {
    background: theme.palette.background.paper,
    height: '96px',
    width: '96px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.background.paper,
    },
  },
})

class HeroImage extends React.Component {
  state = {
    hero: 0,
    activeIconHover: false,
  }

  componentWillMount(){
    this.setState({
      interval: setInterval(this.changeHeroImage, 8000)
    })
  }

  componentWillUnmount(){
      clearInterval(this.state.interval)
  }

  stopInterval = () => {
    clearInterval(this.state.interval)
  }

  restartInterval = () => {
    this.setState({
      interval: setInterval(this.changeHeroImage, 8000)
    })
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
        position: 'left'
      },
      {
        url: 'images/hero/1.jpg',
        position: 'center'
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

    const nextImage = (
      <div className={classes.nextImageWrapper}>
        <div className={classes.nextImageRow}>
            <Button
              className={classes.nextImage}
              onClick={()=>{this.changeHeroImage()}}
              onMouseEnter={()=>{this.setState({activeIconHover:true})}}
              onMouseLeave={()=>{this.setState({activeIconHover:false})}}>
              <svg style={{margin: '0 auto'}} width="24px" height="24px" viewBox="0 0 16 16" version="1.1">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Navigation" transform="translate(-340.000000, -52.000000)">
                          <g id="ic_arrow_forward" transform="translate(336.000000, 48.000000)">
                              <g id="Icon-24px">
                                  <polygon fill="none" id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                  <polygon id="Shape" fill={ this.state.activeIconHover ? this.props.theme.palette.primary.main : this.props.theme.palette.text.primary} points="12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </Button>
        </div>
      </div>
    )

    return (
      <div className={classes.root}
        onMouseEnter={()=>{this.stopInterval()}}
        onMouseLeave={()=>{this.restartInterval()}}>
        {
          heroImages.map( (image, index, imageArray) => {
            if (imageArray[this.state.hero].url === image.url) {
              return (
                <div key={index} className={classes.image} style={{ backgroundPosition: `${image.position}`, backgroundImage: `url(${image.url})`, opacity: '1' }}>
                  { nextImage }
                </div>
              )
            } else return (
                <div key={index} className={classes.image} style={{ backgroundPosition: `${image.position}`, backgroundImage: `url(${image.url})`, opacity: '0', height: '0' }}>
                  { nextImage }
                </div>
            )
          })
        }
      </div>
    )
  }
}

export default withStyles(styles)(HeroImage)
