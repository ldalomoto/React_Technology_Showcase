import Home from "../pages/Home/Home";
import ChakraPage from "../pages/UI/Chakra/ChakraPage";
import MobxPage from "../pages/State/Mobx/MobxPage";
import ReactHookFormPage from "../pages/Forms/ReactHookForm/ReactHookFormPage";

export type View =
  | "home"
  | "chakra"
  | "material"
  | "tailwind"
  | "context"
  | "mobx"
  | "zustand"
  | "react-router"
  | "tanstack-router"
  | "formik"
  | "react-hook-form"
  | "zod"
  | "use-state"
  | "use-effect"
  | "use-memo"
  | "use-callback"
  | "cypress";

export const pages: Partial<Record<View, React.ReactNode>> = {
  home: <Home />,
  chakra: <ChakraPage />,
  mobx: <MobxPage />,
  "react-hook-form": <ReactHookFormPage />,
};