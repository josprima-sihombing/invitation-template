import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef, useRef } from "react";

gsap.registerEffect({
	name: "slide-in",
	effect(targets: gsap.TweenTarget) {
		return gsap.fromTo(
			targets,
			{
				scale: 1,
			},
			{
				scale: 1.5,
				repeat: 1,
				ease: "bounce",
				yoyoEase: "power3",
			},
		);
	},
});

type GsapAnimationProps = {
	children: React.ReactNode;
	effect: "slide-in";
};

const GsapAnimation = forwardRef<HTMLElement, GsapAnimationProps>(
	({ children, effect }, ref) => {
		const animation = useRef();

		useGSAP(() => {
			if (gsap.effects[effect]) {
				const t = gsap.effects[effect](children.ref?.current);
				animation.current = t;
			}
		}, [effect, children]);

		useGSAP(() => {
			// forward the animation instance if a ref is passed
			if (typeof ref === "function") {
				ref(animation.current);
			} else if (ref) {
				ref.current = animation.current;
			}
		}, [ref]);

		return <>{children}</>;
	},
);

export default GsapAnimation;
