export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Christian Francis. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React, TypeScript, Tailwind CSS, and Framer Motion. Hosted on Netlify,
        using serverless Netlify Functions for backend tasks like email routing
        via Resend and React Email.
      </p>
    </footer>
  );
}
