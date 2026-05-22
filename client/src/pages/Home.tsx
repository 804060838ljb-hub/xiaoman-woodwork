/**
 * XIAOMAN WOODWORK — Landing Page (English Version)
 * Design: Contemporary Eastern Modernism
 * Sections: Nav → Hero → Brand Story → Products → Social Proof → Contact → Footer
 */

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, ChevronDown, Star, ArrowRight, Package, Truck, Shield, Leaf } from "lucide-react";

// ─── Image URLs from webdev storage ───────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/hero_bg-4Bv8whYRFmtr5pPxyLyzKf.webp";
const PRODUCT_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/product_hero-i8qLNLcK6wY9gvmPUtCQpG.webp";
const WOOD_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/wood_texture_bg-SZUB8oDAsLjx27XdErriUj.webp";
const COVER_STUDIO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/cover_studio_ac276829.jpg";
const PRODUCT_TABLE_SET = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/product_table_set_1_199ee821.jpg";
const PRODUCT_WOOD_PLANK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/product_wood_plank_515e79c8.jpg";
const PRODUCT_WOOD_GRAIN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663675965412/mepPtnLFes4axgCAkoX9dM/product_wood_grain_31cc6d0a.jpg";

// ─── Intersection Observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-lg font-light tracking-[0.15em] text-[#1C1410] italic">Xiaoman</span>
          <span className="font-display text-xs tracking-[0.2em] text-[#B8834A] uppercase mt-0.5">Woodwork</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-wider text-[#1C1410]/70 hover:text-[#6B3F2A] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/8615205032907"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#1C1410]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8DDD0] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-wider text-[#1C1410]/80 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/8615205032907"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs self-start"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Xiaoman Woodwork Tea Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/75 via-[#1C1410]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0-init inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-[#B8834A]" />
            <span className="font-display text-[#B8834A] text-sm tracking-[0.3em] uppercase italic">
              Handcrafted Since Fujian
            </span>
          </div>

          {/* Main title */}
          <h1 className="animate-fade-in-up delay-100 opacity-0-init font-display text-5xl md:text-7xl font-light text-white leading-tight tracking-wide mb-2 italic">
            Xiaoman Woodwork
          </h1>
          <p className="animate-fade-in-up delay-200 opacity-0-init font-display text-2xl md:text-3xl text-[#D4B896] italic font-light tracking-widest mb-6">
            Solid Wood Tea Tables
          </p>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-300 opacity-0-init font-display text-lg md:text-xl text-white/85 font-light leading-relaxed mb-2 tracking-wide">
            North American Black Walnut · Direct Factory Sourcing
          </p>
          <p className="animate-fade-in-up delay-400 opacity-0-init font-sans text-base text-white/65 leading-relaxed mb-10 max-w-lg">
            Premium handcrafted furniture with authentic materials and exceptional value. Every table is a testament to the natural beauty of wood grain and the art of fine craftsmanship.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-500 opacity-0-init flex flex-wrap gap-4">
            <a
              href="https://wa.me/8615205032907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={16} />
              Get a Quote
            </a>
            <a href="#products" className="btn-primary-wood">
              Browse Products
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-600 opacity-0-init flex gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { num: "100%", label: "Solid Wood" },
              { num: "Direct", label: "Factory Source" },
              { num: "Custom", label: "Sizing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl text-[#B8834A] font-light">{stat.num}</div>
                <div className="font-sans text-xs text-white/60 tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

// ─── Brand Story Section ───────────────────────────────────────────────────────
function BrandStorySection() {
  const { ref, inView } = useInView();

  return (
    <section id="story" className="py-24 md:py-32 bg-[#FAF7F2]" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative">
              <img
                src={COVER_STUDIO}
                alt="Xiaoman Woodwork Studio"
                className="w-full h-[500px] object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#B8834A]/40 -z-10" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-8 bg-[#6B3F2A] text-white px-6 py-4 shadow-lg">
              <div className="font-display text-3xl font-light text-[#D4B896] italic">Crafted</div>
              <div className="font-sans text-xs tracking-[0.2em] text-white/70 mt-1">WITH INTEGRITY</div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#B8834A]" />
              <span className="font-display text-[#B8834A] text-sm tracking-[0.25em] uppercase italic">Our Heritage</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1410] leading-tight mb-6 tracking-wide italic">
              Where Wood<br />
              <span className="text-[#6B3F2A]">Meets Art</span>
            </h2>

            <div className="wood-divider mb-6" />

            <p className="font-sans text-base text-[#1C1410]/70 leading-relaxed mb-4 tracking-wide">
              Xiaoman Woodwork originates from Fujian Province, China—home to some of the world's finest timber. We believe every piece of North American black walnut carries a unique story, and every handcrafted tea table is a dialogue between human artistry and nature's beauty.
            </p>
            <p className="font-sans text-sm text-[#1C1410]/60 leading-relaxed mb-8">
              By sourcing directly from factories, we eliminate middlemen and bring authentic craftsmanship at fair prices. From raw lumber to finished piece, we oversee every step to ensure each table stands the test of time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Leaf size={18} />, title: "Premium Wood", desc: "North American Black Walnut" },
                { icon: <Shield size={18} />, title: "Quality Assured", desc: "Direct Factory Verified" },
                { icon: <Package size={18} />, title: "Custom Orders", desc: "Made to Your Specs" },
                { icon: <Truck size={18} />, title: "Worldwide Shipping", desc: "Safe & Secure Delivery" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-3 bg-white border border-[#E8DDD0]">
                  <div className="text-[#B8834A] mt-0.5 shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-sans text-sm font-medium text-[#1C1410] tracking-wide">{f.title}</div>
                    <div className="font-sans text-xs text-[#1C1410]/50 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Products Section ─────────────────────────────────────────────────────────
function ProductsSection() {
  const { ref, inView } = useInView(0.1);

  const products = [
    {
      id: "T113",
      name: "Black Walnut Tea Table",
      spec: "210 × 76.5 × 5 cm",
      code: "Model 251218-T113",
      desc: "Premium South American walnut slab with warm, distinctive grain. Includes four handcrafted solid wood chairs. Perfect for traditional tea ceremonies.",
      tag: "Best Seller",
      img: PRODUCT_TABLE_SET,
    },
    {
      id: "P001",
      name: "Live Edge Slab",
      spec: "Custom Sizes",
      code: "Direct Factory",
      desc: "Raw solid wood slabs with natural edges in North American black walnut. Each piece is unique. Ideal for custom tea tables or statement desks.",
      tag: "Customizable",
      img: PRODUCT_WOOD_PLANK,
    },
    {
      id: "G001",
      name: "Premium Grain Collection",
      spec: "Multiple Sizes",
      code: "Curated Selection",
      desc: "Hand-selected wood grain patterns in North American black walnut. Perfect for contemporary and traditional Asian-inspired interiors.",
      tag: "Premium",
      img: PRODUCT_WOOD_GRAIN,
    },
    {
      id: "S001",
      name: "Complete Tea Room",
      spec: "Table + Chairs + Décor",
      code: "Full Solution",
      desc: "End-to-end tea room design with North American black walnut. From furniture to styling, we provide a complete Eastern aesthetic package.",
      tag: "Package Deal",
      img: PRODUCT_HERO,
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#B8834A]" />
            <span className="font-display text-[#B8834A] text-sm tracking-[0.3em] uppercase italic">Our Collection</span>
            <div className="w-16 h-px bg-[#B8834A]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1410] tracking-wide mb-4 italic">
            Product Series
          </h2>
          <p className="font-sans text-sm text-[#1C1410]/55 max-w-md mx-auto leading-relaxed">
            Each piece undergoes rigorous material selection and hand finishing to showcase the natural beauty of North American black walnut.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`product-card transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#6B3F2A] text-white font-sans text-xs px-2 py-1 tracking-wider">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="font-sans text-xs text-[#B8834A] tracking-[0.2em] uppercase mb-1">
                  {product.name}
                </div>
                <h3 className="font-display text-lg font-light text-[#1C1410] mb-1 tracking-wide italic">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-sans text-xs text-[#1C1410]/40 tracking-wide">{product.spec}</span>
                  <span className="text-[#E8DDD0]">·</span>
                  <span className="font-sans text-xs text-[#1C1410]/40">{product.code}</span>
                </div>
                <div className="wood-divider mb-3" />
                <p className="font-sans text-xs text-[#1C1410]/60 leading-relaxed mb-4">
                  {product.desc}
                </p>
                <a
                  href="https://wa.me/8615205032907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#6B3F2A] font-sans text-xs tracking-wider hover:text-[#B8834A] transition-colors duration-200 group"
                >
                  <MessageCircle size={12} />
                  <span>Request Quote</span>
                  <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="font-sans text-sm text-[#1C1410]/50 mb-4 tracking-wide">
            More product styles available. Contact us via WhatsApp or Facebook for custom inquiries.
          </p>
          <a
            href="https://www.facebook.com/people/Xiaoman-Woodwork/61589153739170/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#6B3F2A] border border-[#6B3F2A] px-6 py-3 hover:bg-[#6B3F2A] hover:text-white transition-all duration-200 tracking-wider"
          >
            Visit Facebook Page
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Wood Texture Banner ───────────────────────────────────────────────────────
function TextureBanner() {
  const { ref, inView } = useInView();
  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={WOOD_TEXTURE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1C1410]/70" />
      </div>
      <div className={`relative container text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="font-display text-5xl md:text-7xl text-[#D4B896]/30 font-light italic mb-4 select-none">
          "Wood is the canvas,<br />craft is the art."
        </div>
        <div className="wood-divider max-w-xs mx-auto mb-6" />
        <p className="font-display text-lg text-white/80 tracking-[0.2em] italic">
          Every grain tells a story
        </p>
        <p className="font-sans text-sm text-white/50 mt-2 tracking-wider">
          — Xiaoman Woodwork Studio, Fujian
        </p>
      </div>
    </section>
  );
}

// ─── Social Proof Section ─────────────────────────────────────────────────────
function SocialProofSection() {
  const { ref, inView } = useInView(0.1);

  const reviews = [
    {
      name: "Michael Chen",
      location: "New York",
      rating: 5,
      text: "Exceptional quality! The walnut grain is stunning and matches the photos perfectly. Direct factory pricing is unbeatable. Highly recommend for anyone seeking authentic handcrafted furniture.",
      product: "Black Walnut Tea Table 210cm",
      avatar: "M",
    },
    {
      name: "Sarah Williams",
      location: "California",
      rating: 5,
      text: "Second purchase from Xiaoman. Excellent communication via WhatsApp. Custom sizing was executed flawlessly. The craftsmanship is outstanding. Very satisfied with the entire experience.",
      product: "Complete Tea Room Package",
      avatar: "S",
    },
    {
      name: "David Martinez",
      location: "Texas",
      rating: 5,
      text: "Genuine North American black walnut with impeccable finishing. The wood grain is crisp and beautiful. Packaging was professional and protective. Arrived in perfect condition. Worth every penny!",
      product: "Live Edge Slab",
      avatar: "D",
    },
    {
      name: "Jennifer Park",
      location: "Seattle",
      rating: 5,
      text: "Found them on Facebook and was impressed by their video content. Competitive pricing with factory-direct quality. Fast response times and professional service throughout. Definitely ordering again!",
      product: "Premium Grain Collection",
      avatar: "J",
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#FAF7F2]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#B8834A]" />
            <span className="font-display text-[#B8834A] text-sm tracking-[0.3em] uppercase italic">Customer Reviews</span>
            <div className="w-16 h-px bg-[#B8834A]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1410] tracking-wide mb-4 italic">
            What Our Clients Say
          </h2>
          <p className="font-sans text-sm text-[#1C1410]/55 max-w-md mx-auto">
            Real feedback from satisfied customers around the world
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white border border-[#E8DDD0] p-6 transition-all duration-700 hover:shadow-md hover:border-[#B8834A]/40 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#B8834A] text-[#B8834A]" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-sans text-sm text-[#1C1410]/70 leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Product tag */}
              <div className="inline-block bg-[#FAF7F2] border border-[#E8DDD0] px-3 py-1 mb-4">
                <span className="font-sans text-xs text-[#B8834A] tracking-wide">Purchased: {review.product}</span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8DDD0]">
                <div className="w-9 h-9 rounded-full bg-[#6B3F2A] flex items-center justify-center text-white font-sans text-sm font-medium shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-sans text-sm font-medium text-[#1C1410] tracking-wide">{review.name}</div>
                  <div className="font-sans text-xs text-[#1C1410]/40 flex items-center gap-1">
                    <MapPin size={10} />
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a
            href="https://www.facebook.com/people/Xiaoman-Woodwork/61589153739170/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#6B3F2A] hover:text-[#B8834A] transition-colors duration-200 tracking-wide underline underline-offset-4"
          >
            View More Reviews on Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello, my name is ${form.name}. Contact: ${form.phone}.\n\n${form.message}`
    );
    window.open(`https://wa.me/8615205032907?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#B8834A]" />
              <span className="font-display text-[#B8834A] text-sm tracking-[0.25em] uppercase italic">Get In Touch</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1410] leading-tight mb-6 tracking-wide italic">
              Contact Us
            </h2>
            <p className="font-sans text-sm text-[#1C1410]/60 leading-relaxed mb-10">
              Whether you're interested in product details, custom sizing, or pricing, we'd love to hear from you. We typically respond within 24 hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-5">
              {[
                {
                  icon: <MessageCircle size={18} />,
                  label: "WhatsApp (Recommended)",
                  value: "+86 152 0503 2907",
                  href: "https://wa.me/8615205032907",
                  color: "#25D366",
                },
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "+86 152 0503 2907",
                  href: "tel:+8615205032907",
                  color: "#6B3F2A",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "804060838@qq.com",
                  href: "mailto:804060838@qq.com",
                  color: "#6B3F2A",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "Fujian Province, China",
                  href: "#",
                  color: "#6B3F2A",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-[#E8DDD0] hover:border-[#B8834A]/60 hover:bg-[#FAF7F2] transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-sans text-xs text-[#1C1410]/40 tracking-wide mb-0.5">{item.label}</div>
                    <div className="font-sans text-sm text-[#1C1410] group-hover:text-[#6B3F2A] transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-[#E8DDD0]">
              <p className="font-sans text-xs text-[#1C1410]/40 tracking-wider mb-3 uppercase">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/Xiaoman-Woodwork/61589153739170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 text-xs font-sans tracking-wide hover:bg-[#1565D8] transition-colors duration-200"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/nicks666888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white px-4 py-2 text-xs font-sans tracking-wide hover:opacity-90 transition-opacity duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-[#FAF7F2] border border-[#E8DDD0] p-8">
              <h3 className="font-display text-xl font-light text-[#1C1410] mb-2 tracking-wide italic">Send Inquiry</h3>
              <p className="font-sans text-xs text-[#1C1410]/50 mb-6 tracking-wide">
                Fill out the form below and we'll send your inquiry via WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-sans text-xs text-[#1C1410]/60 tracking-wider mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#E8DDD0] bg-white px-4 py-3 font-sans text-sm text-[#1C1410] focus:outline-none focus:border-[#6B3F2A] transition-colors duration-200 placeholder:text-[#1C1410]/30"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs text-[#1C1410]/60 tracking-wider mb-1.5 uppercase">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[#E8DDD0] bg-white px-4 py-3 font-sans text-sm text-[#1C1410] focus:outline-none focus:border-[#6B3F2A] transition-colors duration-200 placeholder:text-[#1C1410]/30"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs text-[#1C1410]/60 tracking-wider mb-1.5 uppercase">
                    Your Inquiry *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#E8DDD0] bg-white px-4 py-3 font-sans text-sm text-[#1C1410] focus:outline-none focus:border-[#6B3F2A] transition-colors duration-200 placeholder:text-[#1C1410]/30 resize-none"
                    placeholder="Tell us about the product you're interested in, custom sizing, quantity, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-whatsapp justify-center py-4 text-sm"
                >
                  <MessageCircle size={16} />
                  {submitted ? "Sent! Thank you ✓" : "Send via WhatsApp"}
                </button>
              </form>

              <p className="font-sans text-xs text-[#1C1410]/35 mt-4 text-center tracking-wide">
                You'll be redirected to WhatsApp to confirm and send
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1C1410] text-white/60 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-light text-white tracking-[0.15em] mb-1 italic">Xiaoman</div>
            <div className="font-display text-xs tracking-[0.2em] text-[#B8834A] uppercase mb-4">Woodwork</div>
            <p className="font-sans text-xs leading-relaxed text-white/40">
              Handcrafted Solid Wood Tea Tables<br />
              North American Black Walnut<br />
              Direct Factory Sourcing
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-sans text-sm font-medium text-white/80 mb-4 tracking-wide">Quick Links</div>
            <div className="space-y-2">
              {["Our Story", "Products", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link === "Our Story" ? "story" : link === "Products" ? "products" : link === "Reviews" ? "reviews" : "contact"}`}
                  className="block font-sans text-xs text-white/40 hover:text-[#B8834A] transition-colors duration-200 tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-sans text-sm font-medium text-white/80 mb-4 tracking-wide">Contact</div>
            <div className="space-y-2 font-sans text-xs text-white/40">
              <div>WhatsApp: +86 152 0503 2907</div>
              <div>Email: 804060838@qq.com</div>
              <div>Location: Fujian Province, China</div>
            </div>
          </div>
        </div>

        <div className="wood-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/25 tracking-wide">
            © 2025 Xiaoman Woodwork. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Xiaoman-Woodwork/61589153739170/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/30 hover:text-[#B8834A] transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/nicks666888"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/30 hover:text-[#B8834A] transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandStorySection />
      <ProductsSection />
      <TextureBanner />
      <SocialProofSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
