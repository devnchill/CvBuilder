import Preview from "./Components/Preview/Preview";
import Resume from "./Components/Resume/Resume";
import "./Styles/styles.css";

export default function App(): React.ReactElement {
  return (
    <>
      <Resume />
      <Preview />
    </>
  );
}
