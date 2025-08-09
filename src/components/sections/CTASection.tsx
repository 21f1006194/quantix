import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'

const CTASection: React.FC = () => {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                    Ready to Quantify Your Success?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join IITM's only club dedicated exclusively to Quantitative Finance. Start your journey into one of the most
                    competitive, high-paying, and in-demand careers.
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
                            Join Our WhatsApp Community
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-3 bg-transparent"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/company/quantix-the-quant-and-consulting-club-iitm-bs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Follow on LinkedIn
                            <Linkedin className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>

                {/* <div className="max-w-md mx-auto">
                    <div className="flex gap-2 mb-4">
                        <Input
                            type="email"
                            placeholder="Enter your email for updates"
                            className="bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400"
                        />
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                            <Mail className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="text-sm text-gray-400">Get notified about upcoming events and opportunities</p>
                </div> */}
            </div>
        </section>
    )
}

export { CTASection } 