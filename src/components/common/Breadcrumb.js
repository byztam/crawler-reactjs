import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/Breadcrumb.css';

const Breadcrumbs = (props) => {
    console.log(props.value);
    const elements = props.value.map((item, index) => {
        return (
            <BreadcrumbItem key={index}>
                <Link to={item.path} >{item.name}</Link>
            </BreadcrumbItem>
        );
    });
    return (
        <div>
            <Breadcrumb tag="nav" listTag="div" className="breadcrumb-custom">
                {elements}
            </Breadcrumb>
        </div>
    );
};

export default Breadcrumbs;