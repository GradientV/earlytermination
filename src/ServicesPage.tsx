import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { services, type Service, type ServiceId } from "./services";

type FilterId = "all" | "investigations" | "federal" | "attorneys";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "investigations", label: "Investigations" },
  { id: "federal", label: "Federal consulting" },
  { id: "attorneys", label: "For attorneys" },
];

function matchesFilter(service: Service, filter: FilterId) {
  if (filter === "all") return true;
  if (filter === "investigations") {
    return service.id === "background" || service.id === "private";
  }
  return service.id === filter;
}

export default function ServicesPage() {
  const { hash } = useLocation();
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");
  const [openService, setOpenService] = useState<ServiceId | null>(() => {
    const requested = hash.slice(1);
    return (
      services.find((service) => service.id === requested)?.id ?? "background"
    );
  });

  useEffect(() => {
    const requested = services.find((service) => service.id === hash.slice(1));
    if (!requested) return;

    setFilter("all");
    setQuery("");
    setOpenService(requested.id);
  }, [hash]);

  const searchTerm = query.trim().toLocaleLowerCase();
  const visibleServices = services.filter((service) => {
    const searchableText = [
      service.title,
      service.eyebrow,
      service.description,
      service.audience,
      ...service.details,
    ]
      .join(" ")
      .toLocaleLowerCase();

    return (
      matchesFilter(service, filter) && searchableText.includes(searchTerm)
    );
  });

  function changeFilter(nextFilter: FilterId) {
    setFilter(nextFilter);
    const firstMatch = services.find((service) =>
      matchesFilter(service, nextFilter),
    );
    setOpenService(firstMatch?.id ?? null);
  }

  function resetSearch() {
    setQuery("");
    setFilter("all");
    setOpenService("background");
  }

  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">OUR EXPERTISE</p>
          <h1>
            The facts you need.
            <br />
            The expertise that matters.
          </h1>
          <p className="page-intro-description">
            Private investigations and federal supervision consulting for
            individuals, businesses, and legal teams. Every matter starts with
            understanding yours.
          </p>
        </div>
      </section>

      <section
        className="services-directory shell"
        aria-label="Explore our services"
      >
        <div className="services-toolbar">
          <div
            className="service-filters"
            role="group"
            aria-label="Filter services"
          >
            {filters.map((item) => (
              <button
                className="service-filter"
                type="button"
                aria-pressed={filter === item.id}
                key={item.id}
                onClick={() => changeFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="service-search">
            <label htmlFor="service-search" className="sr-only">
              Search services
            </label>
            <Search size={18} aria-hidden="true" />
            <input
              id="service-search"
              type="search"
              placeholder="Search services"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>

        <p
          className="services-result-count"
          aria-live="polite"
          aria-atomic="true"
        >
          {visibleServices.length}{" "}
          {visibleServices.length === 1 ? "service" : "services"}
          {searchTerm ? ` matching “${query.trim()}”` : " available"}
        </p>

        <div className="services-list">
          {visibleServices.map((service) => {
            const expanded = openService === service.id;

            return (
              <article
                id={service.id}
                className={`service-detail transition-colors duration-200 hover:bg-white/30${expanded ? " is-open" : ""}`}
                key={service.id}
              >
                <div className="service-detail-top">
                  <div className="service-detail-heading">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h2 id={`service-title-${service.id}`}>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <button
                    type="button"
                    className="service-detail-toggle"
                    aria-expanded={expanded}
                    aria-controls={`service-panel-${service.id}`}
                    aria-label={`${expanded ? "Hide" : "Show"} ${service.title.toLowerCase()} details`}
                    onClick={() => setOpenService(expanded ? null : service.id)}
                  >
                    <ChevronDown size={24} aria-hidden="true" />
                  </button>
                </div>
                <div
                  id={`service-panel-${service.id}`}
                  role="region"
                  aria-labelledby={`service-title-${service.id}`}
                  hidden={!expanded}
                >
                  {expanded && (
                    <div className="service-detail-content">
                      <ul className="service-detail-list">
                        {service.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <div className="service-detail-action">
                        <p className="service-detail-audience">
                          {service.audience}
                        </p>
                        <Link
                          to={`/contact?service=${service.id}`}
                          className="button button-dark"
                        >
                          Discuss this service{" "}
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {visibleServices.length === 0 && (
          <div className="service-empty">
            <p className="eyebrow">LET’S TAKE ANOTHER LOOK</p>
            <h2>No services match that search.</h2>
            <p>
              Try a broader term, explore all services, or contact us about your
              matter.
            </p>
            <button type="button" className="text-link" onClick={resetSearch}>
              View all services <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </section>

      <section className="services-contact-cta">
        <div className="shell services-contact-inner">
          <div>
            <p className="eyebrow">EVERY CASE STARTS WITH A CONVERSATION</p>
            <h2>Tell us what you need to know.</h2>
            <p>
              We’ll help you understand how our experience can support your next
              step.
            </p>
          </div>
          <Link to="/contact" className="button button-dark">
            Discuss your case <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
