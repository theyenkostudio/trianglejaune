export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm  p-2">
      <p className="text-4xl font-bold text-white">{value}</p>
      <div className="w-full h-px bg-gray-200"></div>
      <p className="text-white">{title}</p>
    </div>
  );
}
