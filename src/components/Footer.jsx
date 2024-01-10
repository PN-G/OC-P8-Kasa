import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
