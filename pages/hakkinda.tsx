import { Layout } from "../components/Layout";
import type { NextPage } from "next";
import { Hero } from "../components/Hero";

const AboutPage: NextPage = () => {
	return (
		<Layout title="Site Hakkında">
			<Hero />
		</Layout>
	);
};

export default AboutPage;
