import { NavLink } from 'react-router-dom'

function Nav() {

    const getActiveClass = ({ isActive }) => isActive ? 'btn-primary' : 'btn-error'

    return (
        <>
            <nav className='mt-3'>
                <div className='container mx-auto flex justify-end'>
                <NavLink to='/' className={({ isActive }) => `btn text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl ${getActiveClass({ isActive })}`}>About Me</NavLink>
                <NavLink to='/portfolio' className={({ isActive }) => `btn text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl ${getActiveClass({ isActive })}`}>Portfolio</NavLink>
                <NavLink to='/contact' className={({ isActive }) => `btn text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl ${getActiveClass({ isActive })}`}>Contact Me</NavLink>
                <NavLink to='/resume' className={({ isActive }) => `btn text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl ${getActiveClass({ isActive })}`}>Resume</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav;