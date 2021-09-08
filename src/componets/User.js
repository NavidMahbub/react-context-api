import React, { useContext } from "react";
import "./users.css";
import { UseContext } from "../contexts/UserContext";

export default function User() {
    const { stateUsers, setstateUsers } = useContext(UseContext);
    const { setid, setemail, setname, setpassword } = useContext(UseContext)

    function handleDeleteUser(id){
        const  filterd = stateUsers.filter(e => e.id !== id)
        setstateUsers(filterd);
        setid(-1);
        setemail("");
        setname("");
        setpassword("");
    }

    function handleEditUser(e,id){
        e.preventDefault();
        setid(id)
        setemail(stateUsers[id].email)
        setname(stateUsers[id].name)
        setpassword(stateUsers[id].password)
    }

    return (
        <div className = 'all-users'>
            {stateUsers.map((user) => (
                <div className="user">
                    <h4> Email: {user.email}</h4>
                    <p>Name: {user.name}</p>
                    <p>Pass: {user.password}</p>

                    <div className="btn">
                        <button
                            className="square_btn"
                            onClick={(e) =>
                                handleEditUser(e, user.id )
                            }
                        >
                            Edit
                        </button>
                        <button
                            className="square_btn"
                            onClick={() =>
                                handleDeleteUser(user.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
