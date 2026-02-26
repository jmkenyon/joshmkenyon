import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.target);
    formData.append("access_key", "9566e749-5c4f-4ee8-bfee-e87b43e9bda5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Thanks! I'll be in touch soon.");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="w-full px-[8%] md:px-[12%] py-24 scroll-mt-10 bg-slate-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's build together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Have a project in mind? Drop me a line.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={onSubmit}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input
                className="w-full px-4 py-3.5 outline-none rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-blue-400"
                type="text"
                placeholder="John Doe"
                required
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input
                className="w-full px-4 py-3.5 outline-none rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-blue-400"
                type="email"
                placeholder="john@example.com"
                required
                name="email"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3.5 outline-none rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none dark:bg-zinc-800 dark:border-zinc-700 dark:focus:border-blue-400"
              required
              name="message"
            ></textarea>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-slate-900 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed dark:bg-white dark:text-zinc-900 dark:hover:bg-slate-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Image src={assets.right_arrow_white} alt="arrow" className="w-4 dark:invert" />}
          </button>
          
          {result && (
            <p className="mt-6 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
              {result}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;