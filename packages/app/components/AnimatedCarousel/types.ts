interface AnimatedCarouselProps {
	items: React.ReactNode[];
	itemsOnScreenCount?: number;
	height?: number;
	duration?: number;
	autoPlay?: boolean;
}

interface MarqueeCarouselProps {
	items: React.ReactNode[];
	itemsOnScreenCount?: number;
	height?: number;
	duration?: number;
	autoPlay?: boolean;
}

interface CircularCarouselProps {
	items: React.ReactNode[];
	itemSize?: number;
	duration?: number;
	autoPlay?: boolean;
}

export { AnimatedCarouselProps, MarqueeCarouselProps, CircularCarouselProps };
