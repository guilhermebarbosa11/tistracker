interface CardProps {
    title: string;
    value: string;
  }
  export default function Card({ title, value }: CardProps) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-sm font-medium text-gray-500">{title}</h2>
        <p className="mt-2 text-2xl font-semibold">{value}</p>
      </div>
    );
  }