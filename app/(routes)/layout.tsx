import Footer from "../../components/section/footer";
import "../globals.css";
import { ModalProvider } from "@/provider/modal-provider";

export default function DashboardLayout({
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
