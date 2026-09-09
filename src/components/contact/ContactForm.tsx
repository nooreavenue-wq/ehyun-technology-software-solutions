"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a little more about your project"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSuccess(true);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} className="field-input" placeholder="Your name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" className="field-input" placeholder="you@company.com" />
          </Field>
          <Field label="Company (optional)" error={errors.company?.message}>
            <input {...register("company")} className="field-input" placeholder="Company name" />
          </Field>
          <Field label="Project Type" error={errors.projectType?.message}>
            <select {...register("projectType")} className="field-input">
              <option value="">Select a type</option>
              {["Web Development", "Mobile Application", "Custom Software", "SaaS Platform", "E-Commerce", "AI & Automation", "Other"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Estimated Budget" error={errors.budget?.message}>
          <select {...register("budget")} className="field-input">
            <option value="">Select a range</option>
            {["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"].map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>

        <Field label="Project Details" error={errors.message?.message}>
          <textarea {...register("message")} rows={5} className="field-input resize-none" placeholder="Tell us about your business, goals, and what you're looking to build" />
        </Field>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:opacity-50">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-ink-surface border border-signal/30 max-w-md w-full p-10 text-center"
            >
              <button onClick={() => setSuccess(false)} aria-label="Close" className="absolute top-5 right-5 text-paper/40 hover:text-paper">
                <X size={20} />
              </button>
              <CheckCircle2 className="mx-auto text-signal-light" size={40} strokeWidth={1.2} />
              <h3 className="font-display text-2xl font-semibold text-paper mt-6">Message Received</h3>
              <p className="text-paper/55 text-sm mt-4 leading-relaxed">
                Thank you for reaching out. A member of the Ehyun team will get back to you
                shortly to discuss your project.
              </p>
              <button onClick={() => setSuccess(false)} className="btn-outline w-full mt-8">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-input">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-[11px] text-red-400 mt-1.5 block">{error}</span>}
    </label>
  );
}
