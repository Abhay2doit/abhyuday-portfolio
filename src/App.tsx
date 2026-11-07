import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_PATH } from "@/data/profile";
import Index from "./pages/Index";
import AICorner from "./pages/AICorner";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
export const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /><Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/ai-corner" element={<AICorner />} />
        <Route path="/ai-corner/workflows" element={<AICorner activeTile="workflows" />} />
        <Route path="/ai-corner/ideas" element={<AICorner activeTile="ideas" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);
const App = () => <BrowserRouter basename={BASE_PATH}><AppContent /></BrowserRouter>;
export default App;
