import { FC } from "react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "react-use";
import { IPostData } from "../../lib/posts";

export interface IPostProps {
	post: IPostData;
}

export const Post: FC<IPostProps> = ({ post }) => {
	const [_, copy] = useCopyToClipboard();

	const copyShareURL = () => {
		copy(window.location.href);
		toast.success(
			"Bu postu paylaşabilmeniz için gerekli olan URL panonuza kopyalandı!",
		);
	};

	return (
		<div className="card row-span-2 shadow-lg col-span-1 md:col-span-2 xl:col-span-3 bg-base-100">
			<div className="card-body">
				<h2 className="my-4 text-4xl font-bold card-title text-primary">
					{post.title}
				</h2>
				<div
					className="text-base-content prose-xl"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
				<div className="justify-end space-x-2 card-actions">
					<div data-tip="Bu Postu Paylaş" className="tooltip">
						<button onClick={copyShareURL} className="btn">
							Paylaş!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
