import React from 'react'
import { Navigation } from './sections/Navigation'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { EventsSection } from './sections/EventsSection'
import { HighlightsSection } from './sections/HighlightsSection'
import { RoadmapSection } from './sections/RoadmapSection'
import { CTASection } from './sections/CTASection'
import { Footer } from './sections/Footer'

const QuantixLanding: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <EventsSection />
            <HighlightsSection />
            <RoadmapSection />
            <CTASection />
            <Footer />
        </div>
    )
}

export default QuantixLanding 