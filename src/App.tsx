import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Industries from "./pages/Industries.tsx";
import Products from "./pages/Products.tsx";
import Showcase from "./pages/Showcase.tsx";
import NotFound from "./pages/NotFound.tsx";
import CleanboxBot from "./components/CleanboxBot";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import AccountWall from "./components/AccountWall";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccountWall />
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/showcase" element={<Showcase />} />
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
