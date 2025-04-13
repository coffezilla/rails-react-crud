import { useEffect, useState, RefObject } from "react";

const useLayout = (ref: RefObject<HTMLElement>) => {
	const [isScrollable, setIsScrollable] = useState<boolean>(false);

	useEffect(() => {
		const checkScrollable = () => {
			if (ref.current) {
				const { scrollHeight, clientHeight } = ref.current;
				setIsScrollable(scrollHeight > clientHeight);
			}
		};

		checkScrollable();
		const observer = new MutationObserver(checkScrollable);
		if (ref.current) {
			observer.observe(ref.current, { childList: true, subtree: true });
		}

		window.addEventListener("resize", checkScrollable);

		return () => {
			observer.disconnect();
			window.removeEventListener("resize", checkScrollable);
		};
	}, [ref]);

	return { isScrollable };
};

export default useLayout;
