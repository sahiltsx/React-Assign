export default function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}