import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import { FormProvider } from "./contexts/FormContext";
import Page4 from "./pages/page4";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/step2" element={<Page2 />} />
          <Route path="/step3" element={<Page3 />} />
          <Route path="/step4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}
export default App;
