
function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "rgb(15, 29, 16)",
        padding: "10px 0",
        fontSize: "13px",
      }}
    >
      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-md-4">
            <h6>NGO Connect</h6>
            <p className="mb-1">
              Connecting volunteers with NGO events and social causes.
            </p>
          </div>


          {/* Quick Links */}
          <div className="col-md-4">
            <h6>Quick Links</h6>

            <ul className="list-unstyled">
              <li>
                <a href="/dashboard" className="text-white text-decoration-none">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="/events" className="text-white text-decoration-none">
                  Events
                </a>
              </li>

              

              <li>
                <a href="/profile" className="text-white text-decoration-none">
                  Profile
                </a>
              </li>


              <li>
                <a href="/login" className="text-white text-decoration-none">
                  Login
                </a>
              </li>

              <li>
                <a href="/register" className="text-white text-decoration-none">
                  Register
                </a>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div className="col-md-4">
            <h6>Contact Us</h6>

            <ul className="list-unstyled">
              <li>
                Email: ngo@volunteermanagementsystem.com
              </li>

              <li>
                Phone: +91 91754 67582
              </li>

              <li>
                Location: India
              </li>
            </ul>
          </div>

        </div>


        <hr style={{ margin: "8px 0", borderColor: "white" }} />


        <div className="text-center">
          <p className="mb-0">
            © 2026 NGO Connect  |  All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;