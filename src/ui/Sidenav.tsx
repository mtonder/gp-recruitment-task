import NavLinks from './NavLinks';
import erecruiter from '/erecruiter.svg';

function Sidenav() {
    return (
        <div className='sidenav'>
            <img
                src={erecruiter}
                className='sidenav__logo'
                alt='Vite logo'
            />
            <div className='sidenav__navlinks'>
                <NavLinks />
            </div>
        </div>
    );
}

export default Sidenav;
