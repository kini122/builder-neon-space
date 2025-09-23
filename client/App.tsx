import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Calculator from "./pages/Calculator";
import Students from "./pages/Students";
import Onboarding from "./pages/Onboarding";
import Portal from "./pages/Portal";
import Login from "./pages/Login";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import CookieConsent from "@/components/site/CookieConsent";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/students" element={<Students />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppFab />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
