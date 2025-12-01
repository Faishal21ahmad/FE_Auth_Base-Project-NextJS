'use client';
interface inputProps {
    id?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    hidden?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    autoComplete?: string;
}

export default function InputTxt(props: inputProps) {
    const {
        id = "input1",
        type = "text",
        label = "label",
        placeholder = "input1",
        onChange,
        value,
        hidden = false,
        autoComplete = id,
    } = props;

    if (hidden) {
        return <input id={id} type="hidden" value={value} />;
    }

    return (
        <div className="mb-4 w-full">
            <label htmlFor={id} className="block px-2 mb-2 text-sm font-medium text-stone-900 dark:text-white text-start" >
                {label}
            </label>

            <input id={id} type={type} value={value} onChange={onChange} required autoComplete={autoComplete} className="focus:outline-2 outline-stone-300 dark:outline-stone-900 border border-stone-300 dark:border-stone-900 text-stone-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-stone-400 dark:text-white" placeholder={placeholder}
            />
        </div>
    );
}