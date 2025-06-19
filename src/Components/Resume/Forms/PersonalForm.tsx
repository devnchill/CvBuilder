import type { ReactElement } from "react";

export default function PersonalForm(): ReactElement {
  return (
    <section className="section-wrapper">
      <h3>Personal Details</h3>
      <div className="input-div">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" type="text" placeholder="First and last name" />
      </div>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input id="full-name" type="email" placeholder="Enter email" />
      </div>
      <div className="input-div">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="phone-number"
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="input-div">
        <label htmlFor="address">Address</label>
        <input id="address" type="text" placeholder="City/Country" />
      </div>
    </section>
  );
}
