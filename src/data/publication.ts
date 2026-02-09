export type Publication = {
	id: string;
	title: string;
	authors?: string[];
	venue?: string;
	year?: string | number;
	paperUrl?: string;
	codeUrl?: string;
	videoUrl?: string;
	image?: {
		src: string;
		alt?: string;
		href?: string; // where the image should link to; defaults to paperUrl if present
	};
};

export const publications: Publication[] = [
	{
		id: "autonomous-manipulation-2025",
		title: "AstrobeeCD: Change detection in microgravity with free-flying robots",
		authors: ["Holly Dinkel", "Julia Di", "Jamie Santos", "Keenan Albee", "Paulo Borges", "Marina Moreira", "Oleg Alexandrov", "Brian Coltin", "Trey Smith"],
		venue: "Acta Astronautica",
		year: 2024,
		paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0094576524003539",
		codeUrl: "https://github.com/hollydinkel/astrobeecd",
		videoUrl: "https://www.youtube.com/watch?v=VfjV-zwFEtU",
		image: {
			src: "/astrobee-iss.gif",
			alt: "AstrobeeCD - cover",
			href: "https://www.sciencedirect.com/science/article/abs/pii/S0094576524003539",
		},
	},
];

export function getPublications() {
	// In future this could be async or read markdown files; keep simple for now
	return publications;
}
