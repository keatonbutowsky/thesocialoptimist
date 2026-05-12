export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-24 grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="tso-eyebrow">say hi</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-wider2">
              Let&apos;s talk strategy.
            </h1>
            <p className="mt-6 max-w-prose2 text-lg text-dark-brown/80">
              Fill out the form and we&apos;ll get back within two business days
              with availability for a 30-minute discovery call. We work best
              with profitable, growth-minded brands ready to invest in their
              social — if that&apos;s you, you&apos;ll feel it on the call.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <p className="tso-eyebrow">or reach us directly</p>
              <p><a href="mailto:hello@thesocialoptimist.com" className="tso-link">hello@thesocialoptimist.com</a></p>
              <p>Dallas, TX</p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-dark-brown/10 bg-cloud-cotton p-8 shadow-stamp"
            action="mailto:hello@thesocialoptimist.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5">
              <label className="flex flex-col gap-2 text-sm">
                <span className="tso-eyebrow">Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-full border border-dark-brown/15 bg-cloud-cotton px-4 py-3 focus:border-dark-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="tso-eyebrow">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-full border border-dark-brown/15 bg-cloud-cotton px-4 py-3 focus:border-dark-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="tso-eyebrow">Brand / company</span>
                <input
                  type="text"
                  name="brand"
                  className="rounded-full border border-dark-brown/15 bg-cloud-cotton px-4 py-3 focus:border-dark-brown focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="tso-eyebrow">Budget range</span>
                <select
                  name="budget"
                  className="rounded-full border border-dark-brown/15 bg-cloud-cotton px-4 py-3 focus:border-dark-brown focus:outline-none"
                >
                  <option>$2,000 / mo (Starter)</option>
                  <option>$3,500 / mo (Savvy)</option>
                  <option>$5,000 / mo (Optimist)</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="tso-eyebrow">What are you trying to grow?</span>
                <textarea
                  name="message"
                  rows={4}
                  className="rounded-3xl border border-dark-brown/15 bg-cloud-cotton px-4 py-3 focus:border-dark-brown focus:outline-none"
                />
              </label>
              <button type="submit" className="tso-btn-primary justify-center">
                Send it
              </button>
              <p className="text-xs text-dark-brown/60">
                We respond within two business days. Pricing is set — we&apos;re
                happy to talk fit before scope.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
