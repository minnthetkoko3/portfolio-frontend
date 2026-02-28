type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Glass({ children, className = "" }: Props) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-glass",
        "hover:border-white/15 transition",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}