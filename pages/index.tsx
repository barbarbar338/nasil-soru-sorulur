import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";
import { Hero } from "../components/Hero";
import { getPosts, IPostData } from "../lib/posts";
import type { NextPage } from "next";

export interface IIndexPageProps {
	posts: IPostData[];
}

const Home: NextPage<IIndexPageProps> = ({ posts }) => {
	return (
		<Layout title="Ana Sayfa">
			<Posts posts={posts} />
			<Hero />
		</Layout>
	);
};

export async function getStaticProps() {
	const posts = getPosts();
	return {
		props: {
			posts,
		},
	};
}

export default Home;
