import { ArrowUpRight } from "lucide-react";

const profiles = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeffrey-feldman-1bb99bbb",
    image: "linkedin-logo.webp",
    width: 320,
    height: 99,
    className: "linkedin",
  },
  {
    name: "Google Reviews",
    href: "https://share.google/wNP432ycMNgmb9m0K",
    image: "google-reviews-logo.webp",
    width: 360,
    height: 202,
    className: "google",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bestbackgroundinvestigations/",
    image: "instagram-logo.webp",
    width: 160,
    height: 160,
    className: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@best_background_investig",
    image: "tiktok-logo.webp",
    width: 160,
    height: 160,
    className: "tiktok",
  },
];

export function SocialLinks() {
  return (
    <section className="social-section" aria-label="Connect with the firm">
      <div className="shell">
        <div className="social-heading">
          <span className="eyebrow">CONNECT WITH THE FIRM</span>
          <p>Find us. Follow along.</p>
        </div>
        <nav className="social-logos" aria-label="Social profiles and reviews">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.name} (opens in a new tab)`}
              className={`social-logo social-logo-${profile.className}`}
            >
              <img
                src={`/images/${profile.image}`}
                width={profile.width}
                height={profile.height}
                alt={profile.name}
                loading="lazy"
              />
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function Affiliations() {
  return (
    <section
      className="affiliations-section"
      aria-label="Professional affiliations"
    >
      <div className="affiliations-inner shell">
        <div>
          <span className="eyebrow">PROFESSIONAL AFFILIATIONS</span>
          <h2>Connected to the profession.</h2>
        </div>
        <div className="affiliation-logos">
          <a
            href="https://www.fali.org/members/?id=80997417"
            target="_blank"
            rel="noreferrer"
            aria-label="View the firm's Florida Association of Licensed Investigators profile (opens in a new tab)"
          >
            <img
              src="/images/fali-member.webp"
              alt="Florida Association of Licensed Investigators member"
              width="200"
              height="200"
              loading="lazy"
            />
          </a>
          <div>
            <img
              src="/images/intellenet.webp"
              alt="INTELLENET professional investigators network"
              width="240"
              height="240"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
