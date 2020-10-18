import cx from 'classnames'
import { Component } from 'react'
import { Breakpoints } from '../../lib/enums/breakpoints'
import GlowingSpinner from '../GlowingSpinner'

interface Props {
  description: string,
  image: {
    src: string,
    alt: string,
  },
  reverse?: boolean,
  title: string
}

interface State {
  width: number
}

class Banner extends Component<Props, State> {
  state = {
    width: 1000
  }

  componentDidMount() {
    this.calculateSpinnerSize()
    window.addEventListener('resize', this.calculateSpinnerSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateSpinnerSize)
  }

  calculateSpinnerSize = () => {
    const { width } = this.state

    if (window.innerWidth > width && width < 1000) {
      this.setState({ width: window.innerWidth })
    } else if (window.innerWidth < width && window.innerWidth < Breakpoints.TabletLarge) {
      this.setState({ width: window.innerWidth + 200 })
    }
  }

  render() {
    const { description, image, reverse, title } = this.props
    const { width } = this.state

    return (
      <div className={cx({
        banner: true,
        reverse: reverse
      })}>
        <div className={cx({
          'banner-image': true,
          'fade-in-left': !reverse,
          'fade-in-right': reverse
        })}>
          <img src={image.src} alt={image.alt} />
        </div>
        <div className={cx({
          'banner-description': true,
          'fade-in-left': reverse,
          'fade-in-right': !reverse
        })}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <GlowingSpinner width={width} height={1000} />
      </div>
    )
  }
}

export default Banner
