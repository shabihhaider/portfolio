import { Navbar } from '@/components/Navbar';
import About from '@/components/About';
import Section from '@/components/Section';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Welcome() { 
    return (
        <>
            <Navbar />

            <Section name="portfolio">
                <About about="I am a Computer Science student at UET Lahore. I am passionate about programming and web development. I have worked on multiple projects and have experience in various programming languages and technologies." />
            </Section>

            <Section name="projects">
                <Projects>Projects</Projects>
            </Section>

            <Section name="skills">
                <Skills>Skills</Skills>
            </Section>

            <Section name="education">
                <Education>Education</Education>
            </Section>

            <Section name="services">
                <Services>Services</Services>
            </Section>

            <Section name="contact">
                <Contact>Contact</Contact>
            </Section>
        </>
    );
}
