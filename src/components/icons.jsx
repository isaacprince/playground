export function SocialIcon({ name, className = "w-5 h-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "LinkedIn":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.75h3.48V21H3.4V8.75Zm6.2 0h3.34v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.48v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V21H9.6V8.75Z" />
        </svg>
      );
    case "Dribbble":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M4.5 9.5c4.5 1.4 9.7 1.2 14.6-.6M3.6 14.8c5.6-1.4 10.9-.6 14.9 2.3M9.8 3.2c2.9 4 4.4 9 4.1 17.4" />
        </svg>
      );
    case "Behance":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M2 7h6.3c3.6 0 4.5 2.9 2.9 4.5 2.2.6 3 2.3 3 3.8 0 2.3-1.7 4-4.7 4H2V7Zm3 2.6v2.9h2.9c1.9 0 1.9-2.9 0-2.9H5Zm0 5.3v3.2h3.2c2.1 0 2.1-3.2 0-3.2H5ZM14.8 8.4h5.6V10h-5.6V8.4ZM22 15.6h-6.9c.2 1.6 2.3 2.2 3.7 1.1h2.9c-.7 2-2.5 3-4.9 3-3 0-5-2-5-4.9 0-2.9 2-5.1 4.9-5.1 3.1 0 5.4 2.4 5.3 5.9Zm-6.9-1.9h4c-.2-1.4-1-2.1-2-2.1s-1.8.8-2 2.1Z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "X":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M4 3h4.4l4 5.6L17 3h3l-6.4 8.2L21 21h-4.4l-4.4-6.1L6.8 21H4l6.9-8.7L4 3Z" />
        </svg>
      );
    case "Medium":
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M3 6.5 7.6 6l4.1 9.3L15.3 6h4.4v.4l-1.3 1.2c-.1.1-.2.3-.1.4v9.9c0 .2 0 .3.1.4l1.3 1.2v.4h-6.4v-.4l1.3-1.3c.1-.1.1-.2.1-.4V9.2l-3.6 9.3h-.5L7 9.2v6.2c0 .3.1.6.4.9l1.7 2.1v.4H3.9v-.4l1.7-2.1c.2-.3.3-.6.3-.9V8.4c0-.3-.1-.6-.4-.9L3.9 6.9V6.5H3Z" />
        </svg>
      );
    case "Mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "Arrow":
      return (
        <svg {...props}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case "Sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </svg>
      );
    case "Moon":
      return (
        <svg {...props}>
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
        </svg>
      );
    default:
      return null;
  }
}
