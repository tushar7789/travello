import Image from "next/image";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Content />
      <Footer />
    </div>
  );
}
