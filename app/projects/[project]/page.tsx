
import Starfield from '@/app/animation/StarField';
import Navbar from '@/app/components/Navbar';
import { projects } from '@/app/lib/Projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

export async function generateStaticParams() {
    return projects.map((project) => ({ project: project.slug }));
}

interface PageProps {
    params: {
        project: string;
    };
}

export default function ProjectPage({ params }: PageProps) {
    const project = projects.find((p) => p.slug === params.project);

    if (!project) return <div className="p-4">Project not found.</div>;

    return (
        <div>
            <Navbar />
            <div className="relative w-full bg-blue-950" style={{ minWidth: '100vh' }}>
                <Starfield count={100} />
                <div className='py-20 z-10'>
                    <div className="container max-w-[800px] mx-auto px-4">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="rounded-lg shadow z-20"
                        />
                        <div className='text-lg font-semibold text-slate-100 my-2'>{project.title}</div>
                        <div className='text-base font-semibold text-slate-100 my-2'>Tech Stack:</div>
                        <div className="flex flex-wrap gap-2 my-1">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm bg-slate-200 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <textarea className="text-gray-700 my-1 focus:outline-none p-1 rounded-lg overflow-y-hidden h-[300px] w-full" value={project.description} readOnly />
                        <Link href='https://github.com/HowardHarrison/bookonnect' target='_blank' className='bg-slate-200 hover:bg-slate-300 flex flex-wrap p-1 m-1 w-[135px] rounded-lg'><span className='font-semibold'>Github Repo</span><FaGithub className=' mx-1' size={20} /></Link>
                        <Link href={`/`} className="mt-3 w-32 mx-auto flex rounded-lg bg-slate-200 hover:bg-slate-300 p-2 text-md font-semibold uppercase">
                            <span className='mx-auto flex flex-wrap'><FaArrowLeft className='m-1' /> Back</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
}
