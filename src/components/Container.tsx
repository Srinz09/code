export default function Container({
  children,
  className = "",
  maxW = 1040,
}: {
  children: React.ReactNode;
  className?: string;
  maxW?: number;
}) {
  return (
    <div className={`mx-auto w-full px-6 ${className}`} style={{ maxWidth: maxW }}>
      {children}
    </div>
  );
}
