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
    {
		id: "astrobee_aiaa",
		title: "Unsupervised Change Detection for Space Habitats Using 3D Point Clouds",
		authors: ["Jamie Santos", "Holly Dinkel", "Julia Di", "Paulo Borges", "Marina Moreira", "Oleg Alexandrov", "Brian Coltin", "Trey Smith"],
		venue: "AIAA SciTech Forum",
		year: 2023,
		paperUrl: "https://arc.aiaa.org/doi/abs/10.2514/6.2024-1960",
		codeUrl: "https://github.com/nasa/isaac/tree/master/anomaly/gmm-change-detection",
		videoUrl: "https://www.youtube.com/watch?v=7WHp0dQYG4Y",
		image: {
			src: "/aiaa.png",
			alt: "AIAA - cover",
			href: "https://arc.aiaa.org/doi/abs/10.2514/6.2024-1960",
		},
    },
    {
		id: "thesis",
		title: "Detecting Changes on the ISS Autonomously with 3D Point Clouds: An Unsupervised Learning Approach Using GMM Clustering",
		authors: ["Jamie Santos"],
		venue: "Chalmers University of Technology, Master's Thesis",
		year: 2023,
		paperUrl: "file:///Users/jamie/Downloads/2023%20Jamie%20Santos-3.pdf",
		codeUrl: "https://github.com/nasa/isaac/tree/master/anomaly/gmm-change-detection",
		videoUrl: "https://www.youtube.com/watch?v=7WHp0dQYG4Y",
		image: {
			src: "/thesis.png",
			alt: "Thesis - cover",
			href: "file:///Users/jamie/Downloads/2023%20Jamie%20Santos-3.pdf",
		},
	},
];

export function getPublications() {
	// In future this could be async or read markdown files; keep simple for now
	return publications;
}
