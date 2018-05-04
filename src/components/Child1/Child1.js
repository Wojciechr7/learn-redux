import React, {Component} from 'react';
import { connect } from "react-redux";
import {changeChildren} from "../../actions";



const Child1 = ({ children, setCharacter }) =>
            <section>
                {children[0] && <h1>{children[0]}</h1>}
                <button onClick={() => setCharacter(children)}>change button</button>
            </section>;





const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => ({
    setCharacter(children) {
        //children.changeNames();
        console.log('dispatching');
        dispatch(changeChildren(['child1 changed', 'child2 changed', 'child3 changed']));
    },
});



export default connect(mapStateToProps, mapDispatchToProps)(Child1);