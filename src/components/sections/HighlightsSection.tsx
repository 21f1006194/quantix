import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Linkedin, ArrowRight } from 'lucide-react'

const HighlightsSection: React.FC = () => {
    return (
        <section id="highlights" className="py-20 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                        Event Highlights
                    </h2>
                    <p className="text-xl text-gray-300">See our events in action through social media and video content</p>
                </div>

                {/* LinkedIn Posts Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center text-pink-400">Latest Updates</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {/* LinkedIn Post 1 - Betting on Sigma */}
                        <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/30 hover:border-pink-500/50 transition-all duration-300">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-pink-400 flex items-center">
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    Betting on Sigma Event
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-2">
                                <div className="rounded-lg overflow-hidden bg-gray-800">
                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7336347520568115200?collapsed=1"
                                        height="400"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Betting on Sigma LinkedIn Post"
                                        className="w-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* LinkedIn Post 2 - Quant Finance Workshop */}
                        <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/30 hover:border-pink-500/50 transition-all duration-300">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-purple-400 flex items-center">
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    Quant Finance Workshop
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-2">
                                <div className="rounded-lg overflow-hidden bg-gray-800">
                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336701336937213953?collapsed=1"
                                        height="400"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Quant Finance Workshop LinkedIn Post"
                                        className="w-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* LinkedIn Post 3 - Expert Workshop Series */}
                        <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-cyan-400 flex items-center">
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    Expert Workshop Series
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-2">
                                <div className="rounded-lg overflow-hidden bg-gray-800">
                                    <iframe
                                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7311091020438417408?collapsed=1"
                                        height="400"
                                        width="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Expert Workshop LinkedIn Post"
                                        className="w-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* YouTube Video Section */}
                <div className="mb-12">
                    {/* <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Featured Video</h3> */}
                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-cyan-500/30 hover:border-pink-500/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl text-cyan-400 flex items-center justify-center">
                                    <svg className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                    Quant Quest - Opening Meet | Paradox '25
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 shadow-2xl">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/zgA83sge67Y"
                                        title="Quant Quest - Opening Meet | Paradox '25"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* LinkedIn Company Page Link */}
                <div className="text-center">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                        <a
                            href="https://www.linkedin.com/company/quantix-the-quant-and-consulting-club-iitm-bs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-4 w-4 mr-2" />
                            Follow Us on LinkedIn
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export { HighlightsSection } 