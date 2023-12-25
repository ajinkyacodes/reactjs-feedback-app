import propTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header className="container" style={headerStyles}>
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};

export default Header;
