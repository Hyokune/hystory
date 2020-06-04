import cx from 'classnames'

interface IProps {
  description: string,
  image: {
    src: string,
    alt: string,
  },
  reverse?: boolean,
  title: string
}

export default ({ description, image, reverse, title }: IProps) => (
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
  </div>
)
