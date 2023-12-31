import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export const getServerSideProps = withPageAuthRequired();
