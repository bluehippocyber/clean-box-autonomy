import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Industries from "./pages/Industries.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          {/* /showcase and all legacy paths redirect home until content is ready */}
          <Route path="/showcase" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<Navigate to="/" replace />} />
          <Route path="/demo" element={<Navigate to="/" replace />} />
          <Route path="/reserve" element={<Navigate to="/" replace />} />
          <Route path="/waitlist" element={<Navigate to="/" replace />} />
          <Route path="/inquiry" element={<Navigate to="/" replace />} />
          <Route path="/buy" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
