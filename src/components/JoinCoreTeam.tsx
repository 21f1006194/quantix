import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft  } from 'lucide-react'
import { Button } from './ui/Button'
import { CONFIG } from '../config/constants'

const JoinCoreTeam: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation Header */}
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
                    <Link to="/">
                        <Button variant="outline" className="flex items-center space-x-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Home</span>
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-20 pb-12">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Join the{' '}
                            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                                Core Team
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                            Lead the quantitative revolution at IIT Madras BS! As a core team member, you'll organize 
                            cutting-edge events, build valuable industry connections, and shape the future of quant 
                            education at our campus.
                        </p>
                        
                        {/* Core Team Activities */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-pink-400">🎯 Event Organization</h3>
                                <p className="text-gray-300 mb-3">
                                    Lead and organize major campus events during <span className="text-pink-400 font-semibold">Margazhi</span> and <span className="text-pink-400 font-semibold">Paradox</span> at IITM campus.
                                </p>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Plan and execute technical workshops</li>
                                    <li>• Coordinate with industry experts</li>
                                    <li>• Manage event logistics and promotion</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-pink-400">🤝 Networking & Connections</h3>
                                <p className="text-gray-300 mb-3">
                                    Build meaningful relationships with industry professionals, alumni, and fellow students.
                                </p>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Connect with quant professionals</li>
                                    <li>• Access exclusive networking events</li>
                                    <li>• Build your professional network</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-pink-400">📚 Quant Activities</h3>
                                <p className="text-gray-300 mb-3">
                                    Drive quantitative finance activities and workshops for the IITM BS community.
                                </p>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Design educational content</li>
                                    <li>• Mentor junior students</li>
                                    <li>• Lead technical discussions</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-pink-400">🚀 Leadership Growth</h3>
                                <p className="text-gray-300 mb-3">
                                    Develop leadership skills while contributing to the club's strategic vision.
                                </p>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Lead cross-functional teams</li>
                                    <li>• Make strategic decisions</li>
                                    <li>• Represent Quantix at events</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20">
                            <h2 className="text-2xl font-bold text-center mb-6">
                                Application Form
                            </h2>
                            <p className="text-gray-300 text-center mb-8">
                                Fill out the form below to apply for a position on our core team. 
                                We're looking for passionate individuals ready to make an impact.
                            </p>
                            
                            {/* Responsive iframe container */}
                            <div className="relative w-full">
                                {/* Desktop View */}
                                <div className="hidden md:block">
                                    <div className="flex justify-center">
                                        <iframe 
                                            src="https://docs.google.com/forms/d/e/1FAIpQLSd5EwJX5d6typbOqigO3M_vwvR4_CQUz76Bct-Ak9D9BWkRYw/viewform?embedded=true" 
                                            width="700" 
                                            height="800" 
                                            frameBorder="0" 
                                            marginHeight={0} 
                                            marginWidth={0}
                                            className="rounded-lg border border-purple-500/30"
                                            title="Join Core Team Application Form"
                                        >
                                            Loading…
                                        </iframe>
                                    </div>
                                </div>
                                
                                {/* Mobile View */}
                                <div className="md:hidden">
                                    <iframe 
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSd5EwJX5d6typbOqigO3M_vwvR4_CQUz76Bct-Ak9D9BWkRYw/viewform?embedded=true" 
                                        width="100%" 
                                        height="900" 
                                        frameBorder="0" 
                                        marginHeight={0} 
                                        marginWidth={0}
                                        className="rounded-lg border border-purple-500/30 min-w-full"
                                        title="Join Core Team Application Form"
                                    >
                                        Loading…
                                    </iframe>
                                </div>
                            </div>
                            
                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm">
                                    Having trouble with the form? 
                                    <a 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSd5EwJX5d6typbOqigO3M_vwvR4_CQUz76Bct-Ak9D9BWkRYw/viewform" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-pink-400 hover:text-pink-300 ml-2"
                                    >
                                        Open in new tab
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-gray-300 mb-6">
                            Questions about joining the core team?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            
                            <Button variant="outline" asChild>
                                <a
                                    href={`mailto:${CONFIG.email}`}
                                >
                                    Contact Us
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-12 border-t border-purple-500/20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <img
                                src="/logo.jpg"
                                alt="Quantix Logo"
                                className="w-8 h-8 rounded-lg object-cover"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                                QUANTIX
                            </span>
                        </div>
                        <p className="text-gray-400">
                            &copy; 2025 Quantix - The Quant Club, IITM BS. Quantifying Success.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default JoinCoreTeam
