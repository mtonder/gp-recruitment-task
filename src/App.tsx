import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Gitfetcher from './pages/GitfetcherPage';
import AboutPage from './pages/AboutPage';
import FactorialPage from './pages/FactorialPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './Layout';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<DashboardPage />}
                    />
                    <Route
                        path='/gitfetcher'
                        element={<Gitfetcher />}
                    />
                    <Route
                        path='/about'
                        element={<AboutPage />}
                    />
                    <Route
                        path='/factorial'
                        element={<FactorialPage />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
