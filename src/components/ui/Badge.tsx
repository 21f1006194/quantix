import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline'
    children: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-primary text-primary-foreground hover:bg-primary/80',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }
)
Badge.displayName = 'Badge'

export { Badge } 