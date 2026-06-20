import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
function Dashboard() {
  const themeColor = "rgb(21, 49, 23)";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/events"
      );

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container mt-5 pt-5"
      style={{ minHeight: "100vh" }}
    >
      <h2
        className="fw-bold mb-2"
        style={{
          color: themeColor,
          letterSpacing: "0.5px",
        }}
      >
        Upcoming NGO Events
      </h2>

      <p
        className="mb-4"
        style={{
          color: "#6c757d",
          fontSize: "17px",
        }}
      >
        Participate in our environmental initiatives and help create a greener future.
      </p>

      {events.length === 0 ? (
        <div className="alert alert-info">
          No events available.
        </div>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div
              key={event._id}
              className="col-md-3 mb-3"
            >
              <div
                className="card h-100 border-0 event-card"
              >
                <div className="card-body p-4">
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      color: themeColor,
                    }}
                  >
                    {event.name}
                  </h5>

                  <p
                    style={{
                      color: "#555",
                      minHeight: "80px",
                    }}
                  >
                    {event.description}
                  </p>

                  <hr />

                  <p className="mb-2">
                    <strong>Date:</strong>{" "}
                    {event.eventDate
                      ? new Date(
                          event.eventDate
                        ).toLocaleDateString()
                      : "Not Available"}
                  </p>

                  <p className="mb-0">
                    <strong>Location:</strong>{" "}
                    {event.location ||
                      "Not Available"}
                  </p>

                
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;