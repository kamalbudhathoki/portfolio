"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/constants/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "sent";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [values, setValues] = React.useState<FormValues>({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState("");

  const update = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, "_blank");

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setValues({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          value={values.message}
          onChange={update("message")}
          required
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status !== "idle"}
        className="w-full sm:w-fit sm:justify-self-end"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span
              key="idle"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              Send Message <Send className="ml-0.5" />
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span
              key="sending"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              Sending <Loader2 className="animate-spin ml-0.5" />
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span
              key="sent"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              Message Ready <CheckCircle2 className="ml-0.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}