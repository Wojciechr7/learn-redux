import React, {Component} from 'react';
import {connect} from "react-redux";


class Child3 extends Component {


    render() {
        return(
            <section>
                {this.props.children && <h1>{this.props.children[2]}</h1>}
            </section>
        )
    }


}

const mapStateToProps = ({ children }) => ({
    children,
});

export default connect(mapStateToProps)(Child3);