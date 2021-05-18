import './Header.css'
import logo from '../../img/logo.svg';

const Header = () => {
    return (
        <header>
            <img className="img-logo" src={logo} alt="Money Savings Logo"/>
            <h1>My Portfolio Tracker</h1>
        </header>
    )
}

export default Header;
