import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verified = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        },5000)
    },[]);
    return(
        <h1>Thanks for verifying</h1>
    )
}

export default Verified;