import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./components/ui/navigation-menu"
import profile from "./assets/images/portfolioProfile.png"
import womanMage from "./assets/images/woman-mage.png"
import wand from "./assets/images/wand.png"

import python from "./assets/images/python.png"
import html from "./assets/images/html.png"
import css from "./assets/images/css.png"
import javascript from "./assets/images/javascript.png"
import c from "./assets/images/c.png"
import cPlusPlus from "./assets/images/C++.png"
import java from "./assets/images/java.png"

import django from "./assets/images/django.png"
import tailwind from "./assets/images/tailwind.png"
import bootstrap from "./assets/images/bootstrap.png"
import react from "./assets/images/react.png"

import git from "./assets/images/git.png"
import github from "./assets/images/github.png"
import vsCode from "./assets/images/vs-code.png"
import mySql from "./assets/images/mysql.png"
import figma from "./assets/images/figma.png"

import wink from "./assets/images/wink.png"
import loading from "./assets/images/loading.gif"

import linkedin from "./assets/images/linkedin.png"
import githubContact from "./assets/images/github-contact.png"

function App() {

  return (
    <>
      <NavigationMenu className="px-[248px] py-[20px]  w-full justify-between shadow-[0_0_10px_rgba(0,0,0,.09)] text-scorpion">
        <NavigationMenuList className="font-outfit text-xl font-bold">
          <NavigationMenuItem>
            <NavigationMenuLink>
              GrowthCrafter
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="font-outfit text-sm gap-3 font-medium"> 
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Tale
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              TechWands
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Soon...
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem> */}
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Contacts
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <section id="about" className="mt-10 mb-16">
        <div className="flex mx-52 mb-20 p-10">
          <div className="w-1/2 font-rubik m-auto">
            <h1 className="font-outfit font-black text-[2rem] text-scorpion">
              Developer's Tale.
            </h1>
            <h6 className="text-scorpion/75 font-extralight text-justify mt-12">
              I'm Eunice Patricia M. Villanueva, an aspirant developer and &#8211; a Growth Crafter.
              Driven by my passion and motivation to create positive impact in my community, 
              I trained myself to become an efficient problem-solver.
            </h6>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={profile} alt="EunicePMV Profile" className="rounded-full h-[350px] w-[350px]"/>
          </div>
        </div>
      </section>
      <section id="sub-about">
        <div className="px-[248px] py-10 w-full bg-aqua-blue text-center">
          <div className="flex justify-center mb-5">
            <img src={womanMage} alt="Female Mage"/>
          </div>
          <div className="font-rubik text-white px-28">
            As a Growth Crafter, I utilized my knowledge and tech stack to innovate
            and create solution for the benefit of my community towards better living. Let's
            connect and collaborate, focused on improving the quality of life through technological
            innovation.
          </div>
        </div>
      </section>
      <section className="h-[150px] bg-aqua-blue mb-72 flex justify-center text-center">
        <div className="max-h-max">
          <div id="tech-stack" className="mx-[248px] p-8 border-1 border-scorpion rounded-md shadow-[0_0_10px_rgba(0,0,0,.09)] bg-white">
            <div className="flex justify-center">
              <h1 className="font-outfit font-black text-[2rem] text-scorpion mr-2">
                TechWands 
              </h1>
              <div className="block my-auto">
                <img src={wand} alt="Magic Wand" className="h-8 w-8"/>
              </div>
            </div>
            <div className="mt-8">
              <div className="mb-8">
                <div className="flex gap-3 justify-center">
                  <img src={python} alt="Python" className="h-[40px] w-[40px]"/>
                  <img src={html} alt="HTML" className="h-[40px] w-[40px]"/>
                  <img src={css} alt="CSS" className="h-[40px] w-[40px]"/>
                  <img src={javascript} alt="JavaScript" className="h-[40px] w-[40px]"/>
                  <img src={c} alt="C Programming Language" className="h-[40px] w-[40px]"/>
                  <img src={cPlusPlus} alt="C++ Programming Language" className="h-[40px] w-[40px]"/>
                  <img src={java} alt="Java" className="h-[40px] w-[40px]"/>
                </div>
                <h4 className="font-rubik text-scorpion font-normal text-base">
                  Languages
                </h4>
              </div>
              <div className="mb-8">
                <div className="flex gap-3 justify-center">
                  <img src={django} alt="Django" className="h-[40px] w-[40px]"/>
                  <img src={tailwind} alt="Tailwind" className="h-[40px] w-[40px]"/>
                  <img src={bootstrap} alt="Bootstrap" className="h-[40px] w-[40px]"/>
                  <img src={react} alt="ReactJS" className="h-[40px] w-[40px]"/>
                </div>
                <h4 className="font-rubik text-scorpion font-normal text-base">
                  Frameworks
                </h4>
              </div>
              <div className="mb-8">
                <div className="flex gap-3 justify-center">
                <img src={git} alt="Git" className="h-[40px] w-[40px]"/>
                  <img src={github} alt="Github" className="h-[40px] w-[40px]"/>
                  <img src={vsCode} alt="Visual Studio Code" className="h-[40px] w-[40px]"/>
                  <img src={mySql} alt="MySQL" className="h-[40px] w-[40px]"/>
                  <img src={figma} alt="Figma" className="h-[40px] w-[40px]"/>
                </div>
                <h4 className="font-rubik text-scorpion font-normal text-base">
                  Tools
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-96">
        <div className="mx-52 mb-20 p-10">
          <h1 className="font-outfit font-black text-[2rem] text-scorpion text-center">
            Projects
            <div className="border-b-8 border-solid border-scorpion/50 block m-auto w-[70px]">
            </div>
          </h1>
          <div className="mt-10">
            <div className="flex justify-center">
              <h3 className="font-outfit font-black text-scorpion text-[1.25rem] text-center mr-2">
                Deploying... 
              </h3>
              <img src={wink} alt="Winking Emoji" className="h-[30px] w-[30px]"/>
            </div>
            <div className="flex justify-center mt-4">
              <img src={loading} alt="Loading GIF" className="h-[30px] w-[30px]"/>
            </div>
          </div>
          {/* FINAL FORMAT
          <div className="grid grid-cols-3 mt-10">
            <div className="h-[300px] bg-scorpion/50 border-solid border-2 border-black">
              Project 1
            </div>
            <div className="h-[300px] bg-scorpion/50 border-solid border-2 border-black">
              Project 2
            </div>
            <div className="h-[300px] bg-scorpion/50 border-solid border-2 border-black">
              Project 3
            </div>
          </div> */}
        </div>
      </section>
      <footer className="relative bottom-0 bg-aqua-blue w-full text-center p-6">
        <h3 className="font-outfit text-lg text-white font-bold">
          GrowthCrafter
        </h3>
        <h4 className="font-outfit text-base text-white font-normal mb-10">
          actively crafting and nurturing growth
        </h4>
        <div className="flex gap-3 justify-center mb-11">
          <a href="https://www.linkedin.com/in/eunicepmv/">
            <img src={linkedin} alt="LinkedIn Logo" className="h-[25px] w-[25px]"/>
          </a>
          <a href="https://github.com/EunicePMV">
            <img src={githubContact} alt="Github Logo" className="h-[25px] w-[25px]"/>
          </a>
        </div>
        <div className="font-rubik text-sm text-white">
          EunicePMV © 2024
        </div>
      </footer>
    </>
  )
}

export default App