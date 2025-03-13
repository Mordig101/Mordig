import type { CategoryType } from "../components/main/types/faq-types"

// Import your icon components here
// For example:
// import Note from "../icons/Note";
// import MagicPen from "../icons/MagicPen";
// etc.

import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import TwoUsers from "../components/icons/TwoUsers";
// This is a placeholder for the icon imports
// You'll need to replace these with your actual icon components


export const frequentlyAskedQuestions: CategoryType[] = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "What is NoteFlow?",
        answer:
          "NoteFlow is an AI-powered note-taking application designed to \
          help individuals and teams organize, manage, and retrieve notes effortlessly.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "How does NoteFlow use AI to enhance note-taking?",
        answer:
          "NoteFlow uses AI to automatically categorize, summarize, and tag your notes, \
          making it easier to find exactly what you need. Its intelligent search functionality \
          helps you locate information by context, keywords, or themes, ensuring that your notes \
          are always organized and accessible.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Can NoteFlow be used for team collaboration?",
        answer:
          "NoteFlow is designed to support both individual users and team collaboration. \
          You can share notes, collaborate in real time, assign tasks, and track progress within the platform. \
          This makes it a perfect solution for both personal and professional use.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Can I access NoteFlow on multiple devices?",
        answer:
          "Yes, you can access NoteFlow from any device, including your computer, tablet, \
          and smartphone. Our app syncs seamlessly across platforms, so your notes are always \
          up-to-date and available whenever you need them.",
      },
    ],
  },
  {
    id: 2,
    category: "Pricing",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "How much does NoteFlow cost?",
        answer: "NoteFlow offers a range of pricing options to suit different needs and budgets.",
      },
    ],
  },
  {
    id: 3,
    category: "AI Features",
    questions: [
      {
        id: 11,
        alt: "Search Icon",
        Icon: Search,
        question: "Can I search for specific information using the AI-powered features?",
        answer:
          "Yes! With NoteFlow's intelligent search functionality, you can search for specific keywords, topics, or \
          even context-based information. The AI not only looks for exact matches but also understands the context \
          of your notes, helping you find relevant information quickly and efficiently.",
      },
    ],
  },
  {
    id: 4,
    category: "Integrations",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What integrations does NoteFlow support?",
        answer:
          "NoteFlow integrates with a wide range of tools, including popular apps like Google Drive, Microsoft \
          OneDrive, Slack, Trello, and more. These integrations allow you to sync your notes with your existing \
          workflow and collaborate seamlessly across platforms.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Will NoteFlow integrate with other apps in the future?",
        answer:
          "We are always working to expand our integration offerings to meet the needs of our users. We frequently \
        update NoteFlow to support new and popular tools, so be sure to check back for new integrations that may \
        enhance your experience.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question: "Can I import existing notes from other platforms into NoteFlow?",
        answer:
          "Yes, you can easily import your existing notes from platforms like Evernote, Google Keep, and Microsoft \
        OneNote into NoteFlow. This ensures a smooth transition without losing any of your important information.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question: "Does NoteFlow integrate with team collaboration tools like Slack?",
        answer:
          "NoteFlow integrates with Slack, allowing you to share notes and collaborate in real time \
        with your team. You can even create reminders or action items directly from your notes and have them \
        sent to your Slack channels.",
      },
    ],
  },
]

