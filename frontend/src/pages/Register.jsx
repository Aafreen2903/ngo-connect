import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";
function Register() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://ngo-connect-6z0k.onrender.com/api/register",
        userData
      );

      alert(response.data.message);

      setfullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-left">

          <h1>Registration Form</h1>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) =>
                setfullName(e.target.value)
              }
              required
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button type="submit">
              Register
            </button>
            <p className="text-center mt-3">
           Already have an account? <Link to="/login" 
           style={{color: "#406942ff",fontWeight:"bold",textDecoration:"none"}}>Signin</Link>
          </p>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Register;