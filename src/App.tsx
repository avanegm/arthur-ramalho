import { useState, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock3,
  Coins,
  FileText,
  GraduationCap,
  Landmark,
  MapPin,
  Menu,
  ShieldCheck,
  UsersRound,
  X,
} from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from './config';

const practiceAreas = [
  {
    number: '',
    title: 'Direito Bancário',
    description:
      'Atuação em defesa do consumidor em demandas bancárias, análise de contratos e questões relacionadas a cobranças.',
    Icon: Landmark,
  },
  {
    number: '',
    title: 'Recuperação de Crédito',
    description:
      'Análise de alternativas jurídicas para recuperação de valores e condução de demandas de crédito.',
    Icon: Coins,
  },
  {
    number: '',
    title: 'Direito do Trabalho',
    description:
      'Atuação em demandas trabalhistas, com experiência tanto pela parte reclamante quanto pela reclamada.',
    Icon: BriefcaseBusiness,
  },
  {
    number: '',
    title: 'Transações Tributárias',
    description:
      'Acompanhamento de questões relacionadas a negociações tributárias e alternativas de regularização fiscal.',
    Icon: FileText,
  },
];

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de atuação', href: '#atuacao' },
  { label: 'Contato', href: '#contato' },
];

function Brand({ light = true }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : 'brand-dark'}`} href="#inicio" aria-label="Arthur Ramalho — início">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/images/arthur-mark.png" alt="" />
      </span>
      <span className="brand-copy">
        <span className="brand-name">Arthur Ramalho</span>
        <span className="brand-subtitle">Advocacia e Consultoria Jurídica</span>
      </span>
    </a>
  );
}

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      className="whatsapp-mark-icon"
      width={size}
      height={size}
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.2 10.3 77.5 29.9 111.1L0 480l117.6-30.8c32.4 17.7 68.8 27 106.2 27h.1c122.3 0 223.9-99.6 223.9-222 0-59.3-24.6-115-66.9-157.1zM223.9 438.7c-33.3 0-65.9-8.9-94.3-25.7l-6.8-4-69.8 18.3 18.6-68.1-4.4-7C49 322.9 39 288.9 39 254c0-102.3 83.1-185.4 185.1-185.4 49.5 0 96 19.3 131 54.4s55.9 81.4 55.7 130.9c0 102.3-84.6 184.8-186.9 184.8zm101.8-138.8c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.5 2.8-14.3 18-17.6 21.7-6.5 4.2-12 1.4-23.5-8.7-44.8-27.7c-16.5-14.7-27.6-32.8-30.8-38.3s-.3-8.5 2.5-11.2c2.5-2.5 5.5-6.5 8.3-9.7s3.7-5.5 5.5-9.2.9-6.9-.5-9.7-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5l-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9s-19.4 19-19.4 46.3 19.9 53.8 22.6 57.5 39.2 59.9 95 84c13.3 5.7 23.6 9.1 31.7 11.7 13.3 4.2 25.5 3.6 35.1 2.2 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4-5.1-3.7-10.6-6.5z" />
    </svg>
  );
}

function WhatsAppCta({ className = '', label = 'Falar no WhatsApp' }: { className?: string; label?: string }) {
  const href = getWhatsAppUrl();
  return (
    <a
      className={`button button-gold ${className}`}
      href={href || '#contato'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      aria-label={href ? label : `${label} — configure o número de WhatsApp no arquivo src/config.ts`}
      onClick={!href ? (event) => {
        event.preventDefault();
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
      } : undefined}
    >
      <WhatsAppIcon size={18} />
      <span>{label}</span>
      <ArrowRight size={17} strokeWidth={1.7} />
    </a>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="section-eyebrow"><span aria-hidden="true" />{children}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const emailHref = siteConfig.email ? `mailto:${siteConfig.email}` : '';

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-backdrop" aria-hidden="true" />
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={25} />}
            </button>
            <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-label="Navegação principal">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
              ))}
              <WhatsAppCta className="nav-cta" label="Falar no WhatsApp" />
            </nav>
          </div>
        </header>

        <div className="hero-content page-width">
          <div className="hero-portrait" aria-hidden="true">
            <div className="hero-portrait-frame" />

            <img
              src="/images/arthur-portrait.png"
              alt=""
            />
          </div>

          <div className="hero-copy">
            <SectionEyebrow>Sorocaba e região</SectionEyebrow>
            <h1>Direito com propósito e estratégia para <em>pessoas e empresas.</em></h1>
            <p className="hero-description">
              Advocacia e consultoria jurídica com análise técnica, compromisso e soluções adequadas à realidade de cada cliente.
            </p>
            <WhatsAppCta className="hero-cta" label="Falar agora no WhatsApp" />
            <div className="hero-highlights" aria-label="Informações de atendimento">
              <div className="hero-highlight">
                <ShieldCheck size={27} strokeWidth={1.25} />
                <span>Atendimento<br /><strong>em Sorocaba e região</strong></span>
              </div>
              <div className="hero-highlight">
                <UsersRound size={27} strokeWidth={1.25} />
                <span>Pessoas físicas<br /><strong>e empresas</strong></span>
              </div>
              <div className="hero-highlight">
                <BriefcaseBusiness size={26} strokeWidth={1.25} />
                <span>Análise técnica<br /><strong>e individualizada</strong></span>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#sobre" aria-label="Conheça o profissional">
            <span>Conheça o profissional</span><ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      <section className="about section-light" id="sobre">
        <div className="about-grid page-width">
          <div className="about-copy">
            <SectionEyebrow>Sobre</SectionEyebrow>
            <h2>Conhecimento jurídico aliado <em>à prática.</em></h2>
            <p>
              Arthur Ramalho é graduado em Direito pela Faculdade de Direito de Sorocaba (FADI), em 2026, e pós-graduando em Processo do Trabalho pela Escola Paulista de Direito (EPD).
            </p>
            <p>
              Possui experiências relacionadas ao Direito Bancário em defesa do consumidor, Recuperação de Crédito, Direito do Trabalho — tanto pela parte reclamante quanto pela reclamada — e Transações Tributárias, com foco em uma atuação técnica, responsável e atenta às particularidades de cada demanda.
            </p>
            <div className="credentials">
              <div className="credential">
                <GraduationCap size={25} strokeWidth={1.35} />
                <span>Graduado em Direito<br /><strong>FADI · 2026</strong></span>
              </div>
              <div className="credential">
                <BookOpen size={24} strokeWidth={1.35} />
                <span>Pós-graduação em andamento<br /><strong>Processo do Trabalho · EPD</strong></span>
              </div>
              <div className="credential">
                <Check size={23} strokeWidth={1.45} />
                <span>Formação complementar<br /><strong>Cursos ao longo da graduação</strong></span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <img src="/images/office-detail.jpg" alt="Ambiente de trabalho com livros jurídicos e mesa de escritório" loading="lazy" />
            <div className="about-quote">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>Cada demanda merece uma análise cuidadosa, com estratégia e responsabilidade.</p>
              <span className="quote-rule" />
            </div>
            <div className="visual-caption"><span>01</span><span>Conhecimento aplicado à realidade</span></div>
          </div>
        </div>
      </section>

      <section className="practice section-light" id="atuacao">
        <div className="page-width">
          <div className="practice-heading">
            <div>
              <SectionEyebrow>Áreas de atuação</SectionEyebrow>
              <h2>Atuação jurídica em <em>diferentes frentes.</em></h2>
            </div>
            <p>Assessoria e atuação em demandas judiciais e extrajudiciais, com atenção à análise técnica e às alternativas adequadas à realidade de cada caso.</p>
          </div>
          <div className="practice-grid">
            {practiceAreas.map(({ number, title, description, Icon }) => (
              <article className="practice-card" key={number}>
                <div className="card-topline"><span>{number}</span><Icon size={27} strokeWidth={1.35} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contato" className="card-link" aria-label={`Conversar sobre ${title}`}>
                  <span>Saiba mais</span><ArrowUpRight size={17} strokeWidth={1.5} />
                </a>
              </article>
            ))}
          </div>
          <p className="practice-note">A atuação em cada matéria será avaliada de acordo com as características e necessidades específicas da demanda.</p>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-backdrop" aria-hidden="true" />
        <div className="contact-inner page-width">
          <div className="contact-copy">
            <SectionEyebrow>Contato</SectionEyebrow>
            <h2>Vamos conversar sobre a<em> sua demanda?</em></h2>
            <p>Entre em contato para apresentar sua questão e conhecer as possibilidades de atendimento.</p>
          </div>
          <div className="contact-actions">
            <WhatsAppCta label="Falar no WhatsApp" />
            {siteConfig.whatsappNumber ? (
              <p className="contact-hint">O primeiro contato pode ser feito diretamente pelo WhatsApp.</p>
            ) : (
              <p className="contact-hint">O canal de WhatsApp será ativado após a configuração do número de atendimento.</p>
            )}
            <div className="contact-details">
              <div className="contact-detail">
                <MapPin size={22} strokeWidth={1.35} />
                <span><strong>{siteConfig.city}</strong><small>Atendimento mediante consulta</small></span>
              </div>
              {siteConfig.email && (
                <a className="contact-detail" href={emailHref}>
                  <FileText size={22} strokeWidth={1.35} />
                  <span><strong>E-mail</strong><small>{siteConfig.email}</small></span>
                </a>
              )}
              <div className="contact-detail">
                <Clock3 size={22} strokeWidth={1.35} />
                <span><strong>Atendimento com agendamento</strong><small>Consulte a disponibilidade</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main page-width">
          <Brand />
          <p>Advocacia e consultoria jurídica<br />com seriedade, estratégia e responsabilidade.</p>
          <a href="#inicio" className="back-to-top">Voltar ao início <ArrowUpRight size={16} /></a>
        </div>
        <div className="footer-bottom page-width">
          <span>© {new Date().getFullYear()} Arthur Ramalho. Todos os direitos reservados.</span>
          <span className="footer-location">{siteConfig.city}</span>
          {siteConfig.oabNumber && <span>OAB: {siteConfig.oabNumber}</span>}
        </div>
      </footer>
    </main>
  );
}
