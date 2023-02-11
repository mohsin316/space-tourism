import './Navbar.css'

import { Link } from 'react-router-dom'

import Logo from '../assets/shared/logo.svg'
import { useRef } from 'react'

const tabs = [
    {
        id: 'home',
        number: '00',
        location: 'Home',
        url: '/'
    },
    {
        id: 'destinations',
        number: '01',
        location: 'Destination',
        url: '/destination'

    },
    {
        id: 'crew',
        number: '03',
        location: 'Crew',
        url: '/crew'

    },
    {
        id: 'technology',
        number: '04',
        location: 'Technology',
        url: '/technology'
    },

]


export default function Navbar({ currentTab ,changeTab}) {
    const navRef = useRef()
    const buttonRef = useRef()

    const handleClick = () => {
        const visibility = navRef.current.getAttribute('data-visible')
        if(visibility === 'false'){
            navRef.current.setAttribute('data-visible', true)
            buttonRef.current.setAttribute('aria-expanded', true)
        }else{
            navRef.current.setAttribute('data-visible', false)
            buttonRef.current.setAttribute('aria-expanded', false)
        }

    }

    const handleTab = (tab) => {
        changeTab(tab)
    }

  return (
    <header className='primary-header flex'>
        <div>
            <img src={Logo} alt="space tourism logo" className='logo' />
        </div>
        <button ref={buttonRef} onClick={handleClick} className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded="false"><span className='sr-only'>Menu</span></button>
        <nav>
            <ul ref={navRef} id='primary-navigation' data-visible='false' className="primary-navigation underline-indicators flex">
                {tabs.map(tab => (
                    <li key={tab.id} className={currentTab === tab.id ? 'active' : ''}>
                        <Link onClick={() => handleTab(tab.id)} to={tab.url} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden='true'>{tab.number}</span>{tab.location}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
