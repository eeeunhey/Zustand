// src/components/HeartIcon.jsx
export default function HeartIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21s-7.5-4.8-9.6-8.7A5.6 5.6 0 0 1 12 6.4a5.6 5.6 0 0 1 9.6 5.9C19.5 16.2 12 21 12 21z" />
    </svg>
  );
}
