// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navigation from './Navigation';


const styles = {
  headerStyle: {
    background: 'blue',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Dipika Shrestha</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
