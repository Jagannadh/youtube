// @ts-ignore
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Videos />
      </div>
    </main>
  );
}
