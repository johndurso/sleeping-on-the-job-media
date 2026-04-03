export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-20">
      <p className="text-chrome-silver/40">{message}</p>
    </div>
  );
}