import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className='mt-2'>
                <NavLink to='/' className='btn btn-primary text-lg mx-1'>About Me</NavLink>
                <NavLink to='/' className='btn btn-primary text-lg mx-1'>Projects</NavLink>
                <NavLink to='/' className='btn btn-primary text-lg mx-1'>Contact Me</NavLink>
                <NavLink to='/' className='btn btn-primary text-lg mx-1'>Resume</NavLink>
            </nav>
        </>
    )
}

export default Nav;