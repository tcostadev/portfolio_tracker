import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import './Header.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/login')
    }

    return (
        <header>
            <section>
                <img className="img-logo" src={logo} alt="Money Savings Logo"/>
                <h1>My Portfolio Tracker</h1>
            </section>
            
            <ul>
            {user ? (
                <li>
                    <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                    </button>
                </li>
            ) : (
                <>
                    {/* <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li> */}
                </>
            )}
            </ul>
        </header>
    )
}

export default Header;
