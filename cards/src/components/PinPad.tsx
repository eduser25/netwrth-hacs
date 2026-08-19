import { useState } from "react";

// 4-digit PIN pad; auto-submits when the fourth digit is entered and clears
// itself if the code is rejected.
export default function PinPad({
  onSubmit,
  error,
  label,
  footer,
}: {
  onSubmit: (code: string) => Promise<boolean>;
  error: string | null;
  label?: string;
  footer?: React.ReactNode;
}) {
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  const press = async (d: string) => {
    if (busy || code.length >= 4) return;
    const next = code + d;
    setCode(next);
    if (next.length === 4) {
      setBusy(true);
      const ok = await onSubmit(next);
      setBusy(false);
      if (!ok) setCode("");
    }
  };

  return (
    <div className="pinpad">
      {label && <div className="pin-label">{label}</div>}
      <div className="pin-dots">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`pin-dot ${i < code.length ? "filled" : ""}`} />
        ))}
      </div>
      <div className="pin-grid">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
          <button key={d} onClick={() => press(d)} disabled={busy}>
            {d}
          </button>
        ))}
        <button onClick={() => setCode("")} disabled={busy}>
          C
        </button>
        <button onClick={() => press("0")} disabled={busy}>
          0
        </button>
        <button onClick={() => setCode(code.slice(0, -1))} disabled={busy}>
          ⌫
        </button>
      </div>
      {error && <div className="pw-err">{error}</div>}
      {footer}
    </div>
  );
}
