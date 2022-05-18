import Header from '~/components/Layouts/components/Header';
import Footer from '~/components/Layouts/components/Footer';

function NoSidebar() {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <h2>Container</h2>
            </div>
            <Footer />
        </div>
    );
}

export default NoSidebar;
