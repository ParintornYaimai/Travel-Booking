import React from "react";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  return (
    <div className="d-flex flex-row">
      <div className="testimonial py-4 px-3 ">
        <p>
          The word "Lorem" on line 8 is part of a placeholder text often used in
          publishing and graphic design to fill space and visualize the layout
          before the final content is available. This is known as "Lorem Ipsum"
          text, which is a scrambled section of a Latin text by Cicero from 45
          BC.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          The word "Lorem" on line 8 is part of a placeholder text often used in
          publishing and graphic design to fill space and visualize the layout
          before the final content is available. This is known as "Lorem Ipsum"
          text, which is a scrambled section of a Latin text by Cicero from 45
          BC.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mona Lisa</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          The word "Lorem" on line 8 is part of a placeholder text often used in
          publishing and graphic design to fill space and visualize the layout
          before the final content is available. This is known as "Lorem Ipsum"
          text, which is a scrambled section of a Latin text by Cicero from 45
          BC.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Mark Zuckerberg </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;