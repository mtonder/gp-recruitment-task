import Card from './Card';

function CardWrapper() {
    const code: number = 1547;
    const files: number = 43;
    const popular: string = 'tsx';
    const commits: number = 12;

    return (
        <div className='card-wrapper'>
            <>
                <Card
                    title='Linie kodu'
                    value={code}
                    type='code'
                />
                <Card
                    title='Pliki projektu'
                    value={files}
                    type='files'
                />
                <Card
                    title='Popularny typ'
                    value={popular}
                    type='popular'
                />
                <Card
                    title='Commity'
                    value={commits}
                    type='commits'
                />
            </>
        </div>
    );
}

export default CardWrapper;
