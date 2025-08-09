import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Calendar } from 'lucide-react'

const EventsSection: React.FC = () => {
    const events = [
        {
            title: "Quantix Orientation Session",
            participants: "120+ students",
            description:
                "Students met the core team, explored Quantitative Finance, learned about events including quant simulations & expert sessions",
            gradient: "from-pink-500 to-purple-600",
        },
        {
            title: "Expert-Led Quant Finance Workshop",
            participants: "125+ students",
            description:
                "Explored foundations of Quant Finance, understood key strategies & pitfalls, grasped the difference between Quant & Fundamental Investing",
            gradient: "from-purple-500 to-cyan-600",
        },
        {
            title: "Quant Quest Workshop (Paradox)",
            participants: "65+ students",
            description:
                "Students cracked the code of Strategy & Statistics, explored real-world applications, understood the role of Risk & Reward",
            gradient: "from-cyan-500 to-pink-600",
        },
        {
            title: "Betting on Sigma Session",
            participants: "60+ students",
            description:
                "Learned about inversion thinking as a strategic tool in quant finance, followed by the final round of Quant Quest competition",
            gradient: "from-orange-500 to-purple-600",
        },
    ]

    return (
        <section id="events" className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                        Our Impact
                    </h2>
                    <p className="text-xl text-gray-300">Highlighting the events and learning journeys we've led so far</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <Badge className={`bg-gradient-to-r ${event.gradient} text-white`}>{event.participants}</Badge>
                                    <Calendar className="h-5 w-5 text-purple-400" />
                                </div>
                                <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-300">{event.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export { EventsSection } 