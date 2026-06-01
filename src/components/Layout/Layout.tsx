import Sidebar from "../Sidebar/Sidebar";
import { type View } from "../../config/pages";

export default function Layout({
  children,
  setView,
}: {
  children: React.ReactNode;
  setView: React.Dispatch<React.SetStateAction<View>>;
}) {
  return (
    <div className="app-layout">
      <Sidebar setView={setView} />
      <main className="content">{children}</main>
    </div>
  );
}