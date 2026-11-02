import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import AreaPage from './pages/AreaPage';
import { areas } from '@/data/areas';

// Public marketing site: no Base44 auth gate (it blanked the page without an app ID).
function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tietosuoja" element={<Privacy />} />
          {areas.map((a) => (
            <Route key={a.slug} path={`/${a.slug}`} element={<AreaPage area={a} />} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
