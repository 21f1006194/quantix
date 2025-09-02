import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, UserPlus, Sparkles, Zap } from 'lucide-react'
import { Button } from './Button'

interface HiringModalProps {
  isOpen: boolean
  onClose: () => void
}

const HiringModal: React.FC<HiringModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-black/95 backdrop-blur-md border-2 border-purple-500/50 rounded-2xl shadow-2xl max-w-md mx-4 transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Modal Content Container */}
        <div className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Animated Icons */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🚀 We're Hiring!
            </h2>
            
            {/* Catchy Message */}
            <p className="text-lg text-white mb-2">
              Ready to lead the <span className="text-pink-400 font-semibold">quant revolution</span>?
            </p>
            <p className="text-gray-300 mb-6">
              Join our core team and shape the future of quantitative finance at IITM BS!
            </p>

            {/* Features Container */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-4 mb-6 border border-purple-500/20">
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-300">
                  <Sparkles className="h-4 w-4 text-pink-400 mr-3 flex-shrink-0" />
                  <span>Lead major campus events (Margazhi & Paradox)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Zap className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                  <span>Build industry connections & network</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <UserPlus className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                  <span>Mentor & guide fellow students</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                asChild
              >
                <Link to="/join-core-team" onClick={onClose}>
                  Apply Now - Join Core Team
                  <UserPlus className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HiringModal }
