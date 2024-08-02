import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type GsapAnimationProps = {
	children: React.ReactNode;
	animationName: animationName;
};

type animationName = "slide-in";

const animations: Record<animationName, gsap.TweenVars> = {
	"slide-in": {
		y: 200,
		opacity: 0,
	},
};

const GsapAnimation = ({ children, animationName }: GsapAnimationProps) => {
	const elementRef = useRef<HTMLSpanElement>(null);

	useGSAP(() => {
		gsap.from(elementRef.current?.children as gsap.TweenTarget, {
			scrollTrigger: {
				trigger: elementRef.current?.children,
				start: "top bottom-=100px",
			},
			...animations[animationName],
		});
	}, [elementRef]);

	return <span ref={elementRef}>{children}</span>;
};

export default GsapAnimation;
