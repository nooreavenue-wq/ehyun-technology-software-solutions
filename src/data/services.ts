import { Globe, Smartphone, Code2, Layers, ShoppingCart, LayoutDashboard, Sparkles, Plug, Cloud } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: typeof Globe;
  summary: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    summary: "Modern websites and web applications built on reliable technical architecture.",
    description:
      "We design and develop modern websites and web applications that combine strong user experience with reliable technical architecture — from corporate sites to full business platforms.",
    capabilities: ["Corporate websites", "Business portals", "Customer platforms", "Web applications", "Dashboards", "Management systems", "Custom online platforms"],
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Development",
    icon: Smartphone,
    summary: "Cross-platform mobile applications for businesses reaching customers on the move.",
    description:
      "We develop modern mobile applications for businesses that want to provide digital services through smartphones and tablets, supporting both iOS and Android from a single codebase.",
    capabilities: ["Customer applications", "Business applications", "Service platforms", "E-commerce applications", "Booking applications", "Custom mobile solutions"],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: Code2,
    summary: "Tailored systems built around your organization's specific workflow.",
    description:
      "Every business has different processes and requirements. When standard software cannot meet those requirements, we analyze the business process and build a solution designed around it.",
    capabilities: ["Process analysis", "System architecture design", "Workflow automation", "Internal tools", "Legacy modernization"],
  },
  {
    slug: "saas-platforms",
    title: "SaaS & Platform Development",
    icon: Layers,
    summary: "Scalable software platforms designed to serve multiple users and organizations.",
    description:
      "We build scalable software platforms designed to serve multiple users, businesses, or organizations — from subscription products to multi-tenant business tools.",
    capabilities: ["Subscription-based platforms", "Multi-user systems", "Dashboards", "Customer portals", "Business management tools", "Cloud-based applications"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    summary: "Full commerce platforms covering products, orders, payments, and operations.",
    description:
      "We develop e-commerce platforms that support product management, customer accounts, orders, payments, inventory-related workflows, administration, and other business requirements.",
    capabilities: ["Product & catalog management", "Checkout & payments", "Customer accounts", "Inventory workflows", "Order administration"],
  },
  {
    slug: "admin-dashboards",
    title: "Admin Dashboards & Business Systems",
    icon: LayoutDashboard,
    summary: "Centralized systems for managing operations through structured dashboards.",
    description:
      "We create centralized management systems that allow organizations to manage their operations through structured dashboards — user management, analytics, reporting, and administrative controls.",
    capabilities: ["User management", "Order management", "Analytics & reporting", "Content management", "Financial views", "Operational workflows"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    icon: Sparkles,
    summary: "Intelligent features that automate processes and improve user experience.",
    description:
      "We integrate modern AI capabilities into software products to help businesses automate processes, improve user experiences, analyze information, and create intelligent digital services.",
    capabilities: ["AI assistants", "Recommendation systems", "Document intelligence", "Automated workflows", "Content generation", "AI-powered features"],
  },
  {
    slug: "api-integration",
    title: "API & Third-Party Integration",
    icon: Plug,
    summary: "Connecting your product to the payment, auth, and data services it depends on.",
    description:
      "Modern software often depends on external services. We integrate payment gateways, authentication systems, communication services, maps, analytics, AI services, and cloud platforms.",
    capabilities: ["Payment gateways", "Authentication systems", "Communication services", "Maps & location", "Analytics", "Cloud platform APIs"],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    icon: Cloud,
    summary: "Production infrastructure, CI/CD, and ongoing technical maintenance.",
    description:
      "We support the deployment and maintenance of applications using modern cloud and hosting infrastructure, from initial environment setup through ongoing monitoring.",
    capabilities: ["Cloud hosting", "Domain configuration", "Environment management", "CI/CD", "Production deployment", "Monitoring & maintenance"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
