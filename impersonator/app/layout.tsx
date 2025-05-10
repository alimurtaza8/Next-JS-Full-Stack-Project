import { IndexLayout as IndexLayoutC } from "@/components/layouts/IndexLayout";
import { getMetadata } from "@/utils";

export const metadata = getMetadata({
  title: "WalletConnect Pro",
  description:
    "Connect your wallet securely to any dApp using Ethereum addresses",
  images: "https://www.impersonator.xyz/metaIMG.PNG",
});

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IndexLayoutC>{children}</IndexLayoutC>;
}
