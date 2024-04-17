import {
    CodeBracketIcon,
    ArrowTrendingUpIcon,
    ClipboardDocumentCheckIcon,
    CommandLineIcon,
    ChartPieIcon,
} from '@heroicons/react/24/outline';
import CodeChart from './CodeChart';

const iconMap = {
    code: CodeBracketIcon,
    files: ClipboardDocumentCheckIcon,
    popular: ArrowTrendingUpIcon,
    commits: CommandLineIcon,
    chart: ChartPieIcon,
};

interface CardProps {
    title: string;
    value?: number | string;
    type: 'code' | 'files' | 'popular' | 'commits' | 'chart';
}

function Card({ title, value, type }: CardProps) {
    const Icon = iconMap[type];

    return (
        <div className='card'>
            <div className='card__header'>
                {Icon ? <Icon className='card__icon' /> : null}
                <h3 className='card__title'>{title}</h3>
            </div>
            {type === 'chart' ? (
                <div className='card__chart'>
                    <CodeChart />
                </div>
            ) : (
                <p className='card__value'>{value}</p>
            )}
        </div>
    );
}

export default Card;
