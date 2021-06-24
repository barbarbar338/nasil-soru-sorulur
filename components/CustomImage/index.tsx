import { FC } from "react";
import Img from "next/image";

export interface IImageProps {
	src: StaticImageData;
}

export const CustomImage: FC<IImageProps> = ({ src }) => {
	return (
		<Img
			src={src.src}
			alt={src.placeholder}
			width={src.width}
			height={src.height}
			placeholder="blur"
			blurDataURL={(src as any).blurDataURL}
			draggable={false}
		/>
	);
};
