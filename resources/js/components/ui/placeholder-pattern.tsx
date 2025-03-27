import { cn } from '@/lib/utils';

interface PlaceholderPatternProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function PlaceholderPattern({ className, ...props }: PlaceholderPatternProps) {
    return (
        <svg
            className={cn('absolute inset-0 h-full w-full', className)}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <defs>
                <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
        </svg>
    );
} 