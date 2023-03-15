import React from "react";
import "./Services.css";
import Modal from "./Modal";

const Services = () => {
  return (
    
      <>
        <div className="mid-heading">
          <p className="h-1" id="services">
            <h3>Our Services</h3>
          </p>
        </div>
        <div className="card">
          <img
            src="img/contractor.jpeg"
            className="card-img-top"
            alt="services"
          />
          <div className="card-body">
            <h3 className="h-3">Electrition</h3>
            <p className="card-text">
              Installing, maintaining, and repairing electrical control, wiring,
              and lighting systems. Performing general electrical maintenance.
              Inspecting transformers, circuit breakers, and other electrical
              components. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut deserunt recusandae
            </p>
          </div>
<Modal/>
        </div>
    
      <div className="card">
        <img src="img/labour.jpeg" className="card-img-top" alt="services" />
        <div className="card-body">
          <h3 className="h-3">Labor</h3>
          <p className="card-text">
            {" "}
            loading and unloading tools or raw materials, assembling scaffolding
            or other pieces of equipment and digging or filling in pits
            throughout the construction process. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="action">
            <button className="btn-all" id="trigger">
              {" "}
              Login
            </button>
          </div>
       
      </div>
      <div className="card">
        <img src="img/carpenter.jpeg" className="card-img-top" alt="services" />
        <div className="card-body">
          <h3 className="h-3">Carpenter</h3>
          <p className="card-text">
            Installing wooden structures such as roofing frames, rafters,
            partitions, joists and stud work Designing and installing cabinets,
            shelving, fitted furniture, drywall and insulation Adding fixtures
            and fittings such as door handles, locks, hinges and closures Lorem
            ipsum dolor sit amet.
          </p>
        </div>
        <div className="action">
            <button className="btn-all" id="trigger">
              {" "}
              Login
            </button>
          </div>
       
      </div>
      <div className="card">
        <img src="img/painter.jpg" className="card-img-top" alt="services" />
        <div className="card-body">
          <h3 className="h-3">Painter</h3>
          <p className="card-text">
            Preparing surfaces to be painted by washing them, filling holes and
            cracks with putty and sanding them until they’re smooth Applying
            primer and other sealers to paint surfaces, Mixing and matching
            paint, Removing old finish using scrapers, chemical compounds or
            blowtorches.
          </p>
        </div>
        <div className="action">
            <button className="btn-all" id="trigger">
              {" "}
              Login
            </button>
          </div>
       
      </div>
      <div className="card">
        <img src="img/plumber.jpeg" className="card-img-top" alt="services" />
        <div className="card-body">
          <h3 className="h-3">Plumber</h3>
          <p className="card-text">
            Perform installation of plumbing systems at new properties,
            Installing, inspecting and repairing pipes and plumbing systems to
            make sure all of a building’s fixtures operate correctly, finding
            the source of leaks and blockages, fixing or replacing broken parts.
          </p>
        </div>
        <div className="action">
            <button className="btn-all" id="trigger">
              {" "}
              Login
            </button>
          </div>
       
      </div>
    </>
  );
};

export default Services;
