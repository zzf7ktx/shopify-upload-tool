import { Outlet } from "@tanstack/react-router";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import { Cloudinary } from "@cloudinary/url-gen";

function App() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dtp8svzny'
    }
  });

  
  
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
