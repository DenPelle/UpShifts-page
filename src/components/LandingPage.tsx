import React from 'react'

type HeroSectionProps = {
  headline: string
  subtitle: string
}

type ProblemProps = {
  description: string
}

type SolutionProps = {
  text: string
  credibility: string
}

type BenefitItem = {
  feature: string
  benefit: string
}

type BenefitsProps = {
  benefits: BenefitItem[]
}

type SocialProofItem = {
  source: string
  quote: string
}

type SocialProofProps = {
  items: SocialProofItem[]
}

type OfferProps = {
  offerText: string
  bonus: string[]
  price: {
    value: string
    comparison: string
    payment_plan: string
  }
  scarcity: string
  guarantee: {
    nome: string
    durata: string
    risultati_specifici_garantiti: string[]
    payback_o_rimborso: string
    note: string
  }
}

type CTAProps = {
  text: string
  postscript: string
}

const data = {
  hero_section: {
    headline:
      'Funnel Che Portano Clienti Paganti: fino a 3x Più Risultati e ROI Misurabile in 90 Giorni — o Lavoriamo Gratis.',
    subtitle:
      'UpShifts costruisce funnel di vendita su misura (lead magnet → opt-in → landing → nurture → consulenza) che generano lead qualificati, abbassano il costo per acquisizione e trasformano i click in clienti reali — con trasparenza totale e supporto 24/7.',
  },
  problem_description:
    'Hai speso migliaia in Ads senza vedere clienti stabili? Vedi il contatore delle spese pubblicitarie salire e senti quel nodo allo stomaco ogni volta che controlli il CRM: lead freddi, numeri vuoti, appuntamenti che non si presentano. Ti sei affidato a soluzioni “one-size-fits-all”, landing improvvisate, copy generico e campagne lanciate senza una strategia di monetizzazione: risultato = traffico che non converte e annunci che bruciano budget. Ogni mattina ti sembra di inseguire clienti con le mani bucate: contatti che non rispondono, email che restano non lette, e il telefono del negozio che tace. È frustrante, demotivante e costa soldi reali ogni giorno.',
  solution:
    'UpShifts risolve questo problema con un sistema collaudato e personalizzato: non vendiamo solo pubblicità, costruiamo funnel di vendita end-to-end studiati sul tuo mercato e sul cliente ideale. Partiamo dall\'analisi del tuo posizionamento, progettiamo un lead magnet che attira il target giusto, sviluppiamo pagine di opt-in e landing page con copy persuasivo, implementiamo automazioni email per nutrire i lead e ottimizziamo continuamente tramite split testing e CRO. A differenza delle soluzioni generiche, il nostro approccio combina strategia, creatività e dati: misuriamo, testiamo, miglioriamo e adattiamo fino a raggiungere KPI concreti. Inoltre, trasferiamo tutto il rischio su di noi con la garanzia “Perdere Non È un\'Opzione”: se non raggiungiamo gli obiettivi concordati in 3 mesi, continuiamo a lavorare gratis fino a che non li raggiungiamo (o rimborsiamo fino al 100% nei casi previsti).',
  credibility:
    'Perché fidarti di UpShifts? Siamo un\'agenzia con oltre 5 anni di esperienza, 220+ clienti soddisfatti e più di 50 milioni di euro generati per i nostri clienti. Lavoriamo con cliniche estetiche, dentisti, interior designers, agenzie immobiliari, poliambulatori e ecommerce high-ticket: mercati dove ogni lead conta. I nostri case study mostrano crescita tangibile (es. cliente X da 0 a 100k/mese). Gestiamo campagne su Facebook, Google Ads, TikTok e YouTube e applichiamo split testing avanzati, CRO e strategie di monetizzazione reali — tutto con report chiari e accesso al nostro metodo UpShifts.',
  benefits: [
    {
      feature: 'Funnel di vendita completo e personalizzato',
      benefit:
        'Lead qualificati costanti e un percorso cliente ottimizzato che trasforma visitatori in clienti paganti.',
    },
    {
      feature: 'Lead magnet e pagine di opt-in ad alta performance',
      benefit:
        'Aumento delle iscrizioni e raccolta di contatti con alta predisposizione all’acquisto.',
    },
    {
      feature: 'Landing page con copy persuasivo',
      benefit:
        'Conversion rate più alto: più appuntamenti o contatti per lo stesso traffico.',
    },
    {
      feature: 'Automazioni email per lead nurturing',
      benefit:
        'Relazioni costruite automaticamente che aumentano il tasso di show-up e riducono il drop-off.',
    },
    {
      feature: 'Gestione traffico PPC (nei pacchetti avanzati)',
      benefit:
        'Traffico calibrato e scalabile che porta clienti reali, non solo visite.',
    },
    {
      feature: 'Split testing e ottimizzazione continua (CRO)',
      benefit:
        'Miglioramento sistematico delle performance e massimizzazione del ROI.',
    },
    {
      feature: 'Modello di monetizzazione e pricing ottimizzato',
      benefit:
        'Riduzione del costo per lead e maggiore profit margin per ogni cliente acquisito.',
    },
    {
      feature: 'Supporto 24/7 e consulenza strategica 1:1',
      benefit:
        'Risposte rapide, problemi risolti e strategia allineata agli obiettivi di crescita.',
    },
    {
      feature: 'Trasparenza totale: accesso al metodo UpShifts',
      benefit:
        'Controllo completo sul processo e la possibilità di replicare o scalare internamente.',
    },
    {
      feature: "Garanzia 'Perdere Non È un'Opzione'",
      benefit:
        'Rischio azzerato: lavoriamo gratis finché non raggiungiamo i KPI concordati.',
    },
  ],
  social_proof: [
    {
      source: 'Cliente - Davide S.',
      quote:
        'Da quando ci siamo affidati a Upshifts i nostri clienti sono aumentati notevolmente. Agenzia estremamente professionale che non ha lasciato nulla al caso. Consigliatissimi!',
    },
    {
      source: 'Cliente - Alessia P.',
      quote:
        'Con Upshifts siamo riusciti a scalare il nostro business, passando da 0 a più di 100k al mese. Non potevamo chiedere di meglio. Grazie ragazzi!',
    },
    {
      source: 'Cliente - Mattia D.',
      quote:
        "Stavamo cercando un'agenzia che si occupasse della nostra presenza online, e Upshifts ha superato ogni aspettativa. Risultati tangibili e un team sempre disponibile.",
    },
    {
      source: 'Metriche UpShifts',
      quote:
        '220+ clienti soddisfatti | 50M€+ fatturato generato | 5+ anni di esperienza',
    },
  ],
  godfather_offer:
    'Offerta UpShifts: partite dal Pacchetto Base a 670€/mese (funnel completo, automazioni email, landing page, modello di monetizzazione e CRO) — ideale per testare con basso investimento. Se volete scalare subito, passate al Pacchetto Avanzato (fino a 1.800€/mese) con gestione ads professionale e funnel più complessi. Per chi punta al massimo: Pacchetto Premium (fino a 10.000€/mese) con VSL, contenuti premium, split testing avanzato e copy su misura. Includiamo: consulenza strategica 1:1 gratuita per definire obiettivi e KPI, accesso al nostro metodo UpShifts, supporto 24/7 e la Garanzia “Perdere Non È un\'Opzione” (vedi dettagli). Sconti fino al 15% per pagamento anticipato. Possibilità di iniziare con un funnel di test e poi upsellare su miglioramenti e ads. Posti limitati per garantire qualità: accettiamo solo un numero ristretto di nuovi clienti ogni mese.',
  bonus: [
    'Funnel Blueprint (PDF step-by-step) — valore 1.200€: struttura completa per replicare il processo di acquisizione',
    'Audit pubblicitario di 30 minuti con consigli azionabili — valore 400€',
    'Sequenza email high-converting (template pronto all’uso) — valore 600€',
    'Onboarding + formazione per il tuo team (2 ore) e accesso al metodo UpShifts',
  ],
  price: {
    value:
      'Pacchetto Base da 670€/mese; Pacchetto Avanzato fino a 1.800€/mese; Pacchetto Premium fino a 10.000€/mese. Prezzi personalizzabili in base al mercato e agli obiettivi.',
    comparison:
      '670€/mese ≈ il costo mensile di 1-2 clienti persi senza funnel. Con il funnel giusto, quel budget si ripaga MOLTE volte: riduzione del CAC, aumento delle vendite e monetizzazione dei lead. Il valore reale del servizio (strategie, testing, revenue generate e supporto continuo) supera di gran lunga il prezzo: abbiamo generato 50M€+ per i nostri clienti.',
    payment_plan:
      'Pagamenti mensili con possibilità di rateizzazione. Sconto fino al 15% per pagamento annuale (full). Opzione di test iniziale con funnel base e successivi upsell. Possibilità di personalizzare il piano in base al budget e agli obiettivi.',
  },
  scarcity:
    'Accettiamo un numero limitato di nuovi clienti ogni mese per garantire attenzione e risultati di qualità. Posti disponibili: massimo 8 nuove collaborazioni al mese. Offerta valida per i prossimi 30 giorni o fino a esaurimento posti.',
  guarantee: {
    nome: "Garanzia Perdere Non È un'Opzione",
    durata:
      '3 mesi iniziali di implementazione più tempo illimitato fino al raggiungimento degli obiettivi concordati',
    risultati_specifici_garantiti: [
      'Acquisizione di un numero minimo di lead qualificati definiti insieme nel piano strategico',
      'Aumento misurabile del tasso di conversione della landing page almeno del 20% rispetto alla baseline attuale',
      'Riduzione del costo per acquisizione cliente (CAC) rispetto al valore attuale o raggiungimento del ROI previsto entro il tempo stabilito',
    ],
    payback_o_rimborso:
      "Se gli obiettivi predefiniti non vengono raggiunti entro 3 mesi, Upshifts continuerà a lavorare gratuitamente finché non saranno soddisfatti, senza limiti temporali, oppure rimborserà fino al 100% dell’investimento effettuato a fronte di un'esecuzione completa del progetto e mancato raggiungimento degli obiettivi.",
    note:
      'Questa garanzia trasferisce totalmente il rischio su Upshifts: la trasparenza del nostro metodo, i report costanti e il supporto 24/7 ti danno controllo e sicurezza. Lavoriamo come veri partner per la crescita del tuo business.',
  },
  call_to_action:
    'Prenota ora la tua Consulenza Strategica GRATUITA (posti limitati) — clicca e riserva uno slot: analizziamo il tuo business, definiamo KPI reali e ti mostriamo il funnel che può portarti clienti paganti.',
  postscript:
    'P.S. — Se vuoi smettere di buttare budget in campagne che non funzionano, agisci ora: abbiamo 8 posti al mese e la garanzia che elimina il rischio. Prenota la consulenza gratuita oggi: se non vediamo progressi nei primi 90 giorni, lavoriamo gratis fino a raggiungere gli obiettivi. Non è uno slogan: è il modo in cui lavoriamo.',
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subtitle }) => {
  return (
    <section
      className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white py-16 px-6 md:px-12 text-center"
      aria-label="Hero section"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
        {headline}
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
    </section>
  )
}

const Problem: React.FC<ProblemProps> = ({ description }) => {
  return (
    <section
      className="bg-white py-12 px-6 md:px-16 max-w-5xl mx-auto"
      aria-label="Problem description"
    >
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">Il Problema</h2>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">{description}</p>
    </section>
  )
}

const Solution: React.FC<SolutionProps> = ({ text, credibility }) => {
  return (
    <section
      className="bg-indigo-50 py-12 px-6 md:px-16 max-w-5xl mx-auto"
      aria-label="Solution and credibility"
    >
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">La Soluzione di UpShifts</h2>
      <p className="text-gray-900 leading-relaxed mb-8 whitespace-pre-line">{text}</p>
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">Perché Scegliere Noi</h3>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">{credibility}</p>
    </section>
  )
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section
      className="bg-white py-12 px-6 md:px-16 max-w-6xl mx-auto"
      aria-label="Benefits"
    >
      <h2 className="text-3xl font-extrabold text-indigo-900 mb-10 text-center">
        Benefici Principali
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((item, i) => (
          <li
            key={i}
            className="border border-indigo-300 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-indigo-800 font-semibold mb-2">{item.feature}</h3>
            <p className="text-gray-700 leading-relaxed">{item.benefit}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const SocialProof: React.FC<SocialProofProps> = ({ items }) => {
  return (
    <section
      className="bg-indigo-50 py-12 px-6 md:px-16 max-w-5xl mx-auto"
      aria-label="Social proof and testimonials"
    >
      <h2 className="text-2xl font-bold text-indigo-900 mb-10 text-center">
        Cosa Dicono i Nostri Clienti
      </h2>
      <div className="space-y-8">
        {items.map(({ source, quote }, i) => (
          <blockquote
            key={i}
            className="border-l-4 border-indigo-600 pl-6 italic text-gray-800"
          >
            <p className="mb-2">“{quote}”</p>
            <footer className="font-semibold text-indigo-700">{source}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

const Offer: React.FC<OfferProps> = ({
  offerText,
  bonus,
  price,
  scarcity,
  guarantee,
}) => {
  return (
    <section
      className="bg-white py-12 px-6 md:px-16 max-w-5xl mx-auto"
      aria-label="Offer and pricing"
    >
      <h2 className="text-3xl font-extrabold text-indigo-900 mb-8 text-center">
        L'Offerta UpShifts
      </h2>
      <p className="text-gray-900 mb-8 leading-relaxed whitespace-pre-line">{offerText}</p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Bonus Inclusi</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {bonus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Prezzi e Piani</h3>
        <p className="text-gray-900 mb-2 whitespace-pre-line">{price.value}</p>
        <p className="text-gray-700 mb-2 italic">{price.comparison}</p>
        <p className="text-gray-700 italic">{price.payment_plan}</p>
      </div>

      <div className="mb-8 px-4 py-4 bg-indigo-100 border border-indigo-300 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Posti e Scarsità</h3>
        <p className="text-indigo-800 font-medium">{scarcity}</p>
      </div>

      <div className="border-t border-indigo-300 pt-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Garanzia</h3>
        <h4 className="text-xl font-semibold text-indigo-800 mb-1">{guarantee.nome}</h4>
        <p className="text-gray-900 mb-2 font-medium">{guarantee.durata}</p>
        <ul className="list-disc list-inside text-gray-800 mb-3">
          {guarantee.risultati_specifici_garantiti.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <p className="text-gray-800 italic mb-2">{guarantee.payback_o_rimborso}</p>
        <p className="text-gray-700">{guarantee.note}</p>
      </div>
    </section>
  )
}

const CTA: React.FC<CTAProps> = ({ text, postscript }) => {
  return (
    <section
      className="bg-indigo-900 text-white text-center py-16 px-6 md:px-12"
      aria-label="Call to action"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold max-w-4xl mx-auto mb-8 leading-tight">
        {text}
      </h2>
      <a
        href="#"
        className="inline-block bg-yellow-400 text-indigo-900 font-bold rounded-full px-14 py-4 text-lg shadow-md hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-75"
        aria-label="Prenota la tua consulenza strategica gratuita"
      >
        Prenota Ora
      </a>
      <p className="mt-8 max-w-3xl mx-auto text-yellow-200 font-semibold whitespace-pre-line">
        {postscript}
      </p>
    </section>
  )
}

const LandingPage: React.FC = () => {
  return (
    <main className="font-sans bg-gray-50 overflow-x-hidden">
      <HeroSection
        headline={data.hero_section.headline}
        subtitle={data.hero_section.subtitle}
      />
      <Problem description={data.problem_description} />
      <Solution text={data.solution} credibility={data.credibility} />
      <Benefits benefits={data.benefits} />
      <SocialProof items={data.social_proof} />
      <Offer
        offerText={data.godfather_offer}
        bonus={data.bonus}
        price={data.price}
        scarcity={data.scarcity}
        guarantee={data.guarantee}
      />
      <CTA text={data.call_to_action} postscript={data.postscript} />
    </main>
  )
}

export default LandingPage