// components/InfoCard.tsx
interface InfoCardProps {
    title: string;
    description: string;
    value: string;
  }
  
  export default function InfoCard({ title, description, value }: InfoCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-1">{description}</p>
        <p className="text-3xl font-semibold text-gray-900 mt-4">{value}</p>
      </div>
    );
  }
  