import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layouts';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/products">testttt</Link>
                <Link to="/sale">Sale test</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
