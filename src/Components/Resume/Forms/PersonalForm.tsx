import type { ReactElement } from "react";

export default function PersonalForm(): ReactElement {
  return (
    <>
      <div>
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" type="text" placeholder="First and last name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="full-name" type="email" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="phone-number"
          placeholder="Enter Phone Number"
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" placeholder="City/Country" />
      </div>
    </>
  );
}
