export default function ButtonField({
    label,
    children,
    type = "button",
    onClick,
    bgColor = "bg-ink-black",
    textColor = "text-paper-white",
    borderColor = "",
    hoverColor = "hover:bg-true-black"
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                mt-4 flex h-[48px] w-full items-center justify-center
                gap-2 rounded-md border px-4 text-[15px] font-medium
                shadow-sm transition-colors
                ${bgColor}
                ${textColor}
                ${borderColor}
                ${hoverColor}
            `}
        >
            {children}
            {label}
        </button>
    );
}