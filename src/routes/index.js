import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Navbar, NavbarNav, NavItem, NavLink } from 'mdbreact';
import EmployeeList from "../components/EmployeeList/EmployeeList";
import About from "../components/About/About";

export default () => (
    <BrowserRouter>
        <div>
            <Navbar color="indigo" dark expand="md" scrolling>
                <Container className="container-nav">
                    <NavbarNav left>
                        <NavItem>
                            <NavLink to="/">Employees</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Container>
            </Navbar>

            <Route path="/" exact component={EmployeeList} />
            <Route path="/about" exact component={About} />
        </div>
    </BrowserRouter>
)