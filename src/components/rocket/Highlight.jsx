export default function Highlight({ children }) {
    return (
        <span
            className="
                font-bold
                relative z-0 inline-block
                after:content-['']
                after:absolute
                after:left-0
                after:top-2
                after:w-full
                after:h-3
                after:bg-accent-yellow
                after:-z-10
            "
        >
            {children}
        </span>
    );
}