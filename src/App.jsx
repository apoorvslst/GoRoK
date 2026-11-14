import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ArchitectureFlowchart from './components/ArchitectureFlowchart.jsx';
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
        {/* 2. Hero Section with Realm Alliance Editorial Typography */}
        <Hero />

        {/* 3. Interactive Architecture Flowchart */}
        <ArchitectureFlowchart />

        {/* 4. Interactive CLI Command Center */}
        <CommandCenter />

        {/* 5. Live Traffic Inspector UI Mockup */}
        <InspectorMockup />

        {/* 6. Numbered Capabilities (8 Pillars) */}
        <Capabilities />

        {/* 7. Ecosystem & Integration Section */}
        <Ecosystem />

        {/* 8. 4-Stage Onboarding Timeline */}
        <OnboardingTimeline />

        {/* 9. Developer FAQ Accordion */}
        <FAQ />

        {/* 10. Product Philosophy ("Why GoRok") */}
        <Philosophy />

        {/* 11. Closing Call to Action */}
        <CallToAction />
      </main>

      {/* 12. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
