import { Toaster } from "@/components/ui/toaster"; // Standard toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner for contact form
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index"; // Your main portfolio page - Using alias path
import NotFound from "@/pages/NotFound"; // The 404 page - Using alias path

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* Keep this for general toasts if needed */}
      <Sonner theme="dark" position="bottom-right" /> {/* Specifically for the contact form */}
      <BrowserRouter>
        <Routes>
          {/* Route for the main portfolio page */}
          <Route path="/" element={<Index />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
