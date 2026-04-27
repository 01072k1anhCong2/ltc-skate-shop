import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top wave divider */}
      <div style={styles.waveDivider}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#2e3a47"
          />
        </svg>
      </div>

      <div style={styles.mainFooter}>
        <Container>
          <Row className="py-4 gy-4">
            {/* Brand Column */}
            <Col md={4} sm={12}>
              <div style={styles.brandSection}>
                <div style={styles.logo}>
                  <img src={logo} alt='LTC-skateshop' className="ltc-skateshop"/>
                  <span style={styles.logoText}>LtcSkateShop</span>
                </div>
                <p style={styles.tagline}>
                  Your soul finds its true fluidity when your feet become one with the board, day after day.
                </p>
                <div style={styles.socialLinks}>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nguoilamdinhtoi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialBtn}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/lamthanh.congchu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialBtn}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#1877f2';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col md={2} sm={6}>
              <h6 style={styles.colTitle}>Quick Links</h6>
              <ul style={styles.linkList}>
                {['Home', 'Products', 'Cart', 'Orders', 'Profile'].map(item => (
                  <li key={item} style={styles.linkItem}>
                    <a href="/" style={styles.link}
                      onMouseEnter={e => e.currentTarget.style.color = '#3dcfcf'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      <span style={styles.linkArrow}>›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Contact Info */}
            <Col md={4} sm={12}>
              <h6 style={styles.colTitle}>Contact Us</h6>
              <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span style={styles.contactText}>
                    Suginami, Tōkyō<br />
                    <span style={styles.contactSub}>〒167-0000 東京都杉並区</span>
                  </span>
                </li>
                <li style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <a href="mailto:support@ltcskateshop.com" style={{ ...styles.link, ...styles.contactText }}
                    onMouseEnter={e => e.currentTarget.style.color = '#3dcfcf'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    support@ltcskateshop.com
                  </a>
                </li>
                <li style={styles.contactItem}>
                  <span style={styles.contactIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                    </svg>
                  </span>
                  <span style={styles.contactText}>080 - 8905 - 7660</span>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Divider */}
          <hr style={styles.divider} />

          {/* Bottom bar */}
          <Row className="py-3 align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p style={styles.copyright}>
                © {new Date().getFullYear()} <strong style={{ color: '#3dcfcf' }}>LtcSkateShop</strong>. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div style={styles.badges}>
                {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item, i) => (
                  <a key={i} href="/" style={styles.badgeLink}
                    onMouseEnter={e => e.currentTarget.style.color = '#3dcfcf'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    marginTop: 'auto',
  },
  waveDivider: {
    lineHeight: 0,
    background: '#f8f9fa',
  },
  mainFooter: {
    background: '#2e3a47',
    color: 'rgba(255,255,255,0.7)',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.5px',
  },
  tagline: {
    fontSize: '13.5px',
    lineHeight: '1.7',
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '4px',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  socialBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
  },
  colTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    paddingBottom: '10px',
    borderBottom: '2px solid #3dcfcf',
    display: 'inline-block',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: '8px',
  },
  link: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '13.5px',
    transition: 'color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  linkArrow: {
    color: '#3dcfcf',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  contactIcon: {
    color: '#3dcfcf',
    flexShrink: 0,
    marginTop: '2px',
  },
  contactText: {
    fontSize: '13.5px',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: '1.6',
  },
  contactSub: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
  },
  divider: {
    borderColor: 'rgba(255,255,255,0.1)',
    margin: 0,
  },
  copyright: {
    margin: 0,
    fontSize: '13px',
    color: 'rgba(255,255,255,0.45)',
  },
  badges: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  badgeLink: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
};

export default Footer;