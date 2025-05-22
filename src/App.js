import { Outlet } from "react-router";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNavigation from "./component/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useStore } from "./store/stoore";

export default function App() {
  const { setBannerData, setImageURL } = useStore((state) => state);
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      setBannerData(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      setImageURL(response.data.images.secure_base_url + "original");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}
