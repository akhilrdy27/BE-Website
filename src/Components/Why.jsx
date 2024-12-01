import React from "react";
import "./Why.css"; // Create a separate CSS file or use inline styles
import { color } from "three/webgpu";

function Why() {
  return (
    <div className="app-container">
      <section className="why-choose-us">
        <h2 style={{color:'aliceblue'}}>
          Why <span className="highlight">BE</span> is The Right Choice for You
        </h2>

        <div className="cards-container"> */
          {/* Card 1: Expert Instructors */}
          {/* <div className="card"> */}
            {/* <h3 style={{color:'#113366'}}>Regulatory Approvals</h3>
            <p style={{color:'black'}}> 
              Following the ICH guidelines have become bread and butter for our
              employees.
            </p> */}
          {/* </div>

          {/* Card 2: Career-Boost Certify */}
          <div className="card">
            <h3 style={{color:'#FF0080'}}>Safe & Sustainable Operations</h3>
            <p style={{color:'black'}}>
              We adopt sustainable strategies such as green chemistry, waste
              reduction, energy efficiency, responsible sourcing, eco-friendly
              packaging, and EPR in our operations.
            </p>
          </div>

          {/* Card 3: 100+ High Impact Courses */}
          <div className="card">
            <h3 style={{color:'#008000'}}>Operational Excellence</h3>
            <p style={{color:'black'}}>
              Efficient utilization of resources, time, and labor so waste can
              be reduced and even eliminated.
            </p>
          </div>

          {/* Card 4: Flexible Learning Schedules */}
          <div className="card highlight-card">
            <h3 style={{color:'#800080'}}>Manufacturing Capability</h3>
            <p style={{color:'black'}}>
              We manufacture from the SMs giving us the highest advantage of not
              being dependent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Why;
