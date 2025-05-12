import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech and a passion for building innovative solutions that make a difference.',
    imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Full-stack wizard specializing in scalable architecture and cutting-edge frontend experiences with 8 years of experience.',
    imageUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Design Director',
    bio: 'Award-winning designer bringing brands to life through thoughtful UX/UI with an eye for beautiful, functional experiences.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-24 bg-neutral-100 dark:bg-neutral-800"
    >
      <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Our diverse team of experts brings together unique skills and perspectives to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              delay={index * 0.2}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;