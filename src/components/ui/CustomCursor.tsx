import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide cursor on touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            return;
        }

        setIsVisible(true);

        const updateHoverState = (target: HTMLElement) => {
            // Check if the current element or its parents are interactive
            const isPointer = window.getComputedStyle(target).cursor === 'pointer';
            const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer, .interactive-hover');

            setIsHovering(!!(isPointer || isInteractive));
        };

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            // Immediate cursor
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            // Following cursor (lagging effect)
            gsap.to(followerRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.4,
                ease: 'power2.out'
            });

            // Constant hover check because mousemove target updates
            updateHoverState(e.target as HTMLElement);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Use GSAP for scale to ensure smoothness
    useEffect(() => {
        if (!followerRef.current || !cursorRef.current) return;

        if (isHovering) {
            gsap.to(followerRef.current, {
                scale: 1.8,
                backgroundColor: 'rgba(251, 191, 36, 0.15)',
                borderColor: 'rgba(251, 191, 36, 1)',
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
            gsap.to(cursorRef.current, {
                scale: 0.5,
                duration: 0.3
            });
        } else {
            gsap.to(followerRef.current, {
                scale: 1,
                backgroundColor: 'rgba(251, 191, 36, 0)',
                borderColor: 'rgba(251, 191, 36, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.3
            });
        }
    }, [isHovering]);

    if (!isVisible) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-amber-400 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-10 h-10 border border-amber-400/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${isHovering ? 'scale-[1.8] bg-amber-400/10 border-amber-400' : 'scale-100'
                    }`}
            />
            <style>{`
        @media (min-width: 1024px) {
          body, a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
