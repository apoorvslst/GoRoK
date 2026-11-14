import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommandCenter from './components/CommandCenter';
import InspectorMockup from './components/InspectorMockup';
import Capabilities from './components/Capabilities';
import Ecosystem from './components/Ecosystem';
import OnboardingTimeline from './components/OnboardingTimeline';
import FAQ from './components/FAQ';
import Philosophy from './components/Philosophy';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

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
