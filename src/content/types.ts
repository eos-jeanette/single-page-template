export interface CtaLink {
  label: string;
  href: string;
}

export interface Logo {
  name: string;
  image: string;
  alt: string;
}

export interface NavbarContent {
  logoImage: string;
  logoAlt: string;
  companyName: string;
  ctaLabel: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  tags: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  logos: Logo[];
}

export type ServiceIconName = "cube" | "sync" | "layers" | "eye" | "network";

export interface ServiceTab {
  slug: string;
  icon: ServiceIconName;
  label: string;
  image: string;
  imageAlt: string;
  body: string;
}

export interface ServicesContent {
  heading: string;
  description: string;
  tabs: ServiceTab[];
}

export interface TeamHighlightContent {
  heading: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  authorAvatarAlt: string;
}

export interface CaseStudySlide {
  stat: string;
  statLabel: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export interface CaseStudiesContent {
  heading: string;
  description: string;
  tabs: string[];
  slides: CaseStudySlide[];
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutBlurbContent {
  heading: string;
  paragraphs: string[];
  images: AboutImage[];
  ctaLabel: string;
}

export interface InsightItem {
  date: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
}

export interface InsightsContent {
  heading: string;
  description: string;
  items: InsightItem[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
}

export interface TestimonialsContent {
  heading: string;
  quotes: Testimonial[];
}

export interface ContactCtaContent {
  heading: string;
  description: string;
  submitLabel: string;
  hearAboutUsOptions: string[];
}

export interface OpeningHoursEntry {
  day: string;
  hours: string;
}

export type SocialPlatform = "facebook" | "linkedin" | "instagram" | "twitter";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface FooterContent {
  logoImage: string;
  logoAlt: string;
  companyName: string;
  tagline: string;

  servicesHeading: string;
  servicesLinks: CtaLink[];

  hoursHeading: string;
  hours: OpeningHoursEntry[];

  contactHeading: string;
  address: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];

  showNewsletter: boolean;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterSubmitLabel: string;

  legalLinks: CtaLink[];
  copyright: string;
}

export interface HomepageContent {
  navbar: NavbarContent;
  hero: HeroContent;
  services: ServicesContent;
  teamHighlight: TeamHighlightContent;
  caseStudies: CaseStudiesContent;
  aboutBlurb: AboutBlurbContent;
  insights: InsightsContent;
  testimonials: TestimonialsContent;
  contactCta: ContactCtaContent;
  footer: FooterContent;
}
