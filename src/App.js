import "./App.css";
import { ContextProvider } from "./contexts/GolobalContext";
import AddUser from "./componets/AddUser";
import User from "./componets/User";
import "./componets/user.css";

function App() {
    return (
        <div className="container">
            <ContextProvider>
                <AddUser />
                <div className="all-users">
                    <User />
                </div>
            </ContextProvider>
        </div>
    );
}

export default App;
