import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const Sidebar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      fixed="left"
      className="flex-md-column flex-row align-items-start py-2"
      id="sidebar"
    >
      <Container
        fluid
        className="flex-md-column flex-row align-items-start px-3"
      >
        <Navbar.Brand href="#void" className="mb-0 h1">
          <img
            src='https://img.icons8.com/?size=100&id=crn2ezJSzZcz&format=png&color=000000'
            alt="Logo"
          />
         <span className="fs-3">&nbsp;Spotify</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column w-100">
            <Nav.Link href="#void" exact className="px-0 text-nowrap">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#void" className="px-0 text-nowrap">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="d-flex w-100 mt-3 px-0">
              <FormControl type="text" placeholder="Search" className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="w-100 align-items-start px-3 mt-2">
        <Button variant="outline-primary" className="w-100 mb-2">
          Sign Up
        </Button>
        <Button variant="outline-secondary" className="w-100 mb-2">
          Login
        </Button>
        <a href="#void" className="text-decoration-none text-light">Cookie Policy</a> | <a href="#void"className="text-decoration-none text-light">Privacy</a>
      </div>
    </Navbar>
  );
};

export default Sidebar;
