import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Brain, TrendingUp, BarChart3, Zap, Target, Award } from 'lucide-react'

const AboutSection: React.FC = () => {
    const benefits = [
        { icon: Brain, title: "Strong Analytical Skills" },
        { icon: TrendingUp, title: "Lucrative Career Paths" },
        { icon: BarChart3, title: "Real-World Trading Exposure" },
        { icon: Zap, title: "Early Internship Access" },
        { icon: Target, title: "Structured Problem Solving" },
        { icon: Award, title: "Elite Interview Prep" },
    ]

    return (
        <section id="about" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                        Our Vision
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Quantix is all about empowering the future Quants at IIT Madras BS. We're more than a club, we're a
                        launchpad for high-potential careers in Quant Finance. Our vision is to bridge the gap between data
                        science and financial modeling, enabling students to turn complex data into smart, impactful decisions
                        that lead to a great career in Quantitative Finance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-purple-400">Why Quant Finance?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20"
                                >
                                    <item.icon className="h-6 w-6 text-pink-400" />
                                    <span className="text-sm font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
                            <CardHeader>
                                <CardTitle className="text-pink-400">Our Purpose</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-gray-300">
                                <p>
                                    • Help students break into high-paying field of Quant Finance by building core skills from day one
                                </p>
                                <p>• Develop structured problem-solving and data-driven thinking that Quant Finance firms expect</p>
                                <p>• Bring together like-minded students who challenge each other and aim for the top together</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { AboutSection } 