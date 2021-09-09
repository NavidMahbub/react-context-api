import React, { useContext } from "react";
import { GolobalContext } from "../contexts/GolobalContext";
import "./user.css";

export default function AddUser() {
    const {
        stateUsers,
        setstateUsers,
        newUser,
        setNewUser
    } = useContext(GolobalContext);

    function addUser(e) {
        e.preventDefault();
        
        const add = {
            id : newUser.id === -1 ? stateUsers.length : newUser.id,
            email: newUser.email,
            name: newUser.name,
            password: newUser.password
        }
        const usr = [...stateUsers];

        usr.splice(add.id, 1, add);
        setstateUsers(usr);
        setNewUser({ id : -1,email:'', name: '', password: ''})
    }

    return (
        <div>
            <form className="inputs" onSubmit={(e) => addUser(e)} type="submit">
                <h2>User Informations</h2>
                <input
                    // type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    placeholder="Enter Email"
                    required
                />
                <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    placeholder="Enter Name"
                    required
                />
                <input
                    type="password"
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    value={newUser.password}
                    placeholder="Enter Password"
                    required
                />
                <input className="square_btn" type="submit" value="Save" />
            </form>
        </div>
    );
}
