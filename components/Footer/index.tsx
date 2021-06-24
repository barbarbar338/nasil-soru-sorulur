import { FC } from "react";
import { Link } from "../Link";
import { TiHeart } from "react-icons/ti";

export const Footer: FC = () => (
	<div className="flex-row col-span-1 md:col-span-2 xl:col-span-3 text-base-content">
		<div className="alert bg-base-100">
			<div className="flex-1">
				<label className="mx-3">
					&copy; {new Date().getFullYear()} Tüm hakları saklıdır.{" "}
				</label>
			</div>
			<div className="flex-none">
				<label>
					<Link
						href="https://github.com/barbarbar338"
						placeholder="barbarbar338"
						className="cursor-pointer text-primary"
					/>{" "}
					tarafından{" "}
					<TiHeart className="inline-block w-6 h-6 stroke-current text-pink-500" />{" "}
					ile yapılmıştır.
				</label>
			</div>
		</div>
	</div>
);
