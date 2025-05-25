import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import MarketingSolutions from "./pages/MarketingSolutions";
import WhoWeAre from "./pages/WhoWeAre";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga4";

// Initialize GA only once (outside the component)
ReactGA.initialize("G-PK2Q0QJ0NV");

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketing-solutions" element={<MarketingSolutions />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
