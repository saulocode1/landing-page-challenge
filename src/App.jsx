import GlobalStyle from "./theme/globalStyle";
import Header from "./Components/Header";
import Logo from "./Components/Logo";
import NavLink from "./Components/NavLink";
import NavBar from "./Components/NavBar";
import Home from "./Sections/Home/Home";
import Work from "./Sections/Work/Work";
import Download from "./Sections/Download/Download";
import Plans from "./Sections/Plans/Plans";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";

import { Link } from "react-scroll";

function App() {
    return (
        <>
            <GlobalStyle />
            <Header>
                <Logo />
                <NavBar>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <NavLink>Início</NavLink>
                    </Link>
                    <Link
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <NavLink>Funcionalidades</NavLink>
                    </Link>
                    <Link
                        to="download"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <NavLink>App</NavLink>
                    </Link>
                    <Link
                        to="plans"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <NavLink>Planos</NavLink>
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <NavLink>Contato</NavLink>
                    </Link>
                </NavBar>
            </Header>

            <Home />
            <Work />
            <Download />
            <Plans />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
