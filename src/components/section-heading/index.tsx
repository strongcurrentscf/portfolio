export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-center text-[2rem] font-medium capitalize mb-8">
      {children}
    </p>
  );
}
