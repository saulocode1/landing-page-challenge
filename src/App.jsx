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

function App() {
    return (
        <>
            <GlobalStyle />
            <Header>
                <Logo />
                <NavBar>
                    <NavLink>Funcionalidades</NavLink>
                    <NavLink>App</NavLink>
                    <NavLink>Planos</NavLink>
                    <NavLink>Contato</NavLink>
                </NavBar>
            </Header>

            <Home />
            <Work />
            <Download />
            <Plans />
            <Contact/>
        </>
    );
}

export default App;
