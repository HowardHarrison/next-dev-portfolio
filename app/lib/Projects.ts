export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'bookonnect',
    title: 'Bookonnect',
    description: 'A book review platform where users can browse and read reviews, as well as sign up to write and manage their own reviews.',
    tech: ['React', 'Redux Tookit Query', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/Journey/2024.jpg', 
  }
];
