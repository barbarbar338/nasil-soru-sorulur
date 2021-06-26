import { TiWarning, TiArrowForward } from "react-icons/ti";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";
import { Link } from "../Link";
import { FC } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const links = [
	{
		href: "/",
		placeholder: "Ana Sayfa",
	},
	{
		href: "/hakkinda",
		placeholder: "Site Hakkında",
	},
	{
		href: "https://github.com/barbarbar338/nasil-soru-sorulur",
		placeholder: "Kaynak Kodları",
	},
	{
		href: "https://github.com/barbarbar338",
		placeholder: "Yapımcı",
	},
];

export const Navbar: FC = () => {
	const [_, copy] = useCopyToClipboard();

	const copyShareURL = () => {
		copy(window.location.href);
		toast.success(
			"Bu sayfayı paylaşabilmeniz için gerekli olan URL panonuza kopyalandı!",
		);
	};

	const onWarning = () => {
		toast.warning(
			"Daha efektif bir kullanım için siteye bilgisayardan girmenizi tavsiye ederiz.",
		);
	};

	return (
		<div className="navbar shadow-lg col-span-1 md:col-span-2 xl:col-span-3 bg-neutral-focus text-neutral-content rounded-box">
			<div className="flex-none lg:hidden visible">
				<button
					onClick={onWarning}
					className="btn btn-square btn-ghost"
				>
					<TiWarning className="inline-block w-6 h-6 stroke-current" />
				</button>
			</div>
			<div className="flex-none px-2 mx-2">
				<Link
					href="/"
					placeholder="Nasıl Soru Sorulur"
					className="text-lg font-bold cursor-pointer"
				/>
			</div>
			<div className="flex flex-1 px-2 mx-2">
				<div className="items-stretch hidden lg:flex">
					{links.map(({ href, placeholder }, idx) => (
						<Link
							href={href}
							placeholder={placeholder}
							key={idx}
							className="btn btn-ghost btn-sm rounded-btn"
						/>
					))}
				</div>
			</div>
			<div className="flex-none">
				<ThemeSwitcher />
				<div
					data-tip="Bu Sayfayı Paylaş"
					className="tooltip hidden md:block"
				>
					<button
						onClick={copyShareURL}
						className="btn btn-square btn-ghost"
					>
						<TiArrowForward className="inline-block w-6 h-6 stroke-current" />
					</button>
				</div>
			</div>
		</div>
	);
};
