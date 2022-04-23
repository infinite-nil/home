import type { AppProps } from "next/app";
import "../ui/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen bg-slate-50 text-neutral-700">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
