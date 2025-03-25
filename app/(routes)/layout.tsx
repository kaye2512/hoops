import Footer from "./dashboard/_components/footer";
import "../globals.css";
import { ModalProvider } from "@/provider/modal-provider";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ModalProvider />
      {children}
      <Footer />
    </>
  );
}
