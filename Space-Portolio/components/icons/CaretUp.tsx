import { motion } from "motion/react"
import type { IconProps } from "C:/project/Mordig/Space-Portolio/components/main/types/faq-types.ts"

export default function CaretUp({ width = 1.5, className, alt, activeQuestion }: IconProps) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
      animate={{ rotate: activeQuestion ? -180 : 0 }} // Animate rotation based on the state
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

