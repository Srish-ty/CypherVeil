import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EventPage from "./pages/EventPage";
import Feedback from "./pages/Feedback";
import { useEffect } from "react";
import EventHostingPage from "./pages/EventHostingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/event-page":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/event-page" element={<EventPage />} />
      <Route path="/event-page/:id" element={<EventPage />} />
      <Route path="/feedback" element={<Feedback className="primary" />} />
      <Route path="/eventhost" element={<EventHostingPage />} />
    </Routes>
  );
}
export default App;
