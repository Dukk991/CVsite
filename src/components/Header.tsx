import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">MySite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/contacts">Contacts</Nav.Link>
                            <Nav.Link as={NavLink} to="/links">Links</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
