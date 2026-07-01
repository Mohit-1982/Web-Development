import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const people = [
  {
    name: "Aarav Sharma",
    profession: "Frontend Developer",
    skills: ["JavaScript", "React"],
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    profession: "UI/UX Designer",
    skills: ["Figma", "Adobe XD"],
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rohan Gupta",
    profession: "Backend Developer",
    skills: ["Node.js", "MongoDB"],
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Ananya Singh",
    profession: "Data Analyst",
    skills: ["Python", "SQL"],
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Vikram Patel",
    profession: "Mobile Developer",
    skills: ["Flutter", "Dart"],
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Neha Kapoor",
    profession: "DevOps Engineer",
    skills: ["Docker", "Kubernetes"],
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Kabir Mehta",
    profession: "Cybersecurity Analyst",
    skills: ["Network Security", "Penetration Testing"],
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Ishita Roy",
    profession: "Machine Learning Engineer",
    skills: ["TensorFlow", "Python"],
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Arjun Nair",
    profession: "Cloud Engineer",
    skills: ["AWS", "Terraform"],
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Meera Joshi",
    profession: "Full Stack Developer",
    skills: ["React", "Node.js"],
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

createRoot(document.getElementById('root')).render(
     <div className="flex flex-wrap gap-4 p-4">
        {people.map((obj) => {
            return <App key={obj.name} people={obj} />
        })}
    </div>
)
