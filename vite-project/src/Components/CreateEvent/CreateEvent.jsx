import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../config";
import "./createevent.css";

const CreateEvent = () => {
    const navigate = useNavigate();
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventDate, setEventDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api_url}api/auth/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: eventName,
                    description: eventDescription,
                    date: eventDate,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Event created successfully:", data);

                navigate("/EventList", {
                    state: { eventName, eventDescription, eventDate },
                });
            } else {
                console.error("Failed to create event:", data.message);
            }
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <div className="create-event-container">
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">
                        Name of your Event
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">
                        Description about it
                    </label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">
                        Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
