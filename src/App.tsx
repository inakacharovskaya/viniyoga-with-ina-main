import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { LanguageToggle } from "./components/LanguageToggle";
import { CookieConsentBanner } from "./components/CookieConsentBanner";
import { PageSeo } from "./components/PageSeo";
import type { Lang } from "@/content";
import { localizedPath } from "@/lib/routing";

const queryClient = new QueryClient();

const getPreferredLanguage = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  if (stored === "en" || stored === "de") return stored;
  return window.navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
};

const RootRedirect = () => <Navigate to={`/${getPreferredLanguage()}/`} replace />;

const LegacyRedirect = ({ path }: { path: string }) => (
  <Navigate to={localizedPath(path, getPreferredLanguage())} replace />
);

const LocalizedPage = ({ path, children }: { path: string; children: ReactNode }) => {
  const { lang } = useParams();
  const location = useLocation();
  const language = lang === "de" ? "de" : "en";
  const canonicalPath = localizedPath(path, language);

  if (location.pathname !== canonicalPath) {
    return <Navigate to={canonicalPath} replace />;
  }

  return children;
};

const LocaleRoute = () => {
  const { lang } = useParams();
  const location = useLocation();
  const { setLang } = useLanguage();
  const targetLanguage = lang === "de" || lang === "en" ? lang : null;

  useLayoutEffect(() => {
    if (targetLanguage) setLang(targetLanguage);
  }, [setLang, targetLanguage]);

  if (!targetLanguage) {
    const remainingPath = location.pathname.replace(/^\/[^/]+/, "");
    return <Navigate to={`/en${remainingPath}`} replace />;
  }

  return <Outlet />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageSeo />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/services" element={<LegacyRedirect path="/services" />} />
            <Route path="/about" element={<LegacyRedirect path="/about" />} />
            <Route path="/contact" element={<LegacyRedirect path="/contact" />} />
            <Route path="/impressum" element={<LegacyRedirect path="/impressum" />} />
            <Route path="/datenschutz" element={<LegacyRedirect path="/datenschutz" />} />
            <Route path="/:lang" element={<LocaleRoute />}>
              <Route index element={<Index />} />
              <Route path="services" element={<LocalizedPage path="/services"><Services /></LocalizedPage>} />
              <Route path="leistungen" element={<LocalizedPage path="/services"><Services /></LocalizedPage>} />
              <Route path="about" element={<LocalizedPage path="/about"><About /></LocalizedPage>} />
              <Route path="ueber-mich" element={<LocalizedPage path="/about"><About /></LocalizedPage>} />
              <Route path="contact" element={<LocalizedPage path="/contact"><Contact /></LocalizedPage>} />
              <Route path="kontakt" element={<LocalizedPage path="/contact"><Contact /></LocalizedPage>} />
              <Route path="impressum" element={<LocalizedPage path="/impressum"><Impressum /></LocalizedPage>} />
              <Route path="datenschutz" element={<LocalizedPage path="/datenschutz"><Datenschutz /></LocalizedPage>} />
              <Route path="*" element={<NotFound />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <LanguageToggle />
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
