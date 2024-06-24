import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footnotes">
        <h3>Christian Alexander &copy; 2024</h3>
      </div>
      <div className="links">
        <h3>Let's get in touch:</h3>
        <div className="link-img">
          <a href="https://github.com/Adrick1210">
            <img
              src="https://files.softicons.com/download/social-media-icons/sociocons-icons-by-rohit-tripathi/png/256x256/github-sociocon.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/christianalexander23/">
            <img
              src="https://i0.wp.com/gmlconsult.com/wp-content/uploads/2021/10/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png?ssl=1"
              alt="linkedin"
            />
          </a>
          <a href="mailto:christian.alexanderato@gmail.com">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/153/613/original/email-and-mail-icon-sign-symbol-design-free-png.png"
              alt="email"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
