import { Route, Routes } from "react-router-dom";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { Home } from "../components/home";

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> 
        </Routes>
    )
}

export default AppRouter