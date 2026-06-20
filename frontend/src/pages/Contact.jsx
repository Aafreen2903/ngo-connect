import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUser,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  return (
    <div className="container mt-5 pt-4">
      <h2 style={{color:"rgb(41, 68, 43)", paddingTop: "20px"}}>
        Contact Us
      </h2>
      <p className="text-muted">
        We'd love to hear from you. Reach out to us for any queries or information.
      </p>
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6 mb-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body p-4">
              <div className="d-flex mb-4">
                <FaMapMarkerAlt
                  size={25}
                  color="#406942"
                  className="me-3 mt-1"
                />
                <div>
                  <h5 style={{color:"#406942"}}>
                    Address
                  </h5>
                  <p>
                    Vishnu Township, VR Colony,
                    Kurnool - 518003
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <FaPhoneAlt
                  size={22}
                  color="#406942"
                  className="me-3 mt-1"
                />
                <div>
                  <h5 style={{color:"#406942"}}>
                    Phone
                  </h5>
                  <p>
                    +91 91754 67582
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <FaEnvelope
                  size={22}
                  color="#406942"
                  className="me-3 mt-1"
                />
                <div>
                  <h5 style={{color:"#406942"}}>
                    Email
                  </h5>
                  <p>
                    ngo@volunteermanagementsystem.com
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <FaClock
                  size={22}
                  color="#406942"
                  className="me-3 mt-1"
                />
                <div>
                  <h5 style={{color:"#406942"}}>
                    Office Hours
                  </h5>
                  <p>
                    Monday - Saturday
                    <br/>
                    9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h4
                className="mb-4"
                style={{color:"#406942"}}
              >
                <FaPaperPlane className="me-2"/>
                Send Us a Message
              </h4>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaUser/>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaEnvelope/>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Enter your query"
              ></textarea>
              <button
                className="btn text-white"
                style={{
                  background:"rgb(41, 68, 43)"
                }}
                
              >
                <FaPaperPlane className="me-2"/>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;