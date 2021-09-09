import React, { useContext } from "react";
import "./user.css";
import { GolobalContext } from "../contexts/GolobalContext";

export default function User() {
    const {
        stateUsers,
        setstateUsers,
        setNewUser
    } = useContext(GolobalContext);

    function handleDeleteUser(id) {
        const filterd = stateUsers.filter((e) => e.id !== id);
        setstateUsers(filterd);
        setNewUser({ id : -1,email:'', name: '', password: ''})
    }

    function handleEditUser(e, id) {
        e.preventDefault();
        setNewUser({ id ,
            email:stateUsers[id].email, 
            name: stateUsers[id].name, 
            password:stateUsers[id].password
        })
    }

    return (
        <div className="all-users">
            {stateUsers.map(({ id, email, name, password }) => (
                <div className="user">
                    <h4> Email: {email}</h4>
                    <p>Name: {name}</p>
                    <p>Pass: {password}</p>

                    <div className="btn">
                        <button
                            className="square_btn"
                            onClick={(e) => handleEditUser(e, id)}
                        >
                            Edit
                        </button>
                        <button
                            className="square_btn"
                            onClick={() => handleDeleteUser(id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
