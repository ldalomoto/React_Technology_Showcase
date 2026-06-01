import { type View } from "./pages";

export const menuItems: {
  key: string;
  title: string;
  items: {
    label: string;
    view: View;
  }[];
}[] = [
  {
    key: "ui",
    title: "UI Frameworks",
    items: [
      { label: "Chakra UI", view: "chakra" },
      { label: "Material UI", view: "material" },
      { label: "Tailwind CSS", view: "tailwind" },
    ],
  },

  {
    key: "state",
    title: "State Management",
    items: [
      { label: "Context API", view: "context" },
      { label: "MobX", view: "mobx" },
      { label: "Zustand", view: "zustand" },
    ],
  },

  {
    key: "routing",
    title: "Routing",
    items: [
      { label: "React Router", view: "react-router" },
      { label: "TanStack Router", view: "tanstack-router" },
    ],
  },

  {
    key: "forms",
    title: "Forms & Validation",
    items: [
      { label: "Formik", view: "formik" },
      { label: "React Hook Form", view: "react-hook-form" },
      { label: "Zod", view: "zod" },
    ],
  },

  {
    key: "hooks",
    title: "Hooks",
    items: [
      { label: "useState", view: "use-state" },
      { label: "useEffect", view: "use-effect" },
      { label: "useMemo", view: "use-memo" },
      { label: "useCallback", view: "use-callback" },
    ],
  },

  {
    key: "testing",
    title: "Testing",
    items: [
      { label: "Cypress", view: "cypress" },
    ],
  },
];