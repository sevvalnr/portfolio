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
			<div className="text-center pt-10 text-black">Project not found.</div>
		);
	}

	return (
		<div className="min-h-screen pt-10 pb-20 bg-[#ececbb]">
			<div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-8">
				{/* Main Project Display */}
				<div className="flex-1 min-w-0">
					<Link
						href="/projects"
						className="inline-block mb-6 text-gray-600 hover:text-black transition-colors text-lg font-light"
					>
						← Back to Projects
					</Link>
					<div className="bg-white/50 p-8 rounded-sm border border-black/10 shadow-sm mb-8">
						<h1 className="text-3xl md:text-4xl font-light text-black mb-6 tracking-tight">
							{project.title}
						</h1>
						<p className="text-gray-700 mb-8 leading-relaxed font-light text-lg">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-3 mb-8">
							{project.tech.map((tech, idx) => (
								<span
									key={idx}
									className="bg-black text-white px-4 py-2 rounded-full text-sm font-light"
								>
									{tech}
								</span>
							))}
						</div>

						{/* Image Gallery */}
						{project.images && project.images.length > 0 && (
							<div className="mb-8">
								<h2 className="text-xl font-light text-black mb-4 tracking-wide">
									Gallery
								</h2>
								<div className="flex space-x-4 overflow-x-auto pb-4">
									{project.images.map((img, idx) => (
										<img
											key={idx}
											src={img}
											alt={`Screenshot ${idx + 1}`}
											className="rounded-sm object-cover h-48 w-64 flex-shrink-0 border border-black/20"
										/>
									))}
								</div>
							</div>
						)}

						{/* Video Section */}
						{project.video && (
							<div className="mb-6">
								<h2 className="text-xl font-light text-black mb-4 tracking-wide">
									Demo Video
								</h2>
								<video
									src={project.video}
									controls
									className="rounded-sm w-full max-h-96 border border-black/20 bg-black"
								/>
							</div>
						)}
					</div>
				</div>

				{/* Side Menu: Other Projects */}
				<div className="w-full lg:w-80 flex-shrink-0">
					<h2 className="text-xl font-light text-black mb-6 tracking-wide">
						Other Projects
					</h2>
					<div className="flex flex-col gap-4">
						{otherProjects.map((p) => (
							<Link
								key={p.id}
								href={`/projects/${p.id}`}
								className="bg-white/50 hover:bg-white/70 rounded-sm p-4 border border-black/10 hover-lift transition-all duration-200"
							>
								<div className="flex items-center gap-4">
									{p.images && p.images[0] && (
										<img
											src={p.images[0]}
											alt={p.title}
											className="w-16 h-16 object-cover rounded-sm border border-black/20"
										/>
									)}
									<div>
										<h3 className="text-black font-light text-lg mb-1">
											{p.title}
										</h3>
										<p className="text-gray-600 text-sm font-light line-clamp-2">
											{p.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}