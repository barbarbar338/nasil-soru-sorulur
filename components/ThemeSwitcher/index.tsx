import { FC } from "react";
import { useTheme } from "next-themes";

const themes = [
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
];

export const ThemeSwitcher: FC = () => {
	const { setTheme } = useTheme();

	return (
		<div className="hidden md:block dropdown dropdown-left dropdown-hover">
			<div tabIndex={0} className="btn btn-ghost rounded-btn">
				Tema
			</div>

			<ul className="menu compact h-96 w-52 overflow-y-auto dropdown-content">
				{themes.map((theme, idx) => (
					<li key={idx}>
						<button onClick={() => setTheme(theme)} className="btn">
							{theme}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
