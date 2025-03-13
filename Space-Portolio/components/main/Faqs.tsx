"use client"

import type React from "react"

import { motion } from "motion/react"
import { useState } from "react"

// TypeScript Interfaces
interface IconProps {
  width?: number
  className?: string
  alt?: string
  activeQuestion?: boolean
}

interface QuestionType {
  id: number
  alt: string
  Icon: React.ComponentType<IconProps>
  question: string
  answer: string
}

interface CategoryType {
  id: number
  category: string
  questions: QuestionType[]
}

interface FAQProps {
  question: QuestionType
  activeQuestion: number | null
  handleQuestionClick: (id: number) => void
}

interface FAQListProps {
  category: string
  questions: QuestionType[]
  activeQuestion: number | null
  handleQuestionClick: (id: number) => void
}

// Icon Components
function CaretUp({ width = 1.5, className, alt, activeQuestion }: IconProps) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
      animate={{ rotate: activeQuestion ? -180 : 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <path
        d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.08002 15.0501"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

function Note({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.06 19.3901C14.44 19.8101 13.66 20.1601 12.71 20.4701L11.13 20.9901C7.15998 22.2701 5.06997 21.2001 3.77997 17.2301L2.49997 13.2801C1.21997 9.3101 2.27997 7.2101 6.24997 5.9301L7.82997 5.4101C8.23997 5.2801 8.62997 5.1701 8.99997 5.1001C8.69997 5.7101 8.45997 6.4501 8.25997 7.3001L7.27997 11.4901C6.29997 15.6701 7.58998 17.7301 11.76 18.7201L13.44 19.1201C14.02 19.2601 14.56 19.3501 15.06 19.3901Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MagicPen({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M3.49994 20.4999C4.32994 21.3299 5.66994 21.3299 6.49994 20.4999L19.4999 7.49994C20.3299 6.66994 20.3299 5.32994 19.4999 4.49994C18.6699 3.66994 17.3299 3.66994 16.4999 4.49994L3.49994 17.4999C2.66994 18.3299 2.66994 19.6699 3.49994 20.4999Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.01 8.99023L15.01 5.99023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M8.5 2.44L10 2L9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56L18 16L18.44 14.5L18 13L19.5 13.44Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TwoUsers({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Cloud({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M5.54003 11.1201C0.860029 11.4501 0.860029 18.2601 5.54003 18.5901H7.46007"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.59003 11.1201C2.38003 2.19014 15.92 -1.37985 17.47 8.00015C21.8 8.55015 23.55 14.3201 20.27 17.1901C19.27 18.1001 17.98 18.6001 16.63 18.5901H16.54"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.58998 20.5498 7.72998 19.0998C7.62998 18.9398 7.54002 18.7698 7.46002 18.5898C7.16002 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4399 16.5298L11.4299 17.5198L13.5599 15.5498"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DollarCircle({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 6V18" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Search({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 22L20 20" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Organization({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Integrate({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 5H16" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.5 12.5H16" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Import({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M9.31995 11.6802L11.8799 14.2402L14.4399 11.6802"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.88 4V14.17" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 12.1802C20 16.6002 17 20.1802 12 20.1802C7 20.1802 4 16.6002 4 12.1802"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Slack({ width = 1.5, className, alt }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <path
        d="M14.5 2.2998C13.5 2.2998 12.6 3.0998 12.6 4.1998V8.7998C12.6 9.7998 13.4 10.6998 14.5 10.6998C15.5 10.6998 16.4 9.8998 16.4 8.7998V4.0998C16.4 3.0998 15.6 2.2998 14.5 2.2998Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6 10.5999H20.2C21.1 10.5999 21.8 9.8999 21.8 8.9999C21.8 8.0999 21.1 7.3999 20.2 7.3999C19.3 7.3999 18.6 8.0999 18.6 8.9999V10.5999Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.1998C2 10.1998 2.8 11.0998 3.9 11.0998H8.5C9.5 11.0998 10.4 10.2998 10.4 9.1998C10.4 8.1998 9.6 7.2998 8.5 7.2998H3.9C2.8 7.3998 2 8.1998 2 9.1998Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4 5.1V3.6C10.4 2.7 9.69995 2 8.79995 2C7.89995 2 7.19995 2.7 7.19995 3.6C7.19995 4.5 7.89995 5.2 8.79995 5.2H10.4V5.1Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 21.7999C10.4 21.7999 11.3 20.9999 11.3 19.8999V15.2999C11.3 14.2999 10.5 13.3999 9.4 13.3999C8.4 13.3999 7.5 14.1999 7.5 15.2999V19.8999C7.6 20.8999 8.4 21.7999 9.4 21.7999Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.39995 13.3999H3.79995C2.89995 13.3999 2.19995 14.0999 2.19995 14.9999C2.19995 15.8999 2.89995 16.5999 3.79995 16.5999C4.69995 16.5999 5.39995 15.8999 5.39995 14.9999V13.3999Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14.7999C22 13.7999 21.2 12.8999 20.1 12.8999H15.5C14.5 12.8999 13.6 13.6999 13.6 14.7999C13.6 15.7999 14.4 16.6999 15.5 16.6999H20.1C21.1 16.6999 22 15.7999 22 14.7999Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6 18.7998V20.3998C13.6 21.2998 14.3 21.9998 15.2 21.9998C16.1 21.9998 16.8 21.2998 16.8 20.3998C16.8 19.4998 16.1 18.7998 15.2 18.7998H13.6Z"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// FAQ Data
const frequentlyAskedQuestions: CategoryType[] = [
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

// FAQ Component
function FAQ({ question, activeQuestion, handleQuestionClick }: FAQProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.li variants={itemVariants} className="shrink-0 grow-0">
      <button className="flex w-full cursor-pointer items-center" onClick={() => handleQuestionClick(question.id)}>
        <div className="border-gray-300 dark:border-gray-600 mr-6 rounded-xl border-2 p-3.5 max-sm:mr-4 max-sm:p-3">
          <question.Icon width={2} className="stroke-gray-300 dark:stroke-gray-400" alt={question.alt} />
        </div>

        <p className="text-gray-200 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight max-lg:text-lg/8 max-lg:font-semibold max-sm:text-base/6 max-sm:font-medium">
          {question.question}
        </p>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <CaretUp
            className="stroke-gray-300 dark:stroke-gray-400"
            activeQuestion={activeQuestion === question.id}
            width={2.5}
            alt="Caret Up Icon"
          />
        </div>
      </button>
      <motion.p
        className="text-gray-400 pt-0 pr-14 pl-20 text-lg/8 font-light max-lg:text-base/loose max-sm:pr-0 max-sm:pl-0"
        initial={{ opacity: 0, maxHeight: 0, visibility: "hidden" }}
        animate={
          activeQuestion === question.id
            ? {
                opacity: 1,
                maxHeight: "300px",
                visibility: "visible",
                paddingTop: "1rem",
              }
            : {}
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
        layout
      >
        {question.answer}
      </motion.p>
    </motion.li>
  )
}

// FAQ List Component
function FAQList({ category, questions, activeQuestion, handleQuestionClick }: FAQListProps) {
  const [inView, setInView] = useState(false)

  return (
    <motion.ul
      className="m-auto flex max-w-[51.625rem] flex-col gap-y-14 max-lg:gap-y-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      key={category}
      layout
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          transition: {
            staggerChildren: 0.25,
            ease: "easeIn",
          },
        },
      }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: 0 }}
    >
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  )
}

// Main FAQs Component
export default function FAQs() {
  const [category, setActiveCategory] = useState<string>("General")
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const categoryObj: CategoryType =
    frequentlyAskedQuestions.filter((obj) => obj.category === category).at(0) || frequentlyAskedQuestions[0]
  const questionsArr = categoryObj.questions

  const handleQuestionClick = (id: number) => (id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id))

  const handleCategoryClick = (category: string) => {
    setActiveQuestion(null)
    setActiveCategory(category)
  }

  return (
    <section className="justify-items-center">
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <h2 className="text-gray-100 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-md:mb-4 max-md:text-left max-sm:text-3xl/9 max-sm:tracking-tighter cursor-pointer">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light max-lg:text-lg/8 max-sm:text-base/loose">
          <p className="text-gray-300 text-center max-md:text-left max-sm:hidden">
            The most commonly asked questions about NoteFlow. <br className="max-md:hidden" />
            Have any other questions?{" "}
            <a href="#" className="group text-blue-400 underline decoration-1 underline-offset-3 hover:text-blue-300 " >
              Chat with our expert tech team
            </a>
          </p>
        </div>
        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18 max-md:justify-start">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                className={`rounded-full px-4 py-2 text-base/6 font-medium transition-colors duration-300 ${
                  category === obj.category ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => handleCategoryClick(obj.category)}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>
        <FAQList
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  )
}

