import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
	return (
		<main className="bg-slate-800 text-slate-200 px-4 h-full w-full flex flex-row fgrow font-sans">
			<div className="max-w-screen-lg w-full mx-auto">{children}</div>
		</main>
	);
};
