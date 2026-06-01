import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
}