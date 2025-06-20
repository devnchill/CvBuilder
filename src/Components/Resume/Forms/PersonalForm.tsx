import type { ReactElement } from "react";
import type { IFormData } from "../../../Types/formData.types";

interface PersonalFormProps {
  formData: IFormData;
  handleInput: (
    key: keyof IFormData,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function PersonalForm({
  formData,
  handleInput,
}: PersonalFormProps): ReactElement {
  return (
    <section className="section-wrapper">
      <h3>Personal Details</h3>

      <div className="input-div">
        <label htmlFor="full-name">Full Name</label>
        <input
          id="full-name"
          type="text"
          placeholder="First and last name"
          value={formData.name}
          onChange={(e) => handleInput("name", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => handleInput("email", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="text"
          placeholder="Enter Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => handleInput("phoneNumber", e)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          placeholder="City/Country"
          value={formData.address}
          onChange={(e) => handleInput("address", e)}
        />
      </div>
    </section>
  );
}
