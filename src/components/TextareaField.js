export default function TextareaField({
    label,
    name,
    placeholder,
    rows = 4,
    value
}) {
    return (
        <div className="space-y-1.5 md:col-span-2">
            <label className="block text-[13px] font-medium text-true-black">
                {label}
            </label>

            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                value={value}
                className="block w-full rounded-md border border-cloud-gray bg-paper-white px-4 py-3 text-[15px] text-true-black placeholder:text-true-black/30 outline-none transition-colors focus:border-mint-green focus:ring-1 focus:ring-mint-green resize-y"
            />
        </div>
    );
}