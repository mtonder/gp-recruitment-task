import PageHeader from '../ui/Header';
import vite from '/vite.svg';
import react from '/react.svg';
import redux from '/redux.svg';

function AboutPage() {
    return (
        <div className='about-page'>
            <PageHeader
                title='About app'
                subtitle='Lista wymagań dla zadania rekrutacyjnego.'
            />
            <section>
                <p>
                    Napisz aplikację korzystając z najnowszego api react.js (hooki, Context, itd.)
                    spełniającą poniższe założenia. Aplikacja ma się składać z minimum 3 ekranów:
                </p>
                <ol>
                    <li>Wyszukiwarka projektów githubowych</li>
                    <li>Założenia całej aplikacji</li>
                    <li>Wyliczanie silni</li>
                </ol>
            </section>

            <section>
                <h2>Ad 1:</h2>
                <ul>
                    <li>Wykorzystane jest publiczne API Githuba;</li>
                    <li>
                        Czeka na podanie loginu użytkownika:
                        <ul>
                            <li>waliduje poprawność;</li>
                            <li>obsługuje nieistniejące loginy;</li>
                        </ul>
                    </li>
                    <li>
                        Wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:
                        <ul>
                            <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Ad 2:</h2>
                <ul>
                    <li>
                        Wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem
                        i układem;
                    </li>
                    <li>Proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
                </ul>
            </section>
            <section>
                <h2>Ad 3:</h2>
                <ul>
                    <li>
                        Input do podania liczby dla której będzie wyliczona{' '}
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://pl.wikipedia.org/wiki/Silnia'
                        >
                            silnia
                        </a>
                        ;
                    </li>
                    <li>Historia poprzednich wyliczeń.</li>
                </ul>
            </section>
            <section>
                <h2>Ogólne</h2>

                <ul>
                    <li>TypeScript</li>
                    <li>
                        Zorganizowany system pobierania i trzymania danych (redux, middleware,
                        thunk, toolkit, query - dowolność);
                    </li>
                    <li>
                        Wykorzystanie mechanizmów optymalizacyjnych reactowych i około reduxowych;
                    </li>
                    <li>
                        Korzysta z <span className='bold'>LESS / SASS</span>. Spełnia wymogi{' '}
                        <span className='bold'>BEM</span>;
                    </li>
                    <li>
                        Aplikacja jest też <span className='bold'>estetyczna</span>;
                    </li>
                    <li>
                        Wyświetla <span className='bold'>co drugi</span> element każdej listy
                        wyróżnionym kolorem;
                    </li>
                    <li>
                        Jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny{' '}
                        <span className='bold'>publicznie</span>;
                    </li>
                </ul>
            </section>
            <section className='about-page__footer'>
                <div className='about-page__author'>
                    Autor:{' '}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://marektonder.pl'
                    >
                        Marek Tonder
                    </a>
                </div>
                <div>
                    <img
                        src='https://therealsujitk-vercel-badge.vercel.app/?app=gp-recruitment-task'
                        alt='Vercel Deploy'
                    />
                </div>
                <div className='about-page__poweredby'>
                    <img
                        src={vite}
                        alt='Powered by Vite'
                    />
                    <img
                        src={react}
                        alt='Powered by React'
                    />
                    <img
                        src={redux}
                        alt='Powered by Redux'
                    />
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
