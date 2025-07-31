"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="https://raw.githubusercontent.com/alpkatarofficial/portfoliowebsite/refs/heads/main/images/alpportrait.jpg"
              alt="Profile"
              width={200}
              height={300}
              className="rounded-md"
            />
            <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
              SÜLEYMAN ALP KATAR
            </h1>
            <p className="text-lg text-center text-blue-200 font-semibold">- Web Specialist Assistant</p>
            <p className="text-lg text-center text-green-200 font-semibold">- Budding Data Analyst</p>

          </div>


          {/* Bio */}
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize managing websites in my company. With a passion for
              data around me, statistics and curiosity, I also got into the analyzing data and extracting meaningful results from them, uplifting the enterprise value in wherever I work at.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/s-alp-katar/">
                  <Linkedin className="w-10 h-10" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/alpkatarofficial">
                  <Github className="w-10 h-10" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        
        {/* Right Content */}
        <div className="space-y-1">


          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-mono">Portfolio Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="relative">
              {/* Floating title stays still */}
                <div className="absolute -top-4 w-full text-center z-10">
                  <h3 className="text-white text-l font-mono">Used Car Database Web App</h3>
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
                  href="https://github.com/alpkatarofficial/portfoliowebsite/tree/main/Suleyman_Alp_Katar_Apriori_Market_Basket_Analysis_with_Python"
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
                  <h3 className="text-white text-l font-mono">Bank Customer Data Analysis</h3>
                </div>
            
                {/* Only this moves on hover */}
                <a
                  href="https://github.com/alpkatarofficial/portfoliowebsite/tree/main/Suleyman_Alp_Katar_Bank_Data_Analysis_with_Python"
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
              <p className="text-white-500">Email: alpkatar@linkdijital.com.tr</p>
              <p className="text-white-500">LinkedIn: linkedin.com/in/s-alp-katar/</p>
              <p className="text-white-500">Github: https://github.com/alpkatarofficial</p>
            </section>

            {/* Happy Clients Section */}
          </div>
        </div>
      </div>
    </div>
  )
}

