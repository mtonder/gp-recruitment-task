import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import Gitfetcher from './pages/Gitfetcher';
import About from './pages/About';
import Factorial from './pages/Factorial';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

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
                        element={<Dashboard />}
                    />
                    <Route
                        path='/gitfetcher'
                        element={<Gitfetcher />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/factorial'
                        element={<Factorial />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
