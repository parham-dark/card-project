import ContentContainer from "./components/ContentContainer";
import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    console.log(e,"e")
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer />
    </MainLayout>
  );
}

export default App;
