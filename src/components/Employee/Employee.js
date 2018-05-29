import React, {Component} from 'react';
import "./Employee.css";
import { Card, CardImage, CardText, CardBody, CardTitle, Container, Row, Col } from 'mdbreact';
import LazyLoad from 'react-lazyload';

export default class Employee extends Component{
    render(){
        const {id, first_name, last_name, email, avatar, company, adress, phone} = this.props.item;

        return(
            <Card id={`employee-${id}`}>
                <Container fluid>
                    <Row>
                        <Col sm="4" className="employee-col employee-col--img">
                            <LazyLoad height={150}>
                                <CardImage top src={avatar} alt={`${first_name} ${last_name}`} />
                            </LazyLoad>
                        </Col>
                        <Col sm="8" className="employee-col">
                            <CardBody>
                                <CardTitle>
                                    <span className="employee-id">{id}</span>
                                    {first_name} {last_name}
                                </CardTitle>
                                <CardText>
                                    {company}
                                </CardText>
                                <CardText>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </CardText>
                                <CardText>
                                    {adress}
                                </CardText>
                                <CardText>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}
