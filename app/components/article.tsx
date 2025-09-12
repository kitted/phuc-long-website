import Link from "next/link";

type Props = {
	title: string;
	slug?: string;
	description: string;
	calltoaction?: string;
};

export const Article: React.FC<Props> = ({ title, slug,  description, calltoaction}) => {
	return (
		<Link href={`${slug}`}>
			<article className="p-4 md:p-8">
				<h2 className="z-20 text-2xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
					{title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{description}
				</p>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{calltoaction}
				</p>
			</article>
		</Link>
	);
};
