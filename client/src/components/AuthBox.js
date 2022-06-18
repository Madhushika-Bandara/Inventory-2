import React from "react";

const AuthBox = () => {

    const add = () => { 

    }
    return (
        <div className="auth">
            <div className="auth__box">
                <div className="auth__header">
                    <h1>Add Item</h1>
                </div>

                <form>
                <div className="auth__field">
                    <label>Name</label>
                    <input type="text"/>
                </div>

                <div className="auth__field">
                    <label>Quantity</label>
                    <input type="number"/>
                </div>

                <div className="auth__footer">
                    <p className="auth__error">Something went wrong.</p>
                    <button className="btn" onClick={add}>Add</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default AuthBox;