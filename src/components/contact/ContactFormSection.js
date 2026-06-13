"use client";

import { contactPageContent } from "@/data/siteContent";

const fieldClassName =
  "w-full rounded-sm border border-black/10 bg-black/5 px-4 text-sm text-rlcc-text-main outline-none ring-rlcc-green focus:ring-2";

export default function ContactFormSection() {
  const { form } = contactPageContent;

  return (
    <section className="bg-rlcc-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-rlcc-green-dark sm:text-4xl">
          {form.title}
        </h2>
        <form
          className="mt-10 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div>
            <label htmlFor="contactFullName" className="sr-only">
              Full Name
            </label>
            <input
              id="contactFullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              className={`${fieldClassName} h-12`}
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="sr-only">
              Email Address
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              placeholder="Email Address"
              className={`${fieldClassName} h-12`}
            />
          </div>
          <div>
            <label htmlFor="contactSubject" className="sr-only">
              Subject
            </label>
            <select id="contactSubject" name="subject" className={`${fieldClassName} h-12`}>
              {form.subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contactMessage" className="sr-only">
              Message
            </label>
            <textarea
              id="contactMessage"
              name="message"
              rows={5}
              placeholder="Message"
              className={`${fieldClassName} resize-y py-3`}
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-rlcc-green px-6 text-sm font-semibold text-white transition-colors hover:bg-rlcc-green-dark sm:w-auto"
          >
            {form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
