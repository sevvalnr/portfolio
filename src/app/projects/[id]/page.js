'use client'
import Link from 'next/link';

const projects = [
	{
		id: 'interactive-reading',
		title: 'Interactive Reading Platform',
		description:
			'Full Stack Web & Mobile Application with AI-powered recommendations and real-time features. Built with Golang Microservices, React, React Native, MongoDB, AWS ECS, Docker, Terraform.',
		tech: [
			'Golang',
			'React',
			'React Native',
			'MongoDB',
			'AWS',
			'Docker',
			'Terraform',
		],
		images: [
			'/images/interactive1.png',
			'/images/interactive2.png',
			'/images/interactive3.png',
		],
		video: '/videos/interactive-demo.mp4',
	},
	{
		id: 'done-day',
		title: 'Done Day - Habit Tracking Application',
		description:
			'A full-stack habit tracking application built with React (Frontend) and .NET Core (Backend). Features: Create, read, update, delete habits, mark completed/incomplete, progress tracking, modern UI with Tailwind CSS, real-time API.',
		tech: ['React', '.NET Core', 'Tailwind CSS', 'API'],
		images: ['/images/doneday1.png'],
		video: '/videos/doneday-demo.mp4',
	},
	{
		id: 'sentiment-analysis',
		title: 'Sentiment Analysis Project',
		description:
			'This project analyzes the sentiment of user-provided text. Flask-based backend API with React frontend interface.',
		tech: ['Flask', 'React', 'API'],
	},
	{
		id: 'chaos-mirror',
		title: 'Chaos Mirror - Data Art Project',
		description:
			'Transforms daily data into a 3D visualization of the Lorenz Attractor, creating unique data-driven art.',
		tech: ['3D Visualization', 'Data Art', 'JavaScript'],
	},
];

export default function ProjectDetailPage({ params }) {
	const project = projects.find((p) => p.id === params.id);
	const otherProjects = projects.filter((p) => p.id !== params.id);

	if (!project) {
		return (
			<div className="text-center pt-20 text-white">Project not found.</div>
		);
	}

	return (
		<div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-[#0a2e1a] via-[#114d2e] to-[#1a7a4c] relative overflow-hidden">
			{/* Floating Neon Accents */}
			<div className="neon-accent"></div>
			<div className="neon-accent"></div>
			<div className="neon-accent"></div>

			<div className="max-w-7xl mx-auto px-2 md:px-4 flex flex-col lg:flex-row gap-8">
				{/* Main Project Display */}
				<div className="flex-1 min-w-0">
					<Link
						href="/projects"
						className="inline-block mb-6 text-[#26bb71] hover:underline text-lg"
					>
						← Back to Projects
					</Link>
					<div className="glass p-4 md:p-8 rounded-2xl shadow-xl mb-8">
						<h1 className="text-2xl md:text-4xl font-serif font-bold gradient-text mb-4">
							{project.title}
						</h1>
						<p className="text-gray-300 mb-6">{project.description}</p>
						<div className="flex flex-wrap gap-2 md:gap-3 mb-6">
							{project.tech.map((tech, idx) => (
								<span
									key={idx}
									className="bg-gradient-to-br from-[#26bb71] to-[#646060] text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold"
								>
									{tech}
								</span>
							))}
						</div>

						{/* Image Gallery */}
						{project.images && project.images.length > 0 && (
							<div className="mb-6">
								<h2 className="text-xl md:text-2xl font-bold text-white mb-3">
									Gallery
								</h2>
								<div className="flex space-x-3 md:space-x-4 overflow-x-auto pb-2">
									{project.images.map((img, idx) => (
										<img
											key={idx}
											src={img}
											alt={`Screenshot ${idx + 1}`}
											className="rounded-xl shadow-lg object-cover h-40 w-64 md:h-56 md:w-96 flex-shrink-0 border-2 border-[#26bb71]/30"
										/>
									))}
								</div>
							</div>
						)}

						{/* Video Section */}
						{project.video && (
							<div className="mb-6">
								<h2 className="text-xl md:text-2xl font-bold text-white mb-3">
									Demo Video
								</h2>
								<video
									src={project.video}
									controls
									className="rounded-xl shadow-lg w-full max-h-[240px] md:max-h-[400px] border-2 border-[#26bb71]/30 bg-black"
								/>
							</div>
						)}
					</div>
				</div>

				{/* Side Menu: Other Projects */}
				<div className="w-full lg:w-64 flex-shrink-0">
					<h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
						Other Projects
					</h2>
					<div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-2">
						{otherProjects.map((p) => (
							<Link
								key={p.id}
								href={`/projects/${p.id}`}
								className="block bg-[#114d2e]/80 hover:bg-[#26bb71]/30 rounded-xl p-2 md:p-4 shadow transition-all duration-200 border border-[#26bb71]/20 min-w-[160px] md:min-w-[200px] lg:min-w-0"
							>
								<div className="flex items-center gap-2 md:gap-3">
									{p.images && p.images[0] && (
										<img
											src={p.images[0]}
											alt={p.title}
											className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-lg border border-[#26bb71]/30"
										/>
									)}
									<span className="text-white font-semibold text-xs md:text-base">
										{p.title}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				.neon-accent {
					position: absolute;
					border-radius: 50%;
					filter: blur(4px);
					opacity: 0.4;
					animation: float 6s ease-in-out infinite;
				}
				.neon-accent:nth-child(1) {
					width: 100px;
					height: 100px;
					top: 10%;
					right: 10%;
					background: #006633;
					animation-delay: 0s;
				}
				.neon-accent:nth-child(2) {
					width: 150px;
					height: 150px;
					top: 30%;
					right: 20%;
					background: #2b6919;
					animation-delay: 2s;
				}
				.neon-accent:nth-child(3) {
					width: 80px;
					height: 80px;
					top: 60%;
					right: 15%;
					background: #008040;
					animation-delay: 4s;
				}
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-20px) rotate(180deg);
					}
				}
			`}</style>
		</div>
	);
}