import Logo from '../../../../assets/images/logo.png';

function ImageBanner() {
  return (
    <section>
      <img src={Logo} alt="NASA Logo" />
      <h2>By {'{Open APIs}'}</h2>
    </section>
  )
}
export default ImageBanner