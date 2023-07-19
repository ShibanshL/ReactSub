import "./App.css";
import PhoneMain from "./Component/PhoneMain";
import PC_Main from "./Component/PC_Main";

function App() {
  return (
    <>
      <div className="Phone">
        <PhoneMain />
      </div>
      <div className="NotPhone">
        <PC_Main />
      </div>
    </>
  );
}

export default App;
