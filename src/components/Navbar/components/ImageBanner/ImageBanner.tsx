import Logo from '../../../../assets/images/logo.png';

function ImageBanner() {
  return (
    <section>
      <img src={Logo} alt="NASA Logo" />
      <h2><a href='https://api.nasa.gov/' target="_blank" >By {'{Open APIs}'}</a></h2>
    </section>
  )
}
export default ImageBanner