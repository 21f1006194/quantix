import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline'
    size?: 'sm' | 'default' | 'lg'
    asChild?: boolean
    children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
        const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

        const variants = {
            default: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700',
            outline: 'border border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent'
        }

        const sizes = {
            sm: 'h-9 px-3 text-sm',
            default: 'h-10 px-4 py-2',
            lg: 'h-11 px-8 text-lg'
        }

        const buttonClasses = cn(baseClasses, variants[variant], sizes[size], className)

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children as React.ReactElement<any>, {
                className: buttonClasses,
                ...props
            })
        }

        return (
            <button
                className={buttonClasses}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button } 