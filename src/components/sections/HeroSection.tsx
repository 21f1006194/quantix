import React from 'react'
import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import quantixLogo from '../../assets/logo.jpg'

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="mb-8">
                    <img
                        src={quantixLogo}
                        alt="Quantix Logo"
                        className="w-72 h-72 mx-auto mb-8 rounded-2xl shadow-2xl shadow-purple-500/20 object-cover"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    QUANTIX
                </h1>
                <p className="text-2xl md:text-3xl mb-4 text-gray-300">The Quant Club, IITM BS</p>
                <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
                    Empowering students of IITM BS in Quantitative Finance.
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 font-semibold">
                        {" "}
                        Quantifying Success.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-3"
                        asChild
                    >
                        <a
                            href="https://chat.whatsapp.com/EUKnMxxlKEFJPC7R7oFEes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join Our Community
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400">650+</div>
                        <div className="text-sm text-gray-400">Student Registrations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">600+</div>
                        <div className="text-sm text-gray-400">Active Members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400">312</div>
                        <div className="text-sm text-gray-400">LinkedIn Followers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400">125+</div>
                        <div className="text-sm text-gray-400">Instagram Followers</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { HeroSection } 