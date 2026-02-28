import Glass from "./ui/Glass";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="mt-10 md:mt-14">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-white/60">{subtitle}</p>
      </div>
      <Glass className="mt-5 p-5 md:p-6">{children}</Glass>
    </section>
  );
}