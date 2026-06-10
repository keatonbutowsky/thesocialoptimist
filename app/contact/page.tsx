import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-cloud-cotton">
        <div className="tso-container py-14 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16 md:py-24">
          <div>
            <p className="tso-eyebrow">say hi</p>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-wider2 sm:text-5xl md:text-6xl">
              Let&apos;s talk strategy.
            </h1>
            <p className="mt-6 max-w-prose2 text-base text-dark-brown/80 sm:text-lg">
              Fill out the form and we&apos;ll get back within two business days
              with availability for a 30-minute discovery call. We work best
              with growth-minded brands ready to invest in their social — if
              that&apos;s you, you&apos;ll feel it on the call.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <p className="tso-eyebrow">or reach us directly</p>
              <p><a href="tel:+19519709396" className="tso-link">(951) 970-9396</a></p>
              <p><a href="mailto:megan@thesocialoptimist.com" className="tso-link">megan@thesocialoptimist.com</a></p>
              <p>Dallas, TX</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
