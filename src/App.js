import Form from "./Form";
import Overview from "./Overview";
import WeatherDetail from "./WeatherDetail";
import Footer from "./Footer";
import "@fontsource/roboto";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Form />
      <Overview />
      <WeatherDetail />
      <Footer />
    </div>
  );
}
