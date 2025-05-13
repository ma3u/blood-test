
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/context/QueryProvider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { UserProfileProvider } from "./context/UserProfileContext";
import Profile from "./pages/Profile";
import Longevity from "./pages/Longevity";

import BloodTestDiagnostic from "./pages/BloodTestDiagnostic";

function App() {
  return (
    <LanguageProvider>
      <QueryProvider>
        <UserProfileProvider>
          <ThemeProvider defaultTheme="light" storageKey="blood-test-oracle-theme">
            <Router>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/longevity" element={<Longevity />} />
                    <Route path="/blood-test-diagnostic" element={<BloodTestDiagnostic />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </ThemeProvider>
        </UserProfileProvider>
      </QueryProvider>
    </LanguageProvider>
  );
}

export default App;
