"use client"

import React, { useEffect, useState, useRef } from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ClassValue = string | number | boolean | undefined | null | Record<string, boolean | undefined | null>

// Types
interface Testimonial {
  quote: string
  name: string
  title: string
}

interface Company {
  id: number
  name: string
  img: string
  nameImg: string
}

// Sample data - replace with your actual data
const testimonials: Testimonial[] = [
  {
    quote:
      "This product has completely transformed our workflow. The intuitive interface and powerful features have made our team more productive than ever.",
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
  },
  {
    quote:
      "I've tried many similar solutions, but this one stands out for its reliability and excellent customer support. Highly recommended!",
    name: "Michael Chen",
    title: "CTO at StartupX",
  },
  {
    quote:
      "The implementation was seamless, and our team was able to adapt quickly. We've seen a 30% increase in efficiency since we started using it.",
    name: "Emily Rodriguez",
    title: "Operations Director at InnovateCo",
  },
  {
    quote:
      "This solution has exceeded our expectations in every way. The customization options allow us to tailor it perfectly to our needs.",
    name: "David Kim",
    title: "CEO at GrowthLabs",
  },
]

const companies: Company[] = [
  {
    id: 1,
    name: "TechCorp",
    img: "/placeholder.svg?height=40&width=40",
    nameImg: "/placeholder.svg?height=24&width=150",
  },
  {
    id: 2,
    name: "StartupX",
    img: "/placeholder.svg?height=40&width=40",
    nameImg: "/placeholder.svg?height=24&width=150",
  },
  {
    id: 3,
    name: "InnovateCo",
    img: "/placeholder.svg?height=40&width=40",
    nameImg: "/placeholder.svg?height=24&width=150",
  },
  {
    id: 4,
    name: "GrowthLabs",
    img: "/placeholder.svg?height=40&width=40",
    nameImg: "/placeholder.svg?height=24&width=100",
  },
  {
    id: 5,
    name: "FutureTech",
    img: "/placeholder.svg?height=40&width=40",
    nameImg: "/placeholder.svg?height=24&width=100",
  },
]

// InfiniteMovingCards Component
const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
        
        .scroller {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              key={idx}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3">
                    <img src="/profile.svg" alt="profile" />
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">{item.name}</span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">{item.title}</span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// Main Clients Component
export default function Clients() {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={company.img || "/placeholder.svg"} alt={company.name} className="md:w-10 w-5" />
                <img
                  src={company.nameImg || "/placeholder.svg"}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

