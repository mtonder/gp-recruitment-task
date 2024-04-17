import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';

const iconMap = {
    code: BanknotesIcon,
    files: UserGroupIcon,
    popular: ClockIcon,
    commits: InboxIcon,
};

interface CardProps {
    title: string;
    value: number | string;
    type: 'code' | 'files' | 'popular' | 'commits';
}

function Card({ title, value, type }: CardProps) {
    const Icon = iconMap[type];

    return (
        <div className='card'>
            <div className='card__header'>
                {Icon ? <Icon className='card__icon' /> : null}
                <h3 className='card_title'>{title}</h3>
            </div>
            <p className='card__value'>{value}</p>
        </div>
    );
}

export default Card;
