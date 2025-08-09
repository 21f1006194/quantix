import React from 'react'
import { Linkedin, Instagram, Mail } from 'lucide-react'

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-purple-500/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg"></div>
                        <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                            QUANTIX
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://www.linkedin.com/company/quantix-the-quant-and-consulting-club-iitm-bs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/quantix_iitm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition-colors"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:contact@quantix.iitm.ac.in"
                            className="text-gray-400 hover:text-pink-400 transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
                    <p>&copy; 2025 Quantix - The Quant Club, IITM BS. Quantifying Success.</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer } 