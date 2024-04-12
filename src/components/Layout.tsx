import { Outlet } from 'react-router-dom';
import Sidenav from './Sidenav';
import BottomMenu from './BottomMenu';

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__sidenav'>
                <Sidenav />
            </div>
            <div className='layout__content'>
                <Outlet />
            </div>
            <div className='layout__bottom-menu'>
                <BottomMenu />
            </div>
        </div>
    );
}

export default Layout;
