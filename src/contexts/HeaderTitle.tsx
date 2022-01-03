import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface HeaderTitleProviderProps {
  children?: ReactNode;
}

interface HeaderTitleProps {
  title?: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const HeaderTitleContext = createContext<HeaderTitleProps>({
  title: "",
  setTitle: () => {},
});

export default function HeaderTitleProvider({
  children,
}: HeaderTitleProviderProps) {
  const [title, setTitle] = useState("");

  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
}

export function useHeaderTitle() {
  const context = useContext(HeaderTitleContext);
  if (!context)
    throw new Error(
      "useTheme must be used within a ThemeProvider\n/src/contexts/HeaderTitle.tsx"
    );
  const { title, setTitle } = context;
  return { title, setTitle };
}
