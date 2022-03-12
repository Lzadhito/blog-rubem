import { AppProps } from "next/app";
import Navbar from "@/lib/components/Navbar";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div id="negPadWrapper" className="-mt-1">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
