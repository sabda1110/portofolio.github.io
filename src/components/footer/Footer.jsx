import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Whatsab</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portofolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Whatsab. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
