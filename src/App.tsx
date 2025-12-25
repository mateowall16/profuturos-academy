import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Mentoria from "./pages/Mentoria";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ProBot from "./components/ProBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ RESPONSÁVEL PELO SCROLL */}
        <ScrollToTop />

        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/faq" element={<FAQ />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Bot flutuante */}
          <ProBot />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
