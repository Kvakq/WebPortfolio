const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="navigation">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#contacts">Contacts</a>

          <a
            className="cv-button"
            href="/public/CV (Software developer Ruslan Ragimov).pdf"
            download
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;