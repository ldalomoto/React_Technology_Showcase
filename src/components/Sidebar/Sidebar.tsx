import { useState } from "react";

const menuItems = [
  {
    key: "ui",
    title: "UI Frameworks",
    items: ["Chakra UI", "Material UI", "Tailwind CSS"],
  },
  {
    key: "state",
    title: "State Management",
    items: ["Context API", "MobX", "Zustand"],
  },
  {
    key: "routing",
    title: "Routing",
    items: ["React Router", "TanStack Router"],
  },
  {
    key: "forms",
    title: "Forms & Validation",
    items: ["Formik", "React Hook Form", "Zod"],
  },
  {
    key: "hooks",
    title: "Hooks",
    items: ["useState", "useEffect", "useMemo", "useCallback"],
  },
  {
    key: "testing",
    title: "Testing",
    items: ["Cypress"],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">RTS</h2>

      <nav>
        <div className="menu">
          <div className="menu-item">
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
                    <div key={item} className="submenu-item">
                      {item}
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