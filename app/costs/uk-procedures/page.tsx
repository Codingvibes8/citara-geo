import type { Metadata } from "next";
import { config } from "@/lib/config";
import ContentPage from "@/components/ContentPage";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cosmetic Surgery Costs UK 2026 — Breast Augmentation, Facelift, Tummy Tuck & More",
  description:
    "Complete 2026 guide to cosmetic surgery costs in the UK. Compare prices for breast augmentation, facelifts, tummy tucks, liposuction, body contouring and more — with what drives price variation.",
  alternates: {
    canonical: "/costs/uk-procedures",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "UK Procedure Costs", href: "/costs/uk-procedures" },
];

const jsonLd = {
  name: "Cosmetic Surgery Costs UK 2026",
  description:
    "Complete 2026 guide to cosmetic surgery costs in the UK. Compare prices for breast augmentation, facelifts, tummy tucks, liposuction, body contouring and more.",
  url: `${config.siteUrl}/costs/uk-procedures`,
  lastReviewed: "2026-10-11",
  about: {
    "@type": "MedicalProcedure",
    name: "Cosmetic Surgery Cost Guide",
  },
};

export default function UkProcedureCostsPage() {
  return (
    <>
      <JsonLd type="WebSite" data={jsonLd} />
      <ContentPage
        title="Cosmetic Surgery Costs in the UK — 2026 Guide"
        description="Complete pricing data for the most common cosmetic procedures in the UK, including what drives price variation and how to compare quotes."
        jsonLd={jsonLd}
        jsonLdType="WebSite"
        lastUpdated="October 2026"
        breadcrumbs={breadcrumbs}
      >
        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Why procedure cost pages matter for AI search</h2>
          <p className="mt-4">
            When patients ask ChatGPT, Perplexity or Google AI Overviews &quot;how much does a boob job cost in the UK?&quot; or
            &quot;what is the price of a tummy tuck?&quot;, the model synthesises an answer from the pages it has crawled.
            Practices that publish clear, structured cost data — with specific price ranges, breakdowns of what is included,
            and surgeon credentials — are far more likely to be cited as the authoritative source.
          </p>
          <p className="mt-4">
            This page is an example of answer-first content: direct numbers up top, structured for both human readers and AI
            parsers, with the kind of specificity that makes a page citable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Average cosmetic surgery costs — UK 2026</h2>
          <p className="mt-4">
            Prices below reflect typical ranges quoted by UK clinics in 2026. Final costs vary by surgeon experience,
            geographic location, anaesthesia type, hospital fees, and the complexity of the procedure. Always request a
            written quote after consultation.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Breast augmentation (augmentation mammoplasty)</h3>
          <p className="mt-3">
            <strong className="text-zinc-200">Average cost: £4,500 — £7,500</strong>
          </p>
          <p className="mt-3">
            Price includes surgeon fee, anaesthesia, hospital or facility fees, implants (silicone or saline), and one
            post-operative follow-up. Key variables:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Implant type:</strong> Silicone gel implants typically cost more than saline (£300–£800 difference)</li>
            <li><strong className="text-zinc-200">Surgeon seniority:</strong> Consultants with 15+ years&apos; experience and GMC specialist registration often charge at the upper end</li>
            <li><strong className="text-zinc-200">Location:</strong> London and the South East typically 10–25% above the national average</li>
            <li><strong className="text-zinc-200">Anaesthesia:</strong> General anaesthesia adds £800–£1,500; twilight sedation may be less</li>
          </ul>
          <p className="mt-4">
            The British Association of Aesthetic Plastic Surgeons (BAAPS) reports that breast augmentation remains one of the
            most performed cosmetic procedures in the UK, with over 5,000 procedures annually.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Facelift (rhytidectomy)</h3>
          <p className="mt-3">
            <strong className="text-zinc-200">Average cost: £6,000 — £12,000</strong>
          </p>
          <p className="mt-3">
            A full facelift addresses sagging skin, deep folds and muscle laxity across the mid and lower face. Mini or
            &quot;weekend&quot; facelifts targeting a smaller area typically fall at the lower end of this range.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Technique:</strong> SMAS facelift (deeper tissue repositioning) vs. skin-only lift — SMAS typically £8,000–£12,000</li>
            <li><strong className="text-zinc-200">Combined procedures:</strong> Adding a neck lift, brow lift or eyelid surgery increases cost by £2,000–£5,000</li>
            <li><strong className="text-zinc-200">Anaesthesia:</strong> Usually general; some clinics offer local with sedation at lower cost</li>
            <li><strong className="text-zinc-200">Hospital stay:</strong> Most facelifts are day surgery, but an overnight stay adds £500–£1,200</li>
          </ul>
          <p className="mt-4">
            BAAPS notes that demand for facelifts has increased significantly, driven in part by the &quot;Zoom effect&quot; —
            people noticing facial ageing during video calls and seeking longer-lasting solutions than dermal fillers or
            thread lifts.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Tummy tuck (abdominoplasty)</h3>
          <p className="mt-3">
            <strong className="text-zinc-200">Average cost: £5,500 — £9,000</strong>
          </p>
          <p className="mt-3">
            Abdominoplasty removes excess skin and fat from the abdomen and tightens the underlying muscles. It is commonly
            sought after pregnancy or significant weight loss, where skin laxity cannot be resolved through diet and
            exercise alone.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Full vs. mini:</strong> A full abdominoplasty (£6,500–£9,000) addresses the entire abdominal wall; a mini (£4,000–£6,000) targets only the lower abdomen below the navel</li>
            <li><strong className="text-zinc-200">Muscle repair:</strong> Diastasis recti repair (tightening separated abdominal muscles) is included in a full tummy tuck and is the primary reason it costs more than liposuction</li>
            <li><strong className="text-zinc-200">Combined with liposuction:</strong> Adding liposuction to the flanks or back typically adds £1,500–£3,000</li>
            <li><strong className="text-zinc-200">Post-surgery garments and follow-ups:</strong> Some clinics include these; others charge separately</li>
          </ul>
          <p className="mt-4">
            According to the International Society of Aesthetic Plastic Surgery (ISAPS), abdominoplasty is among the top five
            surgical cosmetic procedures globally, with a growing patient base of post-bariatric and post-pregnancy patients.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Liposuction (liposculpture / lipolysis)</h3>
          <p className="mt-3">
            <strong className="text-zinc-200">Average cost: £3,000 — £7,000</strong>
          </p>
          <p className="mt-3">
            Liposuction removes localised fat deposits resistant to diet and exercise. It is not a weight-loss treatment but
            a body-contouring procedure. Costs depend on the number of areas treated and the technique used.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Technique:</strong> Traditional tumescent liposuction is generally least expensive; VASER (ultrasound-assisted) and laser-assisted lipolysis typically cost 20–40% more</li>
            <li><strong className="text-zinc-200">Areas treated:</strong> One area (e.g., abdomen) starts around £3,000; multiple areas (abdomen, flanks, thighs) can reach £6,000–£7,000</li>
            <li><strong className="text-zinc-200">Anaesthesia:</strong> Local anaesthesia for small areas vs. general for multiple areas</li>
          </ul>
          <p className="mt-4">
            The BAAPS advises that liposuction patients should be within 30% of their ideal body weight and have good skin
            elasticity for optimal results.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Body contouring after weight loss</h3>
          <p className="mt-3">
            <strong className="text-zinc-200">Average cost: £5,000 — £15,000+</strong>
          </p>
          <p className="mt-3">
            Body contouring procedures — including body lift, thigh lift, arm lift (brachioplasty) and breast lift
            (mastopexy) — are often combined in staged procedures after significant weight loss, whether through lifestyle
            change or bariatric surgery.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Lower body lift:</strong> Addresses abdomen, buttocks and thighs in one procedure — £8,000–£15,000</li>
            <li><strong className="text-zinc-200">Upper body lift:</strong> Targets back, flanks and breasts — £6,000–£12,000</li>
            <li><strong className="text-zinc-200">Thigh lift:</strong> £4,000–£7,000</li>
            <li><strong className="text-zinc-200">Arm lift:</strong> £3,500–£5,500</li>
            <li><strong className="text-zinc-200">Breast lift (mastopexy):</strong> £5,000–£8,000</li>
          </ul>
          <p className="mt-4">
            ISAPS data shows that post-bariatric body contouring is the fastest-growing segment of cosmetic surgery
            globally, with many patients requiring multiple staged procedures over 12–24 months.
          </p>
        </section>

        <section>
          <h3 className="font-display text-xl font-semibold text-white">Other common procedures</h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-medium text-zinc-200">Rhinoplasty (nose reshaping)</p>
              <p>£5,000 — £9,000. Functional (septorhinoplasty) may be partially covered by NHS if breathing is impaired.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-200">Blepharoplasty (eyelid surgery)</p>
              <p>£2,500 — £5,000. Upper eyelids alone are less expensive; adding lower eyelids or brow lift increases cost.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-200">Otoplasty (ear correction)</p>
              <p>£2,500 — £4,500. Often performed on children; may be available on the NHS in some CCG areas.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-200">Gynecomastia surgery (male breast reduction)</p>
              <p>£3,500 — £5,500. Excess glandular tissue and/or fat removal from the chest.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-200">Hair transplant (FUE)</p>
              <p>£3,000 — £10,000+. Highly variable based on graft count and clinic. FUE (follicular unit extraction) is the
              most common technique in the UK.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">What drives price variation in UK cosmetic surgery</h2>
          <p className="mt-4">
            Understanding why prices differ helps patients evaluate whether a quote represents good value or carries
            unnecessary risk. Key factors:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Surgeon credentials:</strong> GMC specialist registration in plastic surgery, BAAPS or BAPRAS membership, and years of post-training experience all correlate with higher fees — and lower complication rates.</li>
            <li><strong className="text-zinc-200">Facility type:</strong> CQC-registered hospitals with full resuscitation facilities cost more than small clinic theatres, but offer greater safety margins.</li>
            <li><strong className="text-zinc-200">Geographic location:</strong> London clinics typically charge 10–25% more than clinics in Manchester, Birmingham or Leeds, reflecting higher overheads.</li>
            <li><strong className="text-zinc-200">Complexity and revision surgery:</strong> Revision procedures (correcting a previous surgery) are significantly more complex and expensive than primary procedures.</li>
            <li><strong className="text-zinc-200">Aftercare package:</strong> Clinics that include comprehensive follow-up (24-hour helpline, multiple post-op visits, revision policy) may charge more upfront but provide better value.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">How to choose a UK cosmetic surgeon</h2>
          <p className="mt-4">
            The most important factor in your outcome is not the price — it is the surgeon. The following checks are
            recommended by BAAPS and the Royal College of Surgeons:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">GMC specialist register:</strong> Verify the surgeon appears on the GMC Specialist Register for Plastic Surgery at gmc-uk.org</li>
            <li><strong className="text-zinc-200">BAAPS or BAPRAS membership:</strong> Membership of the British Association of Aesthetic Plastic Surgeons or British Association of Plastic, Reconstructive and Aesthetic Surgeons indicates adherence to professional standards</li>
            <li><strong className="text-zinc-200">CQC registration:</strong> Check that the facility is registered with the Care Quality Commission and has a current rating</li>
            <li><strong className="text-zinc-200">Before-and-after portfolio:</strong> Review a substantial portfolio of the surgeon&apos;s own work for your specific procedure</li>
            <li><strong className="text-zinc-200">Written quote:</strong> Request a detailed written quote that includes surgeon fee, anaesthesia, facility, implants, aftercare and any revision policy</li>
            <li><strong className="text-zinc-200">Cooling-off period:</strong> Reputable clinics will encourage you to take time before committing — be wary of pressure tactics</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Financing options in the UK</h2>
          <p className="mt-4">
            Most UK clinics offer financing to spread the cost of treatment. Common options include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li><strong className="text-zinc-200">Clinic payment plans:</strong> Interest-free or low-interest plans over 6–36 months, often arranged through third-party finance providers</li>
            <li><strong className="text-zinc-200">Medical loans:</strong> Specific loans for medical procedures, typically with APRs of 9.9–19.9%</li>
            <li><strong className="text-zinc-200">Credit cards:</strong> Some patients use 0% purchase credit cards, though this requires discipline to clear before the promotional period ends</li>
            <li><strong className="text-zinc-200">Savings and ISAs:</strong> For non-urgent procedures, using cash ISAs or premium bonds avoids interest charges entirely</li>
          </ul>
          <p className="mt-4">
            The Financial Conduct Authority (FCA) regulates medical finance providers — always check that the lender is FCA
            authorised and read the full terms before signing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">FAQs</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium text-zinc-200">Is cosmetic surgery available on the NHS?</h3>
              <p className="mt-2">
                Cosmetic surgery is rarely available on the NHS. It may be funded in specific circumstances — for example,
                breast reduction when causing significant physical discomfort, or rhinoplasty for functional breathing
                problems — but each Clinical Commissioning Group applies its own criteria. Most aesthetic procedures are
                privately funded.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">What is the most popular cosmetic procedure in the UK?</h3>
              <p className="mt-2">
                According to BAAPS, breast augmentation, liposuction and blepharoplasty consistently rank among the most
                performed surgical procedures. Non-surgical treatments — particularly anti-wrinkle injections and dermal
                fillers — significantly outnumber surgical procedures overall.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">How long is recovery after cosmetic surgery?</h3>
              <p className="mt-2">
                Recovery varies by procedure. Liposuction patients often return to desk work within 1–2 weeks; breast
                augmentation typically requires 2 weeks off work and 6 weeks before strenuous exercise; facelift and
                abdominoplasty patients may need 2–4 weeks off work and 6–8 weeks before full physical activity. Your
                surgeon will provide a personalised recovery timeline.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-zinc-200">Are there age limits for cosmetic surgery?</h3>
              <p className="mt-2">
                There is no statutory minimum age for cosmetic surgery in the UK, but most reputable surgeons will not
                operate on patients under 18 for purely aesthetic procedures. The Royal College of Surgeons recommends
                that patients have realistic expectations and psychological maturity regardless of age.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-white">Sources and references</h2>
          <p className="mt-4">
            This guide is compiled from publicly available data and professional body publications:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>British Association of Aesthetic Plastic Surgeons (BAAPS) — baaps.org.uk</li>
            <li>British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS) — bapras.org.uk</li>
            <li>International Society of Aesthetic Plastic Surgery (ISAPS) — isaps.org</li>
            <li>Care Quality Commission (CQC) — cqc.org.uk</li>
            <li>General Medical Council (GMC) Specialist Register — gmc-uk.org</li>
            <li>Royal College of Surgeons of England — rcseng.ac.uk</li>
          </ul>
          <p className="mt-4">
            Prices are indicative and based on 2026 market data. Always obtain a personalised quote from a GMC-registered
            surgeon before making any decisions.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
