import Preview from "./Components/Preview/Preview";
import Resume from "./Components/Resume/Resume";
import "./Styles/styles.css";
import { useState } from "react";

export default function App(): React.ReactElement {
  const currDate = new Date().toISOString().split("T")[0];
  const initialFormData = {
    name: "Your Name",
    email: "foo@gmail.com",
    phoneNumber: "+91 1234567890",
    address: "Town Hall",
    schoolName: "Saint Foo Public School",
    degree: "BTech",
    eduStartDate: currDate,
    eduEndDate: currDate,
    company: "Red Hat",
    position: "SDE",
    workStartDate: currDate,
    workEndDate: currDate,
    location: "Silicon Valley",
    description:
      "A junior software engineer using solidity to write smart contracts.",
  };
  console.log(initialFormData.eduStartDate);

  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <Resume formData={formData} setFormData={setFormData} />
      <Preview formData={formData} />
    </>
  );
}
