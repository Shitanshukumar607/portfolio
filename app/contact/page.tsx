"use client";

import { pageLoadGSAP } from "@/utils/use-gsap";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;
    const { cleanup } = pageLoadGSAP(containerRef.current);
    return () => cleanup();
  }, []);

  const validateForm = () => {
    const errors: typeof fieldErrors = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      errors.name = "Uh oh! Are you sure that's your name?";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Uh oh! Thats not a valid email.";
    }
    if (!formData.message.trim()) {
      errors.message = "Uh oh! Did you even write your message?";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      const message =
        error instanceof Error ? error.message : "Failed to send message";
      setErrorMessage(message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setStatus("idle");
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main ref={containerRef} className="my-25">
      <div>
        <h1 className="text-5xl sm:text-6xl font-extrabold">
          Contact Shitanshu
        </h1>
        <h2 className="mt-2 text-xl sm:text-2xl">Always happy to chat!</h2>
      </div>

      <div className="mt-8 text-lg">
        <div className="sm:w-3/5 md:w-3/5">
          <div className="mt-6 mb-4 min-h-6">
            {status === "success" ? (
              <div className="flex items-center gap-2 p-3 rounded-md border border-green-200 dark:border-green-800">
                <h3 className="text-green-800 dark:text-green-200">
                  I got your message! I'll get back to you ASAP.
                </h3>
              </div>
            ) : status === "error" ? (
              <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                <h3 className="text-red-800 dark:text-red-200">
                  {errorMessage}
                </h3>
              </div>
            ) : (
              <h3 className="text-foreground">
                Send a message, or email me directly at{" "}
                <Link href="mailto:shitanshukumar639@gmail.com">
                  shitanshukumar639@gmail.com
                </Link>
              </h3>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col relative pb-6">
              <label className="flex items-center mb-2" htmlFor="name">
                First Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                aria-required="true"
                value={formData.name}
                onChange={handleChange}
                className={`p-2 rounded-md text-base border-2 bg-white dark:bg-transparent duration-200 ease-in-out hover:border-neutral-400 focus:border-neutral-400 focus:outline-none transition-none h-12 ${
                  fieldErrors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-300 dark:border-neutral-700"
                }`}
              />
              {fieldErrors.name && (
                <span className="text-sm text-red-500 mt-1 absolute bottom-1">
                  {fieldErrors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col relative pb-6">
              <label className="flex items-center mb-2" htmlFor="email">
                Email <span className="text-red-500 ml-1">*</span>
                <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
                  (So I can respond!)
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                aria-required="true"
                value={formData.email}
                onChange={handleChange}
                className={`p-2 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out hover:border-neutral-400 focus:border-neutral-400 focus:outline-none transition-none h-12 ${
                  fieldErrors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-300 dark:border-neutral-700"
                }`}
              />
              {fieldErrors.email && (
                <span className="text-sm text-red-500 mt-1 absolute bottom-1">
                  {fieldErrors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col relative pb-6">
              <label className="flex items-center mb-2" htmlFor="message">
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                aria-required="true"
                value={formData.message}
                onChange={handleChange}
                className={`p-2 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out hover:border-neutral-400 focus:border-neutral-400 focus:outline-none transition-none align-top h-40 resize-none ${
                  fieldErrors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-neutral-300 dark:border-neutral-700"
                }`}
              />
              {fieldErrors.message && (
                <span className="text-sm text-red-500 mt-1 absolute bottom-1">
                  {fieldErrors.message}
                </span>
              )}
            </div>

            <div className="w-full">
              <button
                className="group relative inline-flex h-12 gap-2 items-center justify-center overflow-hidden rounded-md border-2 border-neutral-300 dark:border-neutral-700 bg-transparent px-6 font-medium text-foreground transition-all shadow-[0px_4px_0.5px_#d4d4d4] dark:shadow-[0px_4px_0.5px_#374151] hover:translate-y-0.5 hover:shadow-none w-full disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? (
                  <>
                    Sending <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send <Send size={20} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
