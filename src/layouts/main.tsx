import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-zinc-800 text-slate-200 px-4 pt-4 pb-8 h-full w-full flex flex-row fgrow text-2xl">
      <div className="max-w-screen-lg w-full mx-auto">{children}</div>
    </main>
  );
};
