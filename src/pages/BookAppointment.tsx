import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Clock3,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import DoctorCard from "../components/booking/DoctorCard";
import ServicePicker from "../components/booking/ServicePicker";
import DatePicker from "../components/booking/DatePicker";
import TimePicker from "../components/booking/TimePicker";
import PatientDetails from "../components/booking/PatientDetails";

export default function BookAppointment() {
  const [form, setForm] = useState({
    patient_name: "",
    phone: "",
    email: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Appointment.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  const isValid = form.patient_name.trim() && form.phone.trim() && form.service;

  const summaryDate = form.preferred_date
    ? format(new Date(form.preferred_date + "T12:00:00"), "EEE, d MMM yyyy")
    : "";

  const summary = {
    service: form.service,
    date: summaryDate,
    time: form.preferred_time,
  };

  if (submitted) {
    return (
      <div className="pt-20 lg:pt-24 pb-16 lg:pb-0 min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe]">
        <section className="min-h-[80vh] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-400/30"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Booking Confirmed! 🎉
            </h2>
            <p className="text-muted-foreground text-lg mb-3 leading-relaxed">
              Thank you,{" "}
              <strong className="text-foreground">{form.patient_name}</strong>!
              <br />
              We've received your appointment request.
            </p>

            {(form.service || summaryDate || form.preferred_time) && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-border/40 p-6 mb-8 text-left shadow-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  Appointment Summary
                </p>
                {form.service && (
                  <div className="flex justify-between py-2 border-b border-border/30 text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold text-foreground">
                      {form.service}
                    </span>
                  </div>
                )}
                {summaryDate && (
                  <div className="flex justify-between py-2 border-b border-border/30 text-sm">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-semibold text-foreground">
                      {summaryDate}
                    </span>
                  </div>
                )}
                {form.preferred_time && (
                  <div className="flex justify-between py-2 text-sm">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-semibold text-foreground">
                      {form.preferred_time}
                    </span>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-8">
              Our team will confirm your slot on WhatsApp within a few minutes.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+919905056677">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-2"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call Us
                </Button>
              </a>
              <a
                href={`https://wa.me/919905056677?text=Hello%2C%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(form.service || "a dental service")}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 shadow-lg shadow-green-500/20">
                  <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                </Button>
              </a>
              <Link to="/">
                <Button variant="ghost" className="rounded-full px-6">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-0 min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
            <AlertCircle className="w-3.5 h-3.5" />
            Limited slots available today — book now to secure yours
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-3">
            Book Your Appointment
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            With Dr. Kamil Shahnawaz · MDS Dental Surgeon · Darbhanga
          </p>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT: Doctor card — sticky on desktop */}
            <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
              <DoctorCard summary={summary} />
            </div>

            {/* RIGHT: Booking steps */}
            <div className="flex-1 space-y-6">
              {/* Step 1: Service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-black/5 p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    1
                  </div>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <ServicePicker
                  selected={form.service}
                  onSelect={(v) => handleChange("service", v)}
                />
              </motion.div>

              {/* Step 2: Date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-black/5 p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center text-sm font-bold text-secondary">
                    2
                  </div>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <DatePicker
                  selected={form.preferred_date}
                  onSelect={(v) => handleChange("preferred_date", v)}
                />
              </motion.div>

              {/* Step 3: Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-black/5 p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                    3
                  </div>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <TimePicker
                  selected={form.preferred_time}
                  onSelect={(v) => handleChange("preferred_time", v)}
                />
              </motion.div>

              {/* Step 4: Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-black/5 p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-600">
                    4
                  </div>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <PatientDetails form={form} onChange={handleChange} />
              </motion.div>

              {/* Step 5: Submit CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl border border-primary/15 p-6 lg:p-8"
              >
                {/* Live mini-summary */}
                {isValid && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-white rounded-2xl border border-border/40 p-4 mb-5 text-sm"
                  >
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CalendarCheck className="w-3.5 h-3.5" /> Booking Summary
                    </p>
                    <div className="space-y-1 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Patient:</strong>{" "}
                        {form.patient_name}
                      </p>
                      {form.service && (
                        <p>
                          <strong className="text-foreground">Service:</strong>{" "}
                          {form.service}
                        </p>
                      )}
                      {summaryDate && (
                        <p>
                          <strong className="text-foreground">Date:</strong>{" "}
                          {summaryDate}
                        </p>
                      )}
                      {form.preferred_time && (
                        <p>
                          <strong className="text-foreground">Time:</strong>{" "}
                          {form.preferred_time}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={submitting || !isValid}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-2xl h-14 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 disabled:opacity-40 disabled:translate-y-0"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Confirming your booking...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Confirm Appointment
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <p className="text-sm text-muted-foreground">
                    We'll confirm your booking instantly via{" "}
                    <span className="text-green-600 font-semibold">
                      WhatsApp
                    </span>
                  </p>
                </div>

                <div className="flex justify-center gap-6 mt-5 pt-5 border-t border-border/30 text-xs text-muted-foreground">
                  <a
                    href="tel:+919905056677"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Us
                  </a>
                  <a
                    href="https://wa.me/919905056677?text=Hello%2C%20I%20need%20help%20booking%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Help
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
