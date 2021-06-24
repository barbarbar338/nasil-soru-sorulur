import { FC, Fragment } from "react";
import { IPostData } from "../../lib/posts";
import { Link } from "../Link";

export interface IPostsProps {
	posts: IPostData[];
}
export const Posts: FC<IPostsProps> = ({ posts }) => (
	<Fragment>
		{posts.map(({ id, date, title }) => (
			<div key={id} className="card shadow-lg compact side bg-base-100">
				<div className="flex-row items-center space-x-4 card-body">
					<div className="flex-1">
						<h2 className="card-title text-primary">{title}</h2>
						<p className="text-base-content text-opacity-40">
							{date}
						</p>
					</div>
					<div className="flex-0">
						<Link
							href={`/post/${id}`}
							placeholder="Devamını Oku"
							className="btn btn-sm"
						/>
					</div>
				</div>
			</div>
		))}
	</Fragment>
);
