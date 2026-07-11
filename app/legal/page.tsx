'use client'

import Link from 'next/link'
import SharedLayout, { T, FONTS, Reveal } from '../components/SharedLayout'

/**
 * /legal page. Three sections with anchor links.
 *
 *   . Terms of Service     (#terms)   — client engagements
 *   . Privacy Policy       (#privacy) — website + data handling
 *   . Data Processing Agmt (#dpa)     — DRAFT, pending legal review
 *
 * All content written in plain English by Hilary Azimoh. Suitable for
 * a solo Dutch practice launch. Should be reviewed by a Dutch privacy
 * lawyer before HC Core Tech reaches its first large enterprise client.
 */

const LAST_UPDATED = '5 July 2026'

export default function LegalPage() {
  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{ padding: '80px 32px 40px', maxWidth: '900px', margin: '0 auto' }}>
        <Reveal>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.24em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: T.muted, textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', color: T.hairline }}>/</span>
            <span>Legal</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(40px, 5vw, 68px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: T.platinum, marginBottom: '24px',
          }}>
            Legal notices,
            <br />
            <span style={{ fontStyle: 'italic', color: T.gold, fontWeight: 500 }}>
              in plain English.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '16px', lineHeight: 1.7,
            color: T.softText, marginBottom: '32px', maxWidth: '640px',
          }}>
            Three documents that govern how HC Core Tech works with clients and how
            we handle data. Written by me directly, not copied from a template. Last
            updated {LAST_UPDATED}.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
          }}>
            <TocLink href="#terms"   label="Terms of Service" />
            <TocLink href="#privacy" label="Privacy Policy" />
            <TocLink href="#dpa"     label="Data Processing Agmt" />
          </div>
        </Reveal>
      </section>

      {/* Terms of Service */}
      <LegalSection id="terms" title="Terms of Service">
        <Paragraph lead>
          These Terms of Service govern engagements between HC Core Tech
          (an independent Dutch practice by Hilary Azimoh) and
          clients who commission work through this website, a written scoping
          document, or a signed proposal.
        </Paragraph>

        <SubHead>1. Engagements are contract-based</SubHead>
        <Paragraph>
          Every engagement begins with a written scoping document that
          defines; the work in scope, the work out of scope, the fixed price
          or hourly rate, the timeline, the milestones, the deliverables, and
          the payment schedule. Nothing is agreed by chat or verbal
          understanding. If it is not in the written scope, it is not in the
          engagement.
        </Paragraph>

        <SubHead>2. Payment</SubHead>
        <Paragraph>
          Payment terms are stated in the scoping document. Standard terms are
          50 percent upfront (before work begins) and 50 percent on completion,
          unless otherwise agreed. Invoices are payable within 14 days of
          issue. Late payment may incur statutory interest as permitted under
          Dutch law (Article 6:119a BW).
        </Paragraph>
        <Paragraph>
          For engagements longer than six weeks, milestone-based invoicing is
          used, with each milestone invoiced on delivery.
        </Paragraph>

        <SubHead>3. Intellectual property</SubHead>
        <Paragraph>
          All custom work (code, designs, written content, brand assets, documentation)
          produced during an engagement transfers to the client on receipt of
          final payment. HC Core Tech retains no rights to specifically
          commissioned work once paid for.
        </Paragraph>
        <Paragraph>
          HC Core Tech may reuse generic techniques, patterns, and skills
          developed during the engagement in other client work. This does not
          include client-specific code, data, brand assets, or confidential
          information.
        </Paragraph>
        <Paragraph>
          Third-party components (open source libraries, paid software,
          fonts, stock imagery) remain licensed under their respective
          licences. HC Core Tech will disclose all such components in the
          handover documentation.
        </Paragraph>

        <SubHead>4. Confidentiality</SubHead>
        <Paragraph>
          Any information marked as confidential, or reasonably understood to
          be confidential, will be treated as such indefinitely. HC Core Tech
          will not disclose, publish, or reuse confidential client information
          outside of the engagement. A mutual non-disclosure agreement is
          available on request.
        </Paragraph>

        <SubHead>5. Warranties and limitation of liability</SubHead>
        <Paragraph>
          HC Core Tech warrants that work will be performed with professional
          competence and reasonable care. HC Core Tech makes no other
          warranties, express or implied, including warranties of
          merchantability or fitness for a particular purpose beyond what is
          specified in the scoping document.
        </Paragraph>
        <Paragraph>
          Total liability under any engagement is limited to the fees actually
          paid by the client for that engagement. HC Core Tech is not liable
          for indirect, consequential, or lost-profit damages. This limitation
          does not apply to damages caused by gross negligence or wilful
          misconduct.
        </Paragraph>

        <SubHead>6. Termination</SubHead>
        <Paragraph>
          Either party may terminate an engagement with 14 days written
          notice. On termination, the client pays for all work completed and
          in progress up to the termination date. Client-owned assets and
          documentation delivered before termination remain the client&apos;s
          property.
        </Paragraph>

        <SubHead>7. Handover and post-engagement</SubHead>
        <Paragraph>
          On completion of an engagement, HC Core Tech provides a written
          handover document listing all deliverables, credentials, code
          repositories, and any third-party services used. HC Core Tech
          provides one round of post-launch clarifications at no charge
          within 30 days of completion. Ongoing support is available under a
          separately quoted retainer.
        </Paragraph>

        <SubHead>8. Governing law and jurisdiction</SubHead>
        <Paragraph>
          These Terms are governed by Dutch law. Any dispute arising from an
          engagement will first be attempted to be resolved through good-faith
          negotiation. Failing that, disputes fall under the exclusive
          jurisdiction of the competent courts of the Netherlands.
        </Paragraph>

        <SubHead>9. Changes to these Terms</SubHead>
        <Paragraph>
          These terms may be updated from time to time and will be posted on
          this page with a last updated date. Changes do not apply
          retrospectively to engagements already in progress under an executed
          scoping contract.
        </Paragraph>
      </LegalSection>

      {/* Privacy Policy */}
      <LegalSection id="privacy" title="Privacy Policy">
        <Paragraph lead>
          HC Core Tech takes data protection seriously. This policy explains
          what personal data we collect, why, how we use it, how long we keep
          it, and your rights under the General Data Protection Regulation
          (GDPR).
        </Paragraph>

        <SubHead>1. Who is responsible</SubHead>
        <Paragraph>
          HC Core Tech, operated by Hilary Azimoh in the Netherlands,
          is the data controller for personal data collected through this
          website and during client engagements. For any privacy question,
          email <ExternalLink href="mailto:hc@hccoretech.com">hc@hccoretech.com</ExternalLink>.
        </Paragraph>

        <SubHead>2. What we collect on the website</SubHead>
        <Paragraph>
          When you submit the quote form on this website, we collect the
          information you provide: name, email address, company (optional),
          services requested, budget, timeline, and project brief. That data
          is used only to respond to your inquiry.
        </Paragraph>
        <Paragraph>
          When you visit this website, our hosting provider (Vercel) collects
          minimal technical logs (IP address, browser type, referring page).
          These are used to prevent abuse and are retained for a maximum of
          30 days.
        </Paragraph>
        <Paragraph>
          We use Vercel Analytics to understand aggregate website traffic (page
          views, top pages, referring sources, country-level location). Vercel
          Analytics is <strong>cookieless</strong> and does not track
          individual visitors across sessions. No personal data is collected
          through analytics.
        </Paragraph>
        <Paragraph>
          <strong>We do not use Google Analytics, Facebook Pixel, LinkedIn
          Insight Tag, or any other tracking service that would send visitor
          data outside the EU.</strong> We do not use tracking cookies. You do
          not need to give cookie consent because we are not doing anything
          that requires it.
        </Paragraph>

        <SubHead>3. What we collect during engagements</SubHead>
        <Paragraph>
          During a client engagement, we may process personal data provided
          by the client. This may include: contact information for the
          client&apos;s team, credentials for shared services, business
          information necessary to deliver the work, and any data the client
          shares with us for processing (which is governed by a separate Data
          Processing Agreement, see below).
        </Paragraph>

        <SubHead>4. Legal basis</SubHead>
        <Paragraph>
          Under GDPR Article 6, we process personal data on the following legal bases:
        </Paragraph>
        <BulletList items={[
          'Contract performance (Article 6(1)(b)) for all engagement-related processing',
          'Legitimate interest (Article 6(1)(f)) for quote form submissions, technical logs, and cookieless analytics',
          'Legal obligation (Article 6(1)(c)) for retention required under Dutch tax law',
        ]} />

        <SubHead>5. Who we share data with</SubHead>
        <Paragraph>
          We use the following processors to operate this website and respond
          to inquiries:
        </Paragraph>
        <BulletList items={[
          'Vercel (hosting and analytics): EU region where configurable',
          'Resend (email delivery for quote form responses): EU region (Ireland)',
          'Zoho Mail (for our email inbox): EU region',
        ]} />
        <Paragraph>
          We do not sell, rent, or share personal data with third parties for
          marketing purposes.
        </Paragraph>

        <SubHead>6. How long we keep data</SubHead>
        <BulletList items={[
          'Quote form submissions: 24 months, then deleted unless we have an active engagement with you',
          'Engagement records (contracts, invoices, correspondence): 7 years, as required by Dutch tax law (Article 52 AWR)',
          'Website server logs: 30 days maximum',
          'Analytics data: retained by Vercel per their policy, no personal identifiers',
        ]} />

        <SubHead>7. Your rights</SubHead>
        <Paragraph>Under GDPR, you have the right to:</Paragraph>
        <BulletList items={[
          'Access your personal data we hold',
          'Correct inaccurate data',
          'Request deletion (subject to our legal retention obligations)',
          'Restrict processing',
          'Data portability',
          'Object to processing based on legitimate interest',
          'Withdraw consent where consent was the legal basis',
        ]} />
        <Paragraph>
          To exercise any of these rights, email
          {' '}<ExternalLink href="mailto:hc@hccoretech.com">hc@hccoretech.com</ExternalLink>.
          {' '}We respond within 30 days.
        </Paragraph>
        <Paragraph>
          If you believe your data has been mishandled, you have the right to
          lodge a complaint with the Dutch Data Protection Authority
          (Autoriteit Persoonsgegevens):
          {' '}<ExternalLink href="https://autoriteitpersoonsgegevens.nl">autoriteitpersoonsgegevens.nl</ExternalLink>.
        </Paragraph>

        <SubHead>8. International transfers</SubHead>
        <Paragraph>
          All processors listed above are configured to process data within
          the European Economic Area where possible. Where a processor
          operates from a third country, we rely on Standard Contractual
          Clauses (SCCs) approved by the European Commission.
        </Paragraph>

        <SubHead>9. Changes to this policy</SubHead>
        <Paragraph>
          We may update this policy. Material changes will be communicated to
          active clients by email. The updated policy will be posted on this
          page with a new &quot;Last updated&quot; date.
        </Paragraph>
      </LegalSection>

      {/* Data Processing Agreement */}
      <LegalSection id="dpa" title="Data Processing Agreement" draft>
        <div style={{
          padding: '18px 22px', marginBottom: '28px',
          background: `${T.gold}0F`,
          border: `1px dashed ${T.goldDeep}66`,
          borderRadius: '6px',
        }}>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '10px',
            letterSpacing: '0.22em', color: T.gold,
            textTransform: 'uppercase', marginBottom: '10px',
          }}>Draft . pending legal review</div>
          <div style={{
            fontFamily: FONTS.ui, fontSize: '14px', lineHeight: 1.7,
            color: T.softText,
          }}>
            This DPA is a working draft. It is legally sound as a starting
            point for a solo Dutch practice, but before it governs any
            engagement processing sensitive personal data on behalf of a
            client, it should be reviewed and approved by a Dutch privacy
            lawyer. Contact
            {' '}<ExternalLink href="mailto:hc@hccoretech.com">hc@hccoretech.com</ExternalLink>
            {' '}to request a bespoke DPA for your engagement.
          </div>
        </div>

        <Paragraph lead>
          This Data Processing Agreement (DPA) applies when HC Core Tech
          processes personal data on behalf of a client (&quot;Controller&quot;)
          during an engagement. It complements and forms part of the Terms of
          Service and the specific scoping document for the engagement.
        </Paragraph>

        <SubHead>1. Subject matter and duration</SubHead>
        <Paragraph>
          HC Core Tech acts as a Processor for personal data provided by the
          Controller for the purpose of delivering the services described in
          the engagement scoping document. Processing continues for the
          duration of the engagement plus 30 days for handover, unless
          otherwise agreed in writing.
        </Paragraph>

        <SubHead>2. Nature and purpose of processing</SubHead>
        <Paragraph>
          Processing includes: storage, access, transformation, deletion, and
          any other operations necessary to deliver the agreed services.
          Processing purposes are limited to those necessary to fulfil the
          engagement.
        </Paragraph>

        <SubHead>3. Categories of data subjects and personal data</SubHead>
        <Paragraph>
          The specific categories are defined per engagement in the scoping
          document. Common categories include: the Controller&apos;s
          employees, the Controller&apos;s clients or customers, and any
          other individuals whose data the Controller shares with us for
          processing.
        </Paragraph>

        <SubHead>4. Controller obligations</SubHead>
        <Paragraph>
          The Controller warrants that: personal data shared with HC Core
          Tech has been collected lawfully, with the necessary legal basis
          under GDPR Article 6, and that the Controller has provided all
          required notices to data subjects. The Controller is responsible
          for responding to data subject requests, unless separately agreed.
        </Paragraph>

        <SubHead>5. Processor obligations</SubHead>
        <Paragraph>HC Core Tech will:</Paragraph>
        <BulletList items={[
          'Process personal data only on documented instructions from the Controller',
          'Ensure persons authorised to process the data have committed themselves to confidentiality',
          'Implement appropriate technical and organisational measures to secure the data (see Section 7)',
          'Assist the Controller in responding to data subject requests',
          'Notify the Controller without undue delay upon becoming aware of a personal data breach',
          'Return or delete all personal data at the end of the engagement, unless retention is required by law',
        ]} />

        <SubHead>6. Sub-processors</SubHead>
        <Paragraph>
          HC Core Tech may engage sub-processors to assist with the
          engagement. Current standing sub-processors are:
        </Paragraph>
        <BulletList items={[
          'Vercel Inc. (hosting for HC Core Tech infrastructure)',
          'Resend (transactional email)',
          'Hetzner Online GmbH (hosting for CoreDesk platform, if used)',
          'Supabase Inc. (database for CoreDesk platform, if used)',
          'Anthropic PBC and/or OpenAI (LLM providers, if the engagement uses AI)',
        ]} />
        <Paragraph>
          Additional or replacement sub-processors will be communicated to
          the Controller in writing with reasonable notice. The Controller
          may object to specific sub-processors, in which case the parties
          will discuss alternatives in good faith.
        </Paragraph>

        <SubHead>7. Security measures</SubHead>
        <Paragraph>
          HC Core Tech implements the following technical and organisational
          measures:
        </Paragraph>
        <BulletList items={[
          'Encryption of data in transit (TLS 1.2 or higher) and at rest where supported by the underlying platform',
          'Access control with unique credentials, multi-factor authentication where available',
          'Regular software updates and vulnerability monitoring',
          'Documented incident response procedure',
          'Physical security through use of certified data centre providers (Vercel, Hetzner)',
          'Written retention and deletion policies',
        ]} />

        <SubHead>8. Personal data breaches</SubHead>
        <Paragraph>
          HC Core Tech will notify the Controller in writing without undue
          delay (and in any event within 72 hours) upon becoming aware of a
          personal data breach involving Controller data. Notification will
          include the nature of the breach, categories and approximate number
          of data subjects affected, likely consequences, and measures taken
          or proposed.
        </Paragraph>

        <SubHead>9. International transfers</SubHead>
        <Paragraph>
          Where personal data is transferred outside the European Economic
          Area, HC Core Tech will ensure appropriate safeguards under GDPR
          Chapter V, including Standard Contractual Clauses adopted by the
          European Commission.
        </Paragraph>

        <SubHead>10. Audit</SubHead>
        <Paragraph>
          On written request with reasonable notice (typically 30 days), HC
          Core Tech will provide the Controller with information reasonably
          necessary to demonstrate compliance with this DPA. On-website audits
          are available for engagements exceeding a value threshold agreed in
          the scoping document.
        </Paragraph>

        <SubHead>11. Return or deletion of data</SubHead>
        <Paragraph>
          On termination of the engagement, HC Core Tech will, at the
          Controller&apos;s choice, return or securely delete all personal
          data. HC Core Tech may retain personal data where required by law,
          in which case HC Core Tech will continue to protect it as described
          in this DPA.
        </Paragraph>

        <SubHead>12. Liability</SubHead>
        <Paragraph>
          Liability under this DPA is subject to the limitations set out in
          the Terms of Service, except where GDPR mandates otherwise.
        </Paragraph>

        <SubHead>13. Governing law</SubHead>
        <Paragraph>
          This DPA is governed by Dutch law and the exclusive jurisdiction of
          the competent courts of the Netherlands, consistent with the Terms
          of Service.
        </Paragraph>
      </LegalSection>

      {/* Contact */}
      <section style={{ padding: '80px 32px', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '11px',
            letterSpacing: '0.28em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '20px',
          }}>Questions</div>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(24px, 3vw, 34px)',
            lineHeight: 1.2, letterSpacing: '-0.015em',
            color: T.platinum, marginBottom: '20px',
          }}>
            Something unclear? <span style={{ fontStyle: 'italic', color: T.gold }}>Ask me directly.</span>
          </h2>
          <p style={{
            fontFamily: FONTS.ui, fontSize: '15.5px', lineHeight: 1.6,
            color: T.softText, marginBottom: '12px',
          }}>
            <a href="mailto:hc@hccoretech.com" style={{ color: T.gold, textDecoration: 'none' }}>
              hc@hccoretech.com
            </a>
          </p>
          <p style={{
            fontFamily: FONTS.mono, fontSize: '11px', color: T.muted,
            letterSpacing: '0.14em',
          }}>Last updated {LAST_UPDATED}</p>
        </Reveal>
      </section>
    </SharedLayout>
  )
}

/* -------------- helpers -------------- */

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a data-card="true" href={href} style={{
      padding: '14px 18px',
      background: T.deep,
      border: `1px solid ${T.midnight}`,
      borderRadius: '6px',
      textDecoration: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '10px',
    }}>
      <span style={{
        fontFamily: FONTS.serif, fontStyle: 'italic',
        fontSize: '16px', color: T.platinum,
        letterSpacing: '-0.005em',
      }}>{label}</span>
      <span style={{ color: T.gold, fontSize: '16px' }}>→</span>
    </a>
  )
}

function LegalSection({ id, title, draft, children }: { id: string; title: string; draft?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} style={{
      padding: '64px 32px', maxWidth: '900px', margin: '0 auto',
      scrollMarginTop: '80px',
    }}>
      <Reveal>
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: FONTS.mono, fontSize: '10px',
            letterSpacing: '0.24em', color: T.goldDeep,
            textTransform: 'uppercase', marginBottom: '10px',
          }}>
            {draft ? 'Draft . ' : ''}Legal document
          </div>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(30px, 3.8vw, 46px)',
            lineHeight: 1.1, letterSpacing: '-0.015em',
            color: T.platinum, marginBottom: '8px',
          }}>{title}</h2>
          <div style={{ width: '48px', height: '1px', background: T.gold, marginTop: '10px' }} />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div>{children}</div>
      </Reveal>
    </section>
  )
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 500,
      fontSize: '22px', lineHeight: 1.3,
      color: T.gold, marginTop: '32px', marginBottom: '14px',
      letterSpacing: '-0.005em',
    }}>{children}</h3>
  )
}

function Paragraph({ lead, children }: { lead?: boolean; children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: FONTS.ui,
      fontSize: lead ? '17px' : '15.5px',
      lineHeight: 1.75,
      color: lead ? T.platinum : T.softText,
      marginBottom: '16px',
    }}>{children}</p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{
      listStyle: 'none', padding: 0, margin: '0 0 16px 0',
    }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: '12px',
          padding: '6px 0',
          fontFamily: FONTS.ui, fontSize: '15px', lineHeight: 1.7,
          color: T.softText,
        }}>
          <span style={{
            color: T.gold, flexShrink: 0, paddingTop: '2px',
            fontFamily: FONTS.mono, fontSize: '11px',
          }}>·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
       rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
       style={{
         color: T.gold, textDecoration: 'none',
         borderBottom: `1px solid ${T.goldDeep}66`,
       }}>
      {children}
    </a>
  )
}