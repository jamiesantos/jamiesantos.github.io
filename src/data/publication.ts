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
		title: "Autonomous Manipulation for Space Robotics",
		authors: ["Jamie Santos", "A. Collaborator"],
		venue: "ERC",
		year: 2025,
		paperUrl: "https://example.org/papers/autonomous-manipulation.pdf",
		codeUrl: "https://github.com/example/autonomous-manipulation",
		videoUrl: "https://example.org/videos/autonomous-manipulation",
		image: {
			src: "/social-card.png",
			alt: "Autonomous Manipulation - cover",
			href: "https://example.org/papers/autonomous-manipulation.pdf",
		},
	},
];

export function getPublications() {
	// In future this could be async or read markdown files; keep simple for now
	return publications;
}
