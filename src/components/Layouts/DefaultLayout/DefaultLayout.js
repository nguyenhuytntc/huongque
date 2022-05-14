import Header from '~/components/Layouts/components/Header';
import Sidebar from '~/components/Layouts/DefaultLayout/Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    console.log(styles);
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
