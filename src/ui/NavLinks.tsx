import {
    HomeIcon,
    FireIcon,
    CalculatorIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';

import { NavLink } from 'react-router-dom';

interface Link {
    name: string;
    href: string;
    icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const links: Link[] = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    {
        name: 'Git Fetcher',
        href: '/gitfetcher',
        icon: FireIcon,
    },
    {
        name: 'Factorial',
        href: '/factorial',
        icon: CalculatorIcon,
    },
    {
        name: 'About app',
        href: '/about',
        icon: InformationCircleIcon,
    },
];

function NavLinks() {
    return (
        <div className='navlinks'>
            {links.map((link) => {
                const LinkIcon = link.icon;

                return (
                    <NavLink
                        key={link.name}
                        to={link.href}
                        className='navlinks__menu-item'
                    >
                        <LinkIcon className='navlinks__menu-item-icon' />
                        <p className='navlinks__menu-item-text'>{link.name}</p>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinks;
