export default function Container({
  children,
  className = "",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const maxWidth = size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-6xl" : "max-w-5xl";
  return <div className={`mx-auto w-full ${maxWidth} px-5 sm:px-6 ${className}`}>{children}</div>;
}
