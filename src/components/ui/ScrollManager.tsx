import React, { useEffect } from 'react';

export const ScrollManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Scroll variable for CSS parallax
        const handleScroll = () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Intersection Observer for fade-in effects
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // If we only want to animate once:
                    // observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Initial elements
        const elements = document.querySelectorAll('.fade-in-scroll');
        elements.forEach((el) => observer.observe(el));

        // Observe future elements (dynamic content)
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.classList.contains('fade-in-scroll')) {
                            observer.observe(node);
                        }
                        node.querySelectorAll('.fade-in-scroll').forEach((el) => observer.observe(el));
                    }
                });
            });
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return <>{children}</>;
};
