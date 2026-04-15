import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { services } from "@/lib/servicesData";
import ServiceHero from "../components/services/ServiceHero";
import ServiceProcedure from "../components/services/ServiceProcedure";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceCTA from "../components/services/ServiceCTA";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [serviceImage, setServiceImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (!service) return;
    setImageLoading(true);
    base44.integrations.Core.GenerateImage({ prompt: service.imagePrompt })
      .then((res) => setServiceImage(res.url))
      .finally(() => setImageLoading(false));
  }, [slug]);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pb-16 lg:pb-0">
      <ServiceHero
        service={service}
        image={serviceImage}
        imageLoading={imageLoading}
      />
      <ServiceProcedure service={service} />
      <ServiceBenefits service={service} />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} relatedServices={related} />
    </div>
  );
}
