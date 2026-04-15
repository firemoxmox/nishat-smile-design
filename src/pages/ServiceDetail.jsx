import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { services } from "@/lib/servicesData";
import ServiceHero from "../components/services/ServiceHero";
import ServiceProcedure from "../components/services/ServiceProcedure";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceCTA from "../components/services/ServiceCTA";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pb-16 lg:pb-0">
      <ServiceHero service={service} image={null} imageLoading={false} />
      <ServiceProcedure service={service} />
      <ServiceBenefits service={service} />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} relatedServices={related} />
    </div>
  );
}
