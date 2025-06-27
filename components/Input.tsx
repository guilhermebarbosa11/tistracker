interface InputProps {
    label: string;
    type: string;
    value: string;
    onChange: (val: string) => void;
  }
  export default function Input({ label, type, value, onChange }: InputProps) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
    );
  }