import { Layout } from "../../components/Layout";
import { getAllPostIds, getPostData, IPostData } from "../../lib/posts";
import type { GetStaticPropsContext, NextPage } from "next";
import { Post } from "../../components/Post";

export interface IPostPageProps {
	post: IPostData;
}

const PostPage: NextPage<IPostPageProps> = ({ post }) => {
	return (
		<Layout title={post.title}>
			<Post post={post} />
		</Layout>
	);
};

export async function getStaticPaths() {
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
	const post = await getPostData((params as any).id);

	return {
		props: {
			post,
		},
	};
}

export default PostPage;
