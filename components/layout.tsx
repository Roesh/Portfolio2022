import Head from "next/head";
import {
  AppShell,
  Header,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorageValue } from '@mantine/hooks';
import NavHeader from "./header";
import VantaWrapper from "./vanta-wrapper";

export type ColorScheme = 'dark' | 'light';

export default function Layout({ children }) {

  const [value, setValue] = useLocalStorageValue<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });
  // TODO add https://icons.modulz.app/
  return (
    <>
      <Head>
        <title>Roshan&apos;s portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer type="text/javascript" src="three.r119.min.js"></script>
        <script defer type="text/javascript" src="vanta.net.min.js"></script>
      </Head>
      <VantaWrapper>
        <MantineProvider theme={{ colorScheme: value }}>
          <AppShell
            padding="md"   
            styles={(theme) => ({
              main: { height: "100vh" },
            })}         
            header={
              <Header height={60} padding="xs">
                {/* Header content */}
                <NavHeader setValue={setValue}/>
              </Header>
            }
          >
            {children}
          </AppShell>
        </MantineProvider>
      </VantaWrapper>
    </>
  );
}
