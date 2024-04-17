interface PageHeader {
    title: string;
    subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeader) {
    return (
        <div className='header'>
            <h1 className='header__title'>{title}</h1>
            {subtitle && <p className='header__subtitle'>{subtitle}</p>}
        </div>
    );
}

export default PageHeader;
