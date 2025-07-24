"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image src="https://media.licdn.com/dms/image/v2/D4D03AQGHWE1pcS6Yyg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673967642447?e=1758153600&v=beta&t=KeA7Dk2bv0cn0bp7XfRxLAgwF0hJgVSBTRqFVhGE5X8" alt="Profile" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-3xl font-mono">SÜLEYMAN ALP KATAR</h1>
              <p className="text-gray-500"> - Web Specialist Assistant</p>
              <p className="text-gray-500"> - Budding Data Analyst</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize managing websites in my company. With a passion for
              data around me, statistics and curiosity, I also got into the analyzing data and extracting meaningful results from them, uplifting the enterprise value in wherever I work at.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/s-alp-katar/">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/alpkatarofficial">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="space-y-8">


          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-mono">Portfolio Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://your-project-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative transform scale-[.9]">
                  {/* Title floating above */}
                  <div className="absolute -top-6 w-full text-center z-10">
                    <h3 className="text-white text-xl font-mono">Huge Used Car Database</h3>
                  </div>
                  {/* Push this down */}
                  <div className="mt-8 aspect-square bg-gray-900 rounded-lg overflow-hidden">
                    <Image
                      src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/findmycarmainpage.png"
                      alt="Project Title"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </a>

              
              <div className="relative transform scale-[.9]">
                {/* Title floating above */}
                <div className="absolute -top-6 w-full text-center z-10">
                  <h3 className="text-white text-xl font-mono">Apriori Market Basket Analysis</h3>
                </div>
                {/* Push this down */}
                <div className="mt-8 aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/apriorimarketbasketimage.jpg"
                    alt="Project Title"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="relative transform scale-[.9]">
                {/* Title floating above */}
                <div className="absolute -top-6 w-full text-center z-10">
                  <h3 className="text-white text-xl font-mono">Bank Data Analysis</h3>
                </div>
                {/* Push this down */}
                <div className="mt-6 aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/bankdatanalysisimage.jpg"
                    alt="Project Title"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              

              
      
              
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Tech Stack</h2>
              <Button variant="ghost" size="icon" className="text-white"> 
                <span className="sr-only">View all tools</span>
              </Button>
            </div>
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl" />
            </div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <h2 className="text-2xl font-mono mb-4">Contact Me</h2>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <span className="sr-only">Contact me</span>
              </Button>
            </section>

            {/* Happy Clients Section */}
          </div>
        </div>
      </div>
    </div>
  )
}

