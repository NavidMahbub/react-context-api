import React,{useContext} from 'react'
import './users.css'
import { UseContext } from '../contexts/UserContext'

export default function AddUser() {
    const {stateUsers,setstateUsers} = useContext(UseContext)
    const {stateId, setid,email, setemail, name, setname,password, setpassword } = useContext(UseContext)

    function addUser (e){
        e.preventDefault();
        const id = stateId === -1 ? stateUsers.length : stateId;
        const arg = {
            id,
            email,
            name,
            password,
        };

        const usr = [...stateUsers];
        usr.splice(id, 1, arg);
        setstateUsers(usr);
        setid(-1);
        setemail("");
        setname("");
        setpassword("");
    }

    return (
        <div>
            <form className="inputs" onSubmit= { e => addUser(e) } type='submit'>
                <h2>User Informations</h2>
                <input
                    type={"email"}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Enter Email"
                    required
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Enter Name"
                    required
                />
                <input
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                    required
                />
                <input
                    className="square_btn"
                    type="submit"  
                    value= 'Save'                 
                />
            </form>
        </div>
    )
}
