/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const img = (filename) => `/ecospaces/dashboard/${encodeURIComponent(filename)}`;

const EMPTY = 0;
const SELECTED = 1;
const APPLIED = 2;

export default function EcospacesLayoutDemo() {
  const [step, setStep] = useState(EMPTY);
  const score = step === APPLIED ? 87 : 82;

  return (
    <div className="mt-8 rounded-2xl border border-border bg-surface overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/70">
        <p className="font-inter text-xs uppercase tracking-widest text-muted">
          Interactive preview
        </p>
        <p className="font-inter text-xs text-accent">
          Sustainability score {score}
          <span className="text-muted">/100</span>
        </p>
      </div>

      <div className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-5">
        <div className="group relative w-full md:flex-[1.7] h-72 sm:h-80 md:h-[420px] overflow-hidden rounded-xl border border-border bg-ink">
          <img
            src={img("Rectangle 1140.png")}
            alt="Empty event floor plan"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              step === EMPTY ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={img("Group 1079.png")}
            alt="Event floor plan with furniture placed"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              step === EMPTY ? "opacity-0" : "opacity-100"
            }`}
          />

          {step === EMPTY && (
            <button
              type="button"
              onClick={() => setStep(SELECTED)}
              aria-label="Place furniture on the floor plan"
              className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/85 backdrop-blur px-3 py-1.5 font-inter text-xs text-paper/90 transition-transform duration-300 group-hover:-translate-y-0.5">
                Click to place furniture
              </span>
            </button>
          )}

          {step >= SELECTED && (
            <button
              type="button"
              onClick={() => setStep(APPLIED)}
              aria-label="Apply AI suggestion: move the catering space to the back to reduce crowds"
              className={`absolute top-3 left-3 right-3 sm:right-auto sm:w-[75%] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg ${
                step === APPLIED
                  ? "opacity-0 -translate-y-2 pointer-events-none"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <img
                src={img("Alert.png")}
                alt=""
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </button>
          )}

          <img
            src={img("Button.png")}
            alt="Luma AI assistant"
            className="absolute bottom-3 right-3 w-16 sm:w-20 h-auto drop-shadow-lg pointer-events-none"
          />
        </div>

        <div className="relative w-full md:flex-1 h-56 md:h-[420px] overflow-hidden rounded-xl border border-border bg-ink">
          <div
            className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-opacity duration-500 ${
              step === EMPTY ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-inter text-sm text-muted">
              Select a table to see item details and AI recommendations.
            </p>
          </div>
          <img
            src={img("Frame 98726.png")}
            alt="Item details panel: round table, materials, and sustainability rating"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              step === EMPTY ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      <div
        className={`px-4 sm:px-6 transition-all duration-500 ${
          step === APPLIED
            ? "pb-4 sm:pb-6 opacity-100"
            : "pb-0 opacity-0 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <img
          src={img("]_[ (2).png")}
          alt="AI insights: three recommendations to make the event more sustainable"
          className="w-full h-auto rounded-xl border border-border"
        />
      </div>

      {step !== EMPTY && (
        <div className="px-5 pb-4 sm:pb-5 flex justify-end">
          <button
            type="button"
            onClick={() => setStep(EMPTY)}
            className="font-inter text-xs text-muted hover:text-paper transition-colors"
          >
            Reset demo
          </button>
        </div>
      )}
    </div>
  );
}
