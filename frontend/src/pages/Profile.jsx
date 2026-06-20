import React, { useState } from "react";

function Profile() {

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(storedUser || {});
  const [isEditing, setIsEditing] = useState(false);

 


  return (
    <div
    style={{
      minHeight: "100vh",
      backgroundImage: "url('/images/download.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px"
    }}
  >

      <div
        className="card shadow"
        style={{
          width: "450px",
          borderRadius: "15px"
        }}
      >

        <div
          className="card-header text-white text-center"
          style={{
            backgroundColor: "rgb(15, 29, 16)"
          }}
        >
          <h3>My Profile</h3>
        </div>


        <div className="card-body text-center">


          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "wheat",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px"
            }}
          >
            👤
          </div>


          {
            isEditing ? (

              <div className="mt-3">

                <input
                  className="form-control mb-3"
                  name="fullName"
                  value={user.fullName || ""}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />


                <input
                  className="form-control mb-3"
                  name="email"
                  value={user.email || ""}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />


              </div>

            ) : (

              <>
                <h4 className="mt-3">
                  {user?.fullName}
                </h4>

                <p className="text-muted">
                  NGO Volunteer
                </p>

                <hr />

                <p>
                  <b>Name:</b> {user?.fullName}
                </p>

                <p>
                  <b>Email:</b> {user?.email}
                </p>

                <p>
                  <b>Role:</b> Volunteer
                </p>
              </>

            )
          }




        </div>

      </div>

    </div>
  );
}

export default Profile;