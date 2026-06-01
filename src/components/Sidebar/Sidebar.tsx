import { useState } from "react";
import { type View } from "../../config/pages";
import { menuItems } from "../../config/menu";

export default function Sidebar({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<View>>;
}) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">RTS</h2>

      <nav>
        <div className="menu">
          <div
            className="menu-item"
            onClick={() => setView("home")}
          >
            Inicio
          </div>

          {menuItems.map((section) => (
            <div key={section.key} className="menu-section">
              <button
                className="menu-button"
                onClick={() => toggle(section.key)}
              >
                {section.title}
                <span>{open === section.key ? "−" : "+"}</span>
              </button>

              {open === section.key && (
                <div className="submenu">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="submenu-item"
                      onClick={() => setView(item.view as View)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}