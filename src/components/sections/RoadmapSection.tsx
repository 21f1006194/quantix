import React from 'react'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { ChevronRight } from 'lucide-react'

const RoadmapSection: React.FC = () => {
    const upcomingFeatures = [
        "Monthly Expert-led Workshops",
        "Quant Interviews & Quant Simulations",
        "Recruitment Prep Bootcamps",
        "Quantix Monthly: Research & Insights Newsletter",
        "Paradox 2026: Bigger & Smarter",
    ]

    const keyEvents = [
        { event: "Quant Finance & Investing 2.0", date: "September 2025", speaker: "Pramod S. Rajani" },
        // { event: "Quant Quest 2.0", date: "September 2025", speaker: "Flagship Competition" },
        { event: "High Frequency Trades", date: "September 2025", speaker: "Souham Sengupta" },
        { event: "Winter of Quant: Speaker Series", date: "Oct–Nov 2025", speaker: "Curated by Mehul Mehta" },
    ]

    return (
        <section id="roadmap" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                        Our Road Ahead
                    </h2>
                    <p className="text-xl text-gray-300">Building the next generation of data-driven leaders</p>
                    <div className="mt-8">
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg px-6 py-2">
                            Target: 2000 members this year
                        </Badge>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-pink-400">What's Next for Quantix</h3>
                        <div className="space-y-4">
                            {upcomingFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20"
                                >
                                    <ChevronRight className="h-5 w-5 text-pink-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Key Events Ahead</h3>
                        <div className="space-y-4">
                            {keyEvents.map((item, index) => (
                                <Card key={index} className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-500/30">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-semibold text-white">{item.event}</h4>
                                                <p className="text-sm text-gray-400">{item.speaker}</p>
                                            </div>
                                            <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                                                {item.date}
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { RoadmapSection } 