"use client";

export default function Contact() {
  return (
    <section id="contact">
      <div className="w">
        <div className="contact-grid">

          <div className="rv">
            <p className="contact-label">Contact</p>
            <h2 className="contact-title">
              Construisons<br/>
              quelque chose<br/>
              <span className="lt">ensemble.</span>
            </h2>
            <p className="contact-sub">
              Vous avez un projet en tête ? Je réponds sous 24h. Disponible pour des missions remote, long terme ou ponctuelles.
            </p>
            <div className="contact-btns">
              <a href="https://cal.com/nasoavina-manitriniaina-jo3qz1" target="_blank" className="btn-contact">
                Prendre RDV 
                <span className="icon-arr">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a href="mailto:hello@nasoavina.com" className="btn-contact-ghost">hello@nasoavina.com</a>
            </div>
          </div>

          <div className="rv d2">
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/" target="_blank" className="cl">
                <div>
                  <div className="cl-name">LinkedIn</div>
                  <div className="cl-handle">manitriniaina-safidy-nasoavina</div>
                </div>
                <span className="cl-arr">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 1.5V8.5M6.5 8.5L4 6M6.5 8.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10.5H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
              <a href="https://github.com/nassoa" target="_blank" className="cl">
                <div>
                  <div className="cl-name">GitHub</div>
                  <div className="cl-handle">github.com/nassoa</div>
                </div>
                <span className="cl-arr">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 1.5V8.5M6.5 8.5L4 6M6.5 8.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10.5H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
              <a href="https://wa.me/261328953396" target="_blank" className="cl">
                <div>
                  <div className="cl-name">WhatsApp</div>
                  <div className="cl-handle">+261 32 895 3396</div>
                </div>
                <span className="cl-arr">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 1.5V8.5M6.5 8.5L4 6M6.5 8.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10.5H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
              <a href="https://pronass.vercel.app/cv/Nasoavina-CV.pdf" target="_blank" className="cl">
                <div>
                  <div className="cl-name">Curriculum Vitæ</div>
                  <div className="cl-handle">Télécharger le PDF</div>
                </div>
                <span className="cl-arr">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 1.5V8.5M6.5 8.5L4 6M6.5 8.5L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 10.5H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
