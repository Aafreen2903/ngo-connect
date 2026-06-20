import {useEffect,useState} from "react";
import axios from "axios";
function Events(){
  const themeColor = "rgb(50, 75, 51)";

// Stores all events fetched from MongoDB
const [events, setEvents] = useState([]);
const [editId, setEditId] = useState(null);

// Stores form data for creating a new event
const [formData, setFormData] = useState({
  name: "",
  description: "",
  eventDate: "",
  location: "",
});

// Fetch all events when component loads
useEffect(() => {
  fetchEvents();
}, []);

// Function to get all events from backend
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

const handleEdit = (event) => {
  setEditId(event._id);

  setFormData({
    name: event.name,
    description: event.description,
    eventDate: event.eventDate
      ? event.eventDate.split("T")[0]
      : "",
    location: event.location,
  });
};

// Handle input changes
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

// Add / Update event
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editId) {
      await axios.put(
        `http://localhost:5000/api/events/${editId}`,
        formData
      );

      alert("Event Updated Successfully");
      setEditId(null);
    } else {
      await axios.post(
        "http://localhost:5000/api/events",
        formData
      );

      alert("Event Added Successfully");
    }

    fetchEvents();

    setFormData({
      name: "",
      description: "",
      eventDate: "",
      location: "",
    });

  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/events/${id}`
    );

    fetchEvents();

    alert("Event Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
return (
  <div className="container mt-5 pt-5">

    <div className="row mt-4">

     
      <div className="col-md-4">

        <div className="card shadow-lg border-0 sticky-top ">
          <div className="card-body">

            <h4 style={{ color: themeColor }}>
              {editId ? "Update Event" : "Add New Event"}
            </h4>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Event Name"
                className="form-control mb-2"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Event Description"
                className="form-control mb-2"
                value={formData.description}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="eventDate"
                className="form-control mb-2"
                value={formData.eventDate}
                onChange={handleChange}
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="form-control mb-3"
                value={formData.location}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn text-white w-100"
                style={{
                  backgroundColor: themeColor,
                }}
              >
                {editId
                  ? "Update Event"
                  : "Add Event"}
              </button>

            </form>

          </div>
        </div>

      </div>

      
      <div className="col-md-8">

       
        <div className="row">

          {events.map((event) => (
            <div
              key={event._id}
              className="col-md-4 mb-2"
            >
              <div className="card h-100 shadow-lg border-0 event-card" style={{
                  borderRadius: "20px",
                  boxShadow:
                    "0 15px 30px rgba(26, 41, 22, 0.15)",
                  
                }}>

                <div className="card-body">

                  <h5
                    className="card-title"
                    style={{ color: themeColor }}
                  >
                    {event.name}
                  </h5>

                  <p>{event.description}</p>

                  <p className="text-muted">
                    <strong>Date:</strong>{" "}
                    {event.eventDate
                      ? new Date(
                          event.eventDate
                        ).toLocaleDateString()
                      : "Not Available"}
                  </p>

                  <p className="text-muted">
                    <strong>Location:</strong>{" "}
                    {event.location ||
                      "Not Available"}
                  </p>

                  <div className="d-flex gap-2">

                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor:
                          themeColor,
                      }}
                      onClick={() =>
                        handleEdit(event)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleDelete(event._id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {events.length === 0 && (
          <div className="alert alert-info">
            No events available.
          </div>
        )}

      </div>

    </div>

  </div>
);
}
export default Events;