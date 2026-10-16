// src/stories/KursButton.jsx
export const KursButton = ({ label, variant = 'primary', disabled = false }) => (
  <button className={`btn btn--${variant}`} disabled={disabled}>
    {label}
  </button>
);