import "./App.css";
import { UseContext } from "./contexts/UserContext";
import { useState } from "react";
import AddUser from "./componets/AddUser";
// import UserList from "./componets/UserList";
import User from "./componets/User";
import "./componets/users.css";
const users = [
    {
        id: 0,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "0000",
    },
    {
        id: 1,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "1111",
    },
    {
        id: 2,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "2222",
    },
    {
        id: 3,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "3333",
    },
    {
        id: 4,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "4444",
    },
    {
        id: 5,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "5555",
    },
    {
        id: 6,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "6666",
    },
    {
        id: 7,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "7777",
    },
    {
        id: 8,
        email: "abcd@gmail.com",
        name: "Navid",
        password: "8888",
    },
];

function App() {
    const [stateUsers, setstateUsers] = useState(users);
    const [stateId, setid] = useState(-1)
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('') 
    return (
        <div className="container">
            <UseContext.Provider value={{ stateUsers, setstateUsers, stateId, setid,email, setemail, name, setname,password, setpassword  }}>
              <AddUser />

              <div className="all-users">
                <User/>
              </div>
              
            </UseContext.Provider>
        </div>
    );
}

export default App;
