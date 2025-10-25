
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© PFOTC</div>
        <div className="flex gap-4">
          <a href="mailto:contact@pfotc.com" className="hover:text-white">contact@pfotc.com</a>
          <a href="https://pfotc.com" className="hover:text-white">pfotc.com</a>
          <a href="https://www.linkedin.com/company/pfotc" className="hover:text-white" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
