import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-10 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-10 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex flex-col items-center text-slate-600 dark:text-neutral-300">
					<div className="mb-5 text-center">
						<Link href="https://growtomax.com/blog" className="block hover:underline mb-2">
							Blogs
						</Link>
						<Link href="https://growtomax.com/" className="block hover:underline">
							Growth Marketing Agnecy
						</Link>
					</div>
					<p>&copy; 2024 GrowtoMax</p>
				</div>
			</Container>
		</footer>
	);
};
