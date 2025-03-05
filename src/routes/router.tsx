import { Route, Routes } from "react-router-dom";
import { Login } from "../components/login";
import { Register } from "../components/register";

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> 
        </Routes>
    )
}

export default AppRouter