/* Contact — split CTA statement + form, then footer. */
function Contact({ lang }) {
  const c = window.PORTFOLIO.contact;
  const [sent, setSent] = React.useState(false);
  const [focus, setFocus] = React.useState('');

  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="contact__left">
          <div className="eyebrow">{window.tt(c.eyebrow, lang)}</div>
          <h2 className="contact__title">{window.tt(c.title, lang)}</h2>
          <p className="lead">{window.tt(c.lead, lang)}</p>
          <div className="contact__meta">
            <a className="contact__mail" href={'mailto:' + c.email_addr}>
              <i data-lucide="mail" />{c.email_addr}
            </a>
            <span className="contact__loc"><i data-lucide="map-pin" />{window.tt(c.location, lang)}</span>
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          {sent ? (
            <div className="contact__sent">
              <i data-lucide="check" />
              <p>{window.tt(c.sent, lang)}</p>
            </div>
          ) : (
            <React.Fragment>
              <div className="field-row">
                <label className="field-wrap">
                  <span>{window.tt(c.fields.name, lang)}</span>
                  <input className={'field' + (focus === 'n' ? ' is-focus' : '')}
                    onFocus={() => setFocus('n')} onBlur={() => setFocus('')} required />
                </label>
                <label className="field-wrap">
                  <span>{window.tt(c.fields.email, lang)}</span>
                  <input type="email" className={'field' + (focus === 'e' ? ' is-focus' : '')}
                    onFocus={() => setFocus('e')} onBlur={() => setFocus('')} required />
                </label>
              </div>
              <label className="field-wrap">
                <span>{window.tt(c.fields.message, lang)}</span>
                <textarea rows="4" className={'field' + (focus === 'm' ? ' is-focus' : '')}
                  onFocus={() => setFocus('m')} onBlur={() => setFocus('')} required />
              </label>
              <button className="btn btn--primary" type="submit">
                {window.tt(c.submit, lang)} <span className="arrow">→</span>
              </button>
            </React.Fragment>
          )}
        </form>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__logo">DOA KIM<i className="dot" /></span>
          <span className="footer__copy">© <span className="num">2026</span> Doa Kim · {window.tt(c.location, lang)}</span>
        </div>
      </footer>
    </section>
  );
}
window.Contact = Contact;
