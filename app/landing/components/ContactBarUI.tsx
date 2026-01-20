import React from "react";

type ContactItem = {
  label: string;
  href?: string;
};

export default function ContactBarUI() {
  const contacts: ContactItem[] = [
    { label: "@FB/DAUNHOTPHUTUNGPHUCLONG", href: "#" },
    { label: "@HOTLINE-ZALO/093 944 98 61", href: "tel:0939449861" },
    {
      label: "GMAIL: PHUCLONGLINK@GMAIL.COM",
      href: "mailto:phuclonglink@gmail.com",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-sm  bg-white px-6 py-8">
          {/* Top CTA pill */}
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-blue-900 px-10 py-4 text-center text-lg font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
              aria-label="Liên hệ đặt hàng ngay"
            >
              LIÊN HỆ ĐẶT HÀNG NGAY
            </a>
          </div>

          {/* Contact pills */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="mx-auto inline-flex w-full max-w-md items-center justify-center rounded-full bg-black px-3 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {c.label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-black">
              WWW.PHUTUNGDAUNHOT.COM
            </div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-black">
              © 2026 PLUSEX PHUC LONG X MACAN INC.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
