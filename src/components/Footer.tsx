import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Hansini Gundavarapu</p>
        <SocialIcons />
      </div>
    </footer>
  );
}
