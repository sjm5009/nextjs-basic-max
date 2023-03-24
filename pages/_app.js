import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    console.log(router);

    return <Component {...pageProps} />;
}
