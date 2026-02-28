import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "ok" | "err" | ""; msg: string }>({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data: any = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send.");

      setStatus({ type: "ok", msg: "Message sent! ✅" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
      <Input label="Name" name="name" value={form.name} onChange={onChange} required />
      <Input label="Email" name="email" value={form.email} onChange={onChange} required />

      <div className="md:col-span-2">
        <Input label="Subject (optional)" name="subject" value={form.subject} onChange={onChange} />
      </div>

      <div className="md:col-span-2">
        <label className="text-sm text-white/70">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          rows={6}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-white/20"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <button
          disabled={loading}
          className="rounded-xl px-5 py-2.5 border border-white/10 bg-white/10 hover:bg-white/15 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send message"}
        </button>

        {status.msg && (
          <span className={`text-sm ${status.type === "ok" ? "text-white/80" : "text-red-300"}`}>{status.msg}</span>
        )}
      </div>
    </form>
  );
}

function Input(props: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-white/20"
      />
    </div>
  );
}