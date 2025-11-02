export default function Investors() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* ABOVE THE FOLD */}

      <header className="max-w-5xl mx-auto px-4 pt-16 pb-20 flex flex-col gap-10 md:flex-row md:items-center">

        {/* Left: copy */}

        <div className="flex-1 space-y-6">

          <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">

            Curbsider • Investor information

          </p>

          <div className="space-y-4">

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">

              Autonomous parcel mailboxes for modern homes.

            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-2xl">

              We turn the letterbox into a secure, AI-driven delivery endpoint —

              architecturally designed, fully autonomous, and built to stop parcel theft.

              We're speaking with investors and strategic partners.

            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <a

              href="mailto:james@curbsider.com.au"

              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"

            >

              Contact Curbsider

              <span aria-hidden="true">→</span>

            </a>

            <p className="text-xs text-white/50">

              Or request the current investor pack.

            </p>

          </div>

          {/* quick credibility line */}

          <p className="text-xs text-white/40">

            Built from real deployments in architectural metalwork and advanced IoT prototypes.

          </p>

        </div>

        {/* Right: quick highlights (stays above the fold on desktop) */}

        <div className="w-full md:w-72 space-y-4">

          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">

            <p className="text-xs uppercase tracking-wide text-white/40 mb-1">

              Category

            </p>

            <p className="text-2xl font-semibold leading-none mb-1">$42B+</p>

            <p className="text-sm text-white/60">

              Global addressable market for secure, delivery-capable endpoints.

            </p>

          </div>

          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">

            <p className="text-sm font-medium mb-1">Architectural first</p>

            <p className="text-xs text-white/60">

              High-end fenceline → mainstream consumer → MDUs / commercial.

            </p>

          </div>

          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">

            <p className="text-sm font-medium mb-1">Edge + vision</p>

            <p className="text-xs text-white/60">

              Shipment discovery at gateway, vision at box, no courier APIs.

            </p>

          </div>

        </div>

      </header>

      {/* BELOW THE FOLD */}

      <main className="max-w-5xl mx-auto px-4 pb-20">

        {/* Problem */}

        <section className="mt-16" id="problem">

          <h2 className="text-xl md:text-2xl font-semibold">The problem</h2>

          <p className="text-white/70 max-w-3xl mt-4">

            Online shopping has exploded. The place parcels arrive… hasn't.

          </p>

          <ul className="grid gap-3 md:grid-cols-3 mt-4">

            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium mb-1">Stolen / missed parcels</h3>

              <p className="text-sm text-white/60">

                Households and insurers are carrying the loss.

              </p>

            </li>

            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium mb-1">No secure drop</h3>

              <p className="text-sm text-white/60">

                Drivers don't have a guaranteed delivery endpoint.

              </p>

            </li>

            <li className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium mb-1">Dumb hardware</h3>

              <p className="text-sm text-white/60">

                Most boxes are passive, ugly, or user-in-the-loop.

              </p>

            </li>

          </ul>

        </section>

        {/* Product */}

        <section className="mt-16" id="product">

          <h2 className="text-xl md:text-2xl font-semibold">Our product</h2>

          <p className="text-white/70 max-w-3xl mt-4">

            A proper place to receive parcels + software that makes it possible.

          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">

            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium">Agentic / edge-first</h3>

              <p className="text-sm text-white/60 mt-2">

                Shipment discovery happens locally at the gateway, so the box already knows

                what's coming — no courier API dependency.

              </p>

            </div>

            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium">Machine vision at the box</h3>

              <p className="text-sm text-white/60 mt-2">

                Delivery person approaches → device checks parcel/label → opens only if it

                matches manifest / policy.

              </p>

            </div>

            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium">Architectural sensibilities</h3>

              <p className="text-sm text-white/60 mt-2">

                Designed to be specified on high-end fencelines; multiple form factors to

                follow.

              </p>

            </div>

            <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/5">

              <h3 className="font-medium">Hardened for the field</h3>

              <p className="text-sm text-white/60 mt-2">

                Master code, temp codes, app control, key override, offline mode.

              </p>

            </div>

          </div>

        </section>

        {/* Market */}

        <section className="mt-16" id="market">

          <h2 className="text-xl md:text-2xl font-semibold">Market</h2>

          <p className="text-white/70 max-w-3xl mt-4">

            The letter era is over. The parcel era is here.

            E-commerce keeps growing, parcel theft is common, and every property already

            has a letterbox — we're just upgrading the form factor.

          </p>

          <div className="grid gap-4 md:grid-cols-3 mt-4">

            <div className="bg-white/5 rounded-lg p-4 ring-1 ring-white/5">

              <p className="text-xs uppercase tracking-wide text-white/40 mb-1">

                Global outlook

              </p>

              <p className="text-2xl font-semibold">$42B+</p>

              <p className="text-sm text-white/60">

                for secure, delivery-capable endpoints

              </p>

            </div>

            <div className="bg-white/5 rounded-lg p-4 ring-1 ring-white/5">

              <p className="text-xs uppercase tracking-wide text-white/40 mb-1">

                Adoption path

              </p>

              <p className="text-sm text-white/60">

                Architectural → consumer SKUs → MDUs / commercial

              </p>

            </div>

            <div className="bg-white/5 rounded-lg p-4 ring-1 ring-white/5">

              <p className="text-xs uppercase tracking-wide text-white/40 mb-1">

                Demand drivers

              </p>

              <p className="text-sm text-white/60">

                E-commerce growth, theft, insurers, smart-home upgrades

              </p>

            </div>

          </div>

        </section>

        {/* Why us */}

        <section className="mt-16" id="why">

          <h2 className="text-xl md:text-2xl font-semibold">Why Curbsider</h2>

          <p className="text-white/70 max-w-3xl mt-4">

            We've already built the hard parts — sheet-metal form factors, the electronic

            enclosure, and a working iOS onboarding / notification app. We also have deep

            experience delivering architectural work for top Melbourne firms, so we know what

            actually gets specified.

          </p>

          <ul className="text-sm text-white/60 mt-4">

            <li>• Real prototypes, not slideware.</li>

            <li>• Founder with proven architectural/metalwork delivery.</li>

            <li>• Clear roadmap from premium to volume SKUs.</li>

          </ul>

        </section>

        {/* CTA */}

        <section className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 mt-16" id="contact">

          <h2 className="text-2xl font-semibold">Let's talk investment</h2>

          <p className="text-white/70 max-w-2xl mt-4">

            If you invest in defensible IoT, computer vision at the edge, or built-environment

            hardware, we should talk.

          </p>

          <div className="flex flex-wrap gap-3 mt-4">

            <a

              href="mailto:james@curbsider.com.au"

              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"

            >

              Request investor info

              <span aria-hidden="true">→</span>

            </a>

            <p className="text-sm text-white/50">

              james@curbsider.com.au

            </p>

          </div>

        </section>

      </main>

    </div>

  );

}
