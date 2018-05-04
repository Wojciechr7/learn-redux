import React, {Component} from 'react';
import {connect} from "react-redux";


const Child2 = ({ children }) =>
            <section>
                {children[1] && <h1>{children[1]}</h1>}
            </section>;



const mapStateToProps = ({ children }) => ({
    children,
});

export default connect(mapStateToProps)(Child2);