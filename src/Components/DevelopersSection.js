import React from "react";
import {
  Code,
  BookOpen,
  TerminalSquare,
  Package,
  ServerCog,
} from "lucide-react";
import "../External CSS/DevelopersSection.css";

const devFeatures = [
  {
    icon: <Code size={36} />,
    title: "REST APIs",
    description:
      "Secure & versioned endpoints for seamless payment integration.",
  },
  {
    icon: <BookOpen size={36} />,
    title: "Documentation",
    description: "Interactive docs, code samples, and quickstart guides.",
  },
  {
    icon: <TerminalSquare size={36} />,
    title: "SDKs & CLI",
    description:
      "Official SDKs (Node, Java, Python, PHP, Go) and CLI for dev workflows.",
  },
  {
    icon: <Package size={36} />,
    title: "Webhooks",
    description: "Reliable event-based notifications for real-time processing.",
  },
  {
    icon: <ServerCog size={36} />,
    title: "Sandbox Mode",
    description:
      "Test payments safely using our fully-featured simulated environment.",
  },
];

const DevelopersSection = () => (
  <section className="dev-section">
    <div className="dev-container">
      <div className="dev-header">
        <h5>For Developers</h5>
        <h2>Integrate Seamless Payments in Minutes</h2>
        <p>
          Whether you're launching in days or scaling to millions, our toolkit
          gives you the speed and control you need.
        </p>
        <a href="/docs" className="dev-cta">View Docs →</a>
      </div>

      <div className="dev-grid">
        {devFeatures.map((feature, idx) => (
          <div className="dev-card" key={idx}>
            <div className="dev-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DevelopersSection;
