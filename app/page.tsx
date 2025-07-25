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
              <div></div>
              <div></div>
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

              <div className="relative">
              {/* Floating title stays still */}
                <div className="absolute -top-6 w-full text-center z-10">
                  <h3 className="text-white text-l font-mono">Used Car Database</h3>
                </div>
            
                {/* Only this moves on hover */}
                <a
                  href="https://unknown-lauri-alpkatar-d980a23c.koyeb.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform scale-[.9] mt-4 transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/findmycarmainpage.png"
                      alt="Used Car Database"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>

              <div className="relative">
              {/* Floating title stays still */}
                <div className="absolute -top-6 w-full text-center z-10">
                  <h3 className="text-white text-l font-mono">Apriori Affinity Analysis</h3>
                </div>
            
                {/* Only this moves on hover */}
                <a
                  href="www.dksafjdslkf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform scale-[.9] mt-4 transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/apriorimarketbasketimage.jpg"
                      alt="Used Car Database"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>

              <div className="relative">
              {/* Floating title stays still */}
                <div className="absolute -top-6 w-full text-center z-10">
                  <h3 className="text-white text-l font-mono">Bank Data Analysis</h3>
                </div>
            
                {/* Only this moves on hover */}
                <a
                  href="www.dksafjdslkf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform scale-[.9] mt-4 transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/bankdatanalysisimage.jpg"
                      alt="Used Car Database"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
            </div>
          </section>

          

          {/* Stack Section */}
          <section className="bg-white rounded-xl p-6 text-black">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-mono">My Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/mysql.png" alt="MySQL" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/postgresql.png" alt="MySQL" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/sqlite.png" alt="SQLite" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/python.png" alt="Python" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/powerbi.png" alt="PowerBI" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/Microsoft_Office_Excel_(2019%E2%80%93present).svg.png" alt="Microsoft Excel" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/r.png" alt="R" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/html.png" alt="HTML5" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/css.png" alt="CSS" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/Visual_Studio_Code_1.35_icon.svg.png" alt="Visual Studio Code" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/Microsoft_Office_PowerPoint_(2019%E2%80%93present).svg.png" alt="Microsoft PowerPoint" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/Jupyter_logo.svg.png" alt="Jupyter" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
              <div className="relative w-20 h-20 bg-white rounded-xl p-1">
                <Image src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/wordpress.jpg" alt="WordPress" fill className="object-contain transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer" />
              </div>
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

