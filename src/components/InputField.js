export default function InputField({ value, label, name, placeholder, type = "text", onChange, readOnly = false }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-true-black">
                {label}
            </label>
            <input value={value}
                required
                name={name}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                onChange={onChange} className="block h-[48px] w-full rounded-md border border-cloud-gray bg-paper-white px-4 text-[15px] text-true-black placeholder:text-true-black/30 outline-none transition-colors focus:border-mint-green focus:ring-1 focus:ring-mint-green" />
        </div>
    )
}