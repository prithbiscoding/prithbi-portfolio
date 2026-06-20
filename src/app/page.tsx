import ScrollyCanvas from "@/components/ScrollyCanvas";
import OverlayUI from "@/components/OverlayUI";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <ScrollyCanvas />
      
      <div className="relative z-10">
        <OverlayUI />
        <Sections />
      </div>
    </main>
  );
}
