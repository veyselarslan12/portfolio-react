import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className='mt-3'>
                <div className='container mx-auto flex justify-end'>
                <NavLink to='/' className='btn btn-primary text-lg mx-1'>About Me</NavLink>
                <NavLink to='/portfolio' className='btn btn-primary text-lg mx-1'>Portfolio</NavLink>
                <NavLink to='/contact' className='btn btn-primary text-lg mx-1'>Contact Me</NavLink>
                <NavLink to='/resume' className='btn btn-primary text-lg mx-1'>Resume</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav;