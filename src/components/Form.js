import React from "react";

const Form = props => {
    return (    
        <div className="form">
            <input type="text" className="form__input" placeholder="Type place you need" />
            <button className="form__button" onClick={props.clickMethod}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
}

export default Form;