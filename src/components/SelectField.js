export default function SelectField({
    choose,
    label,
    name,
    value,
    onChange,
    required = false
}) {
    return (
        <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-true-black">
                {label}{" "}
                {required && (
                    <span className="text-[#e53e3e]"> *</span>
                )}
            </label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="block h-[48px] w-full rounded-md border border-cloud-gray bg-paper-white px-4 text-[15px] text-true-black outline-none transition-colors focus:border-mint-green focus:ring-1 focus:ring-mint-green"
            >
                {choose.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
