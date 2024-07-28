import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className='mt-3'>
                <div className='container mx-auto flex justify-end'>
                <NavLink to='/' className='btn btn-primary text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl'>About Me</NavLink>
                <NavLink to='/portfolio' className='btn btn-primary text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl'>Portfolio</NavLink>
                <NavLink to='/contact' className='btn btn-primary text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl'>Contact Me</NavLink>
                <NavLink to='/resume' className='btn btn-primary text-lg mx-1 transition-transform transform hover:scale-105 hover:shadow-2xl'>Resume</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav;