import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Industries from "./pages/Industries.tsx";
import Products from "./pages/Products.tsx";
import NotFound from "./pages/NotFound.tsx";
import CleanboxBot from "./components/CleanboxBot";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";

const EVENTBRITE_SHOWCASE_URL = "https://www.eventbrite.com/e/clean-box-showcase-tickets-1998423489453";

const ShowcaseRedirect = () => {
  window.location.href = EVENTBRITE_SHOWCASE_URL;
  return null;
};

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
          <Route path="/products" element={<Products />} />
          <Route path="/showcase" element={<ShowcaseRedirect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/demo" element={<Navigate to="/" replace />} />
          <Route path="/reserve" element={<Navigate to="/" replace />} />
          <Route path="/waitlist" element={<Navigate to="/" replace />} />
          <Route path="/inquiry" element={<Navigate to="/" replace />} />
          <Route path="/buy" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    <CleanboxBot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
