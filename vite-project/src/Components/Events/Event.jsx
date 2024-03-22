import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api_url } from "../../config";

const Event = async () => {
    const response = await fetch(`${api_url}api/auth/getEvent`);
    const data = await response.json();
    console.log(data);

    return (
        <>
            {data.map((d) => (
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="main-showEvent">
                                        <h1 className="card-title text-center">
                                            Event Details
                                        </h1>
                                        <p>
                                            <strong>Name:</strong>{" "}
                                            {d.title || "No name available"}
                                        </p>
                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {d.description ||
                                                "No description available"}
                                        </p>
                                        <p>
                                            <strong>Date:</strong>{" "}
                                            {d.date || "No date available"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Event;
