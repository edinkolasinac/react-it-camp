import Nav from "../Nav";
import Footer from "../Footer";
import Hero from "../Hero";
const Layout = (props) => {
    return (
        <div>
            <Hero />
            {props.children}
            <Nav />
            <Content />
            <Footer />
        </div>
        //ubacivanje komponenti u layout //
    );
};
export default Layout;