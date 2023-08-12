import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { IoOptionsOutline } from 'react-icons/io5'
// import {IoIosOptions} from "react-icons/io"
import { CiSearch } from 'react-icons/ci'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useData } from '../../DataContext';


const Navbar = () => {
    const { state, dispatch } = useData();
    
    const [active, setActive] = useState('/')
    // eslint-disable-next-line
    useEffect(() => {
        const pathname = window.location.pathname
        setActive(pathname)
    }, [])

    useEffect(() => {
    }, [])
    

    const handleSearch = (e) => {
        let regex = new RegExp(e.target.value, 'i')
        // console.log( e.target.value )
        const searchedResult = state.allProducts.filter( p => {
            return regex.test( p.title ) || regex.test( p.description )
        })

        dispatch({type:'set_products', payload: searchedResult})


    }

    return (
        <>
            <div className="Navbar d-flex justify-content-between align-items-center px-3 mb-3">
                <div>
                    <Link to='/' className='link-style'>
                    <img className='bewakoofLogo' src={'https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'} alt=''></img>
                    </Link>
                    {/* <p className='logo-text d-inline mx-1'>WASSERSTOFF</p> */}
                </div>

                <div className="nav-items d-flex ">
                    {/* eslint-disable-next-line */}
                    <Link to={`/category/men's%20clothing`} onClick={() => { setActive("/category/men's%20clothing") }} className={`mx-3 ${active == "/category/men's%20clothing" ? 'active' : 'text-muted'}`} >Men</Link>
                    {/* eslint-disable-next-line */}
                    <Link to="/category/women's%20clothing" onClick={() => { setActive("/category/women's%20clothing") }} className={`mx-3 ${active == "/category/women's%20clothing" ? 'active' : 'text-muted'}`} >Women</Link>
                    {/* eslint-disable-next-line */}
                    <Link to='/category/jewelery' onClick={() => { setActive('/category/jewelery') }} className={`mx-3 ${active == '/category/jewelery' ? 'active' : 'text-muted'}`} >Jewelery</Link>
                    {/* eslint-disable-next-line */}
                    <Link to='/category/electronics' onClick={() => { setActive('/category/electronics') }} className={`mx-3 ${active == '/category/electronics' ? 'active' : 'text-muted'}`} >Electronics</Link>
                </div>

                <div className='search d-flex align-items-baseline'>
                    <input type="text" className="search-box" onChange={handleSearch}/>
                    <CiSearch className="mx-2" size={15} />
                </div>

                <div className="profile-nav-items">
                    <span className='mx-3'><IoOptionsOutline size={22} /></span>
                    <span className='mx-3'><FiUser size={22} /></span>
                </div>
            </div>
        </>
    )
}

export default Navbar