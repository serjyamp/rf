import React, {Component} from 'react';
import Employee from "../Employee/Employee";
import "./EmployeeList.css";
import { Row, Col, Button, Container } from 'mdbreact';
import { connect } from "react-redux";
import { loadEmployees } from "../../actions";

class EmployeeList extends Component{
    state = {
        ascending: true
    }

    componentDidMount() {
        this.props.loadEmployees('http://localhost:3004/employees');
    }

    render(){
        if (this.props.isLoading){
            return (
                <Container>
                    <p>Loading...</p>
                </Container>
            )
        }

        const employees = this.props.employees.sort(this.sortBy);
        let employeeList = employees.map(item => {
            return(
                <Col key={item.id} md="6">
                    <Employee item={item} />
                </Col>
            )
        });

        return(
            <Container>
                <div className="employees-top">
                    <Button onClick={this.changeOrder}>Sort by ID</Button>
                </div>
                <Row className="employees-row">
                    {employeeList}
                </Row>
            </Container>
        );
    }

    changeOrder = () => {
        this.setState({
            ascending: !this.state.ascending
        })
    }

    sortBy = (a,b) => {
        if (this.state.ascending){
            return a.id - b.id;
        } else{
            return -(a.id - b.id);
        }
    }
}

const mapStateToProps = state =>{
    return {
        employees: state.employees.data,
        isLoading: state.employees.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadEmployees: url => dispatch(loadEmployees(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);