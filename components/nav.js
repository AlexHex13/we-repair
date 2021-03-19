import React, {useEffect, useState} from "react";
import {Col, Form, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import LevelOne from "./header-components/level.one";
import LevelTwo from "./header-components/level-two";


function Header() {

    const [city, setCity] = useState([])


    useEffect(async () => {
        const response = await fetch('http://127.0.0.1:8000/api/city/')
        const data = await response.json()
        setCity(data)
    }, [])
    console.log(city)


    return (
        <>
            <div id="header">
                <Navbar expand="lg">
                    <Nav>Ваш город: </Nav>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control id='form-state' size="sm" as="select">
                            {city.map(c => {
                                return (
                                    <option>{c.name}</option>
                                )
                            })}
                        </Form.Control>

                    </Form.Group>
                    <Nav>
                        <div id='location'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            &nbsp;
                            Мучной переулок, 32134 Садовая улица название
                        </div>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" id='menu'>
                            <Nav.Link> <Link href="/">Главная</Link> </Nav.Link>
                            <Nav.Link> <Link href="/sales">Акции</Link></Nav.Link>
                            <Nav.Link> <Link href="/">Прайс-лист</Link></Nav.Link>
                            <Nav.Link> <Link href="/conditions">Условия работы</Link></Nav.Link>
                            <Nav.Link> <Link href="/guarantee">Гарантии</Link></Nav.Link>
                            <Nav.Link> <Link href="/contacts">Контакты</Link></Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <LevelOne/>
            <LevelTwo/>
        </>
    )
}

export default Header;