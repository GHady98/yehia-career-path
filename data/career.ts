export const opportunities = [
  {
    id: "1",
    title: "Junior Front-End Developer",
    company: "Cedar Digital",
    location: "Beirut",
    description:
      "Build responsive interfaces and collaborate with a small development team.",
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    company: "Code Harbor",
    location: "Remote",
    description:
      "Support web projects, review code with teammates, and learn through practical tasks.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "Pixel Workshop",
    location: "Tripoli",
    description:
      "Help maintain website pages and practice HTML, CSS, JavaScript, and React.",
  },
] as const;
export const applications = [
  { id: "application-1", opportunityId: "1", status: "Applied" },
  { id: "application-2", opportunityId: "2", status: "Under review" },
] as const;
export const milestones = [
  {
    title: "Prepare",
    subtitle: "Build your foundation",
    description:
      "Make it clear who you are, what you can do, and where you want to go.",
    actions: [
      "Improve your CV with specific projects and skills.",
      "Organize your portfolio with two projects you can explain.",
      "Choose a target role and list the skills it needs.",
    ],
  },
  {
    title: "Practice",
    subtitle: "Turn learning into confidence",
    description:
      "Spend focused time on the skills and conversations your next role will need.",
    actions: [
      "Practise JavaScript and React through small, focused exercises.",
      "Prepare examples of solving problems in your projects.",
      "Rehearse an interview with a friend and ask for feedback.",
    ],
  },
  {
    title: "Apply",
    subtitle: "Take the next step",
    description:
      "Choose suitable roles, send thoughtful applications, and keep track of what happens.",
    actions: [
      "Compare the sample opportunities against your target role.",
      "Tailor your CV and introduction to each real application.",
      "Record applications and set yourself a follow-up reminder.",
    ],
  },
] as const;
