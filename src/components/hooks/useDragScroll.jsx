import { useRef, useEffect } from "react";

export default function useDragScroll() {
    const ref = useRef(null);
    const state = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        cardWidth: 0,
        maxScroll: 0,
    });

    const updateDimensions = () => {
        const el = ref.current;
        if (!el) return;

        const firstItem = el.querySelector('li');
        if (!firstItem) return;

        const style = window.getComputedStyle(firstItem);
        const gap = parseFloat(style.marginRight) || 0;

        state.current.cardWidth = firstItem.offsetWidth + gap;
        state.current.maxScroll = el.scrollWidth - el.clientWidth;
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const onMouseDown = (e) => {
        const el = ref.current;
        if (!el) return;

        state.current.isDown = true;
        state.current.startX = e.pageX - el.offsetLeft;
        state.current.scrollLeft = el.scrollLeft;
    };

    const stopDrag = () => {
        state.current.isDown = false;
    };

    const onMouseMove = (e) => {
        if (!state.current.isDown) return;
        e.preventDefault();

        const el = ref.current;
        if (!el) return;

        const x = e.pageX - el.offsetLeft;
        const walk = x - state.current.startX;

        let next = state.current.scrollLeft - walk;
        next = Math.max(0, Math.min(next, state.current.maxScroll));

        el.scrollLeft = next;
    };

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const { cardWidth, maxScroll } = state.current;

            let next =
                el.scrollLeft +
                (e.deltaY > 0 ? cardWidth : -cardWidth);

            next = Math.max(0, Math.min(next, maxScroll));
            el.scrollLeft = next;
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    return {
        ref,
        handlers: {
            onMouseDown,
            onMouseUp: stopDrag,
            onMouseLeave: stopDrag,
            onMouseMove,
            onDragStart: (e) => e.preventDefault(),
        },
    };
}