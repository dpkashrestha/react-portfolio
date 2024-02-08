// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import Navigation from "./Navigation";

const styles = {
  //   headerStyle: {
  //     background: "light blue",
  //   },
  //   headingStyle: {
  //     fontSize: "50px",
  //   },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Dipika Shrestha</h1>
      <Navigation />
    </header>
  );
}

export default Header;
