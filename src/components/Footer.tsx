import { ADDRESS } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} FiMa Invasives. All rights reserved.</p>
        <p>{ADDRESS}</p>
        <p>Made by Hasib</p>
      </div>
    </footer>
  );
}