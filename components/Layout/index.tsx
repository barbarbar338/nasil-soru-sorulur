import { FC, useRef } from "react";
import { Fragment } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Head from "next/head";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, useTheme } from "next-themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export interface ILayoutProps {
	title: string;
}

export const Layout: FC<ILayoutProps> = ({ title, children }) => {
	const { theme } = useTheme();
	const containerRef = useRef(null);

	return (
		<Fragment>
			<Head>
				<title>{title} | Nasıl Soru Sorulur</title>
			</Head>
			<ThemeProvider enableSystem={false} defaultTheme="cyberpunk">
				<LazyMotion features={domAnimation}>
					<LocomotiveScrollProvider
						options={{
							smooth: true,
						}}
						containerRef={containerRef}
					>
						<div
							data-scroll-container
							ref={containerRef}
							data-theme={theme}
							className="grid grid-cols-1 gap-6 p-5 lg:p-10 xl:grid-cols-3 bg-base-200"
						>
							<Navbar />
							{children}
							<Footer />
						</div>
					</LocomotiveScrollProvider>
				</LazyMotion>
				<ToastContainer />
			</ThemeProvider>
		</Fragment>
	);
};
