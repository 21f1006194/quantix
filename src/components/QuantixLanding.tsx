import React, { useState, useEffect } from 'react'
import { Navigation } from './sections/Navigation'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { EventsSection } from './sections/EventsSection'
import { HighlightsSection } from './sections/HighlightsSection'
import { RoadmapSection } from './sections/RoadmapSection'
import { CTASection } from './sections/CTASection'
import { Footer } from './sections/Footer'
import { HiringModal } from './ui/HiringModal'
import { CONFIG } from '../config/constants'

const QuantixLanding: React.FC = () => {
    const [showHiringModal, setShowHiringModal] = useState(false)

    useEffect(() => {
        // Show modal after 3 seconds if hiring is active and user hasn't seen it today
        if (CONFIG.isHiring) {
            const hasSeenModalToday = localStorage.getItem('quantix-hiring-modal-seen')
            const today = new Date().toDateString()
            
            if (hasSeenModalToday !== today) {
                const timer = setTimeout(() => {
                    setShowHiringModal(true)
                }, 3000)
                
                return () => clearTimeout(timer)
            }
        }
    }, [])

    const handleCloseModal = () => {
        setShowHiringModal(false)
        // Mark as seen for today
        localStorage.setItem('quantix-hiring-modal-seen', new Date().toDateString())
    }

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
            
            {/* Hiring Modal */}
            {CONFIG.isHiring && (
                <HiringModal 
                    isOpen={showHiringModal} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    )
}

export default QuantixLanding 