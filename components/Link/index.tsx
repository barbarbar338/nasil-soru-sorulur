import NextLink from "next/link";
import { FC } from "react";

export interface ILinkProps {
	href: string;
	placeholder: string;
	className?: string;
}

export const Link: FC<ILinkProps> = ({ href, placeholder, className }) =>
	href.startsWith("http") ? (
		<a href={href} rel="noreferrer" target="_blank" className={className}>
			{placeholder}
		</a>
	) : (
		<NextLink href={href}>
			<span className={className}>{placeholder}</span>
		</NextLink>
	);
