import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post(
        "https://ngo-connect-6z0k.onrender.com/api/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token",response.data.token);
      
      localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
);
      
      alert(response.data.message);
      navigate("/dashboard");
      

      console.log(response.data.user);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100" >
      <div className="card shadow p-4" style={{
                  borderRadius: "20px",
                  boxShadow:
                    "0 15px 30px rgba(26, 41, 22, 0.15)",
                  width: "400px"
                }}>
        <h2 className="text-center mb-4 "  style={{ color: "#406942ff" }}>NGO CONNECT</h2>
         <p className="text-secondary text-center ">Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{background: "#406942ff"}}
          >
            Sign in
          </button>
          <p className="text-center mt-3">
           Don't have an account? <Link to="/register" 
           style={{color: "#406942ff",fontWeight:"bold",textDecoration:"none"}}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;