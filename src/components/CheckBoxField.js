import { Lineicons } from "@lineiconshq/react-lineicons";
import { CheckOutlined } from "@lineiconshq/free-icons";

export default function CheckBoxField({children, onChange, required}){
    return (
        <label className="mt-1 flex cursor-pointer items-start gap-2 pt-1">
                <div className="relative mt-[2.5px] flex h-[16px] w-[16px] shrink-0 items-center justify-center">
                    <input required={required} type="checkbox" name="terms" className="peer h-[16px] w-[16px] cursor-pointer appearance-none rounded-sm border border-cloud-gray bg-paper-white transition-colors checked:border-mint-green checked:bg-mint-green focus:outline-none focus:ring-2 focus:ring-mint-green/20" onChange={onChange} />
                    <Lineicons icon={CheckOutlined} className="pointer-events-none absolute h-3 w-3 text-paper-white opacity-0 peer-checked:opacity-100" strokeWidth={3.5} />
                </div>
                <span className="text-[13px] leading-[1.5] text-true-black/70">
                    {children}
                </span>
        </label>
    )
}