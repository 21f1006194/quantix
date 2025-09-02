import React from 'react'
import { Link } from 'react-router-dom'
import { JoinNowDropdown } from '../ui/Dropdown'

const Navigation: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/logo.jpg"
                        alt="Quantix Logo"
                        className="w-8 h-8 rounded-lg object-cover"
                    />
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                        QUANTIX
                    </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="hover:text-pink-400 transition-colors"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('events')}
                        className="hover:text-pink-400 transition-colors"
                    >
                        Events
                    </button>
                    <button
                        onClick={() => scrollToSection('roadmap')}
                        className="hover:text-pink-400 transition-colors"
                    >
                        Roadmap
                    </button>
                    <button
                        onClick={() => scrollToSection('highlights')}
                        className="hover:text-pink-400 transition-colors"
                    >
                        Highlights
                    </button>
                    <Link
                        to="/join-core-team"
                        className="hover:text-pink-400 transition-colors"
                    >
                        Core Team
                    </Link>
                    <JoinNowDropdown />
                </div>
            </div>
        </nav>
    )
}

export { Navigation } 