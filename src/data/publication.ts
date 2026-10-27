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
		id: "entropy-2026",
		title: "Entropy-Augmented Multi-Objective Policy Optimization in Multiagent Systems",
		authors: ["Jamie Santos", "Alp Aydeniz", "Raghav Thakar", "Kagan Tumer"],
		venue:
			"The International Joint Conference on Artifical Intelligence (IJCAI-ECAI) 2026 - Multi-Objective Decision Making (MODeM) Workshop",
		year: 2026,
		paperUrl: "https://modem2026.vub.ac.be/papers/MODeM_2026_paper_13.pdf",
		codeUrl: "https://github.com/ayhanalp/NoveltyMOMA",
		videoUrl: "https://www.youtube.com/watch?v=53k3qOwV9pE",
		image: {
			src: "/entropy_26.png",
			alt: "Entropy-Augmented Multi-Objective Policy Optimization - cover",
			href: "https://openreview.net/forum?id=fPPqJcCnBy",
		},
	},
	{
		id: "reward-sparsity-2026",
		title:
			"Reward Sparsity in Multi-Objective Reinforcement Learning: A Taxonomy and Key Challenges",
		authors: ["Raghav Thakar", "Jamie Santos", "Alp Aydeniz", "Gaurav Dixit", "Kagan Tumer"],
		venue:
			"The International Joint Conference on Artifical Intelligence (IJCAI-ECAI) 2026 - Multi-Objective Decision Making (MODeM) Workshop",
		year: 2026,
		paperUrl: "https://openreview.net/pdf?id=97fh9thi82",
		image: {
			src: "/modem_26.jpg",
			alt: "Reward Sparsity - cover",
			href: "https://openreview.net/forum?id=97fh9thi82",
		},
	},
	{
		id: "autonomous-manipulation-2025",
		title: "AstrobeeCD: Change detection in microgravity with free-flying robots",
		authors: [
			"Holly Dinkel",
			"Julia Di",
			"Jamie Santos",
			"Keenan Albee",
			"Paulo Borges",
			"Marina Moreira",
			"Oleg Alexandrov",
			"Brian Coltin",
			"Trey Smith",
		],
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
		authors: [
			"Jamie Santos",
			"Holly Dinkel",
			"Julia Di",
			"Paulo Borges",
			"Marina Moreira",
			"Oleg Alexandrov",
			"Brian Coltin",
			"Trey Smith",
		],
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
		title:
			"Detecting Changes on the ISS Autonomously with 3D Point Clouds: An Unsupervised Learning Approach Using GMM Clustering",
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
