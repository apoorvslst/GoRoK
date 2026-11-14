import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CommandCenter from './components/CommandCenter.jsx';
import InspectorMockup from './components/InspectorMockup.jsx';
import Capabilities from './components/Capabilities.jsx';
import Ecosystem from './components/Ecosystem.jsx';
import OnboardingTimeline from './components/OnboardingTimeline.jsx';
import FAQ from './components/FAQ.jsx';
import Philosophy from './components/Philosophy.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-offwhite font-sans antialiased selection:bg-gorok selection:text-black">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main>
        {/* 2. Hero Section with Live Terminal Simulator */}
        <Hero />

        {/* 3. Interactive CLI Command Center */}
        <CommandCenter />

        {/* 4. Live Traffic Inspector UI Mockup */}
        <InspectorMockup />

        {/* 5. Numbered Capabilities (8 Pillars) */}
        <Capabilities />

        {/* 6. Ecosystem & Integration Section */}
        <Ecosystem />

        {/* 7. 4-Stage Onboarding Timeline */}
        <OnboardingTimeline />

        {/* 8. Developer FAQ Accordion */}
        <FAQ />

        {/* 9. Product Philosophy ("Why GoRok") */}
        <Philosophy />

        {/* 10. Dramatic Closing Call to Action */}
        <CallToAction />
      </main>

      {/* 11. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
