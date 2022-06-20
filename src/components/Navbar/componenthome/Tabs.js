import React from 'react';
import { Tab, Row, Nav } from 'react-bootstrap';
import NavBar from '../NavBar';
import {Hero } from '../../Hero/Hero';
import Logo from '../Logo';
import '../Search/Search.css';
import { HomeImg } from '../../Home/HomeImg';

export const Tabs = () => {
  return (
    <div className='tab-container'>
           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Nav variant="tabs" className="flex-row">
                        <Nav.Item>
                            <Nav.Link eventKey="first">AMERICAN EAGLE</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">AERIE</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Logo/>
                            <NavBar />
                            <HomeImg/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Logo/>
                            <NavBar/>
                            <Hero/>
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container >
    </div>
  )
}
