import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Users, UserPlus } from 'lucide-react'
import { Button } from './Button'
import { CONFIG } from '../../config/constants'

interface DropdownItem {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

interface DropdownProps {
  items: DropdownItem[]
  trigger: React.ReactNode
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ items, trigger, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-purple-500/30 rounded-lg shadow-xl z-50">
          <div className="py-2">
            {items.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-sm transition-colors ${
                      item.disabled 
                        ? 'text-gray-500 cursor-not-allowed' 
                        : 'text-white hover:bg-purple-500/20 hover:text-pink-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      if (item.onClick) item.onClick()
                      setIsOpen(false)
                    }}
                    disabled={item.disabled}
                    className={`w-full flex items-center px-4 py-2 text-sm transition-colors ${
                      item.disabled 
                        ? 'text-gray-500 cursor-not-allowed' 
                        : 'text-white hover:bg-purple-500/20 hover:text-pink-400'
                    }`}
                  >
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Join Now Dropdown Component
export const JoinNowDropdown: React.FC = () => {
  const dropdownItems: DropdownItem[] = [
    {
      label: "Join Community",
      href: CONFIG.whatsappGroup,
      icon: <Users className="h-4 w-4" />,
      onClick: () => {
        window.open(CONFIG.whatsappGroup, '_blank', 'noopener,noreferrer')
      }
    },
    {
      label: "Join Core Team",
      href: CONFIG.isHiring ? "/join-core-team" : undefined,
      icon: <UserPlus className="h-4 w-4" />,
      disabled: !CONFIG.isHiring
    }
  ]

  const trigger = (
    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 flex items-center">
      Join Now
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  )

  return (
    <Dropdown 
      items={dropdownItems} 
      trigger={trigger}
    />
  )
}

export { Dropdown }
