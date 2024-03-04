import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./components/ui/navigation-menu"
import { Hamburger } from "./components/hamburger/Hamburger"
import { useState, useRef, RefObject } from "react"

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

import gcLogoDark from "./assets/images/gc-logoDark.png"
import gcLogoLight from "./assets/images/gc-logo-aqua.png"

import eSkwela from "./assets/images/e_skwela.png"

function App() {

  const tale = useRef<HTMLDivElement>(null)
  const techWands = useRef<HTMLDivElement>(null)
  const projects = useRef<HTMLDivElement>(null)
  const contacts = useRef<HTMLDivElement>(null)

  const handleNavigate = (sectionId : RefObject<HTMLDivElement>) => {
    sectionId.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
    // Handle menu open/close logic here
  };

  return (
    <>
      <NavigationMenu className="px-16 xl:min-[1128px]:px-[248px] py-[20px]  w-full justify-between md:justify-between shadow-[0_0_10px_rgba(0,0,0,.09)] text-scorpion">
        <NavigationMenuList className="font-outfit text-xl font-bold">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <img src={gcLogoDark} alt="GrowthCrafter Logo Dark" className="h-[35px] w-[35px]"/>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="font-outfit text-sm gap-3 font-medium"> 
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out hidden md:block">
            <NavigationMenuLink onClick={() => handleNavigate(tale)}>
              Tale
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out hidden md:block">
            <NavigationMenuLink onClick={() => handleNavigate(techWands)}>
              TechWands
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out hidden md:block">
            <NavigationMenuLink onClick={() => handleNavigate(projects)}>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Soon...
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem> */}
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out hidden md:block">
            <NavigationMenuLink onClick={() => handleNavigate(contacts)}>
              Contacts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="visible md:hidden">
            <NavigationMenuLink>
              <Hamburger onClick={handleMenuToggle} />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      { isOpen && 
        <NavigationMenu className="px-16 xl:min-[1128px]:px-[248px] py-[20px] text-scorpion flex justify-center w-full mx-auto">
          <NavigationMenuList className="flex flex-col gap-2 w-full">
            <NavigationMenuItem className="mx-auto">
              <NavigationMenuLink onClick={() => handleNavigate(tale)}>
                Tale
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigate(techWands)}>
                TechWands
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigate(projects)}>
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleNavigate(contacts)}>
                Contacts
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      <section ref={tale} id="tale" className="mt-10 mb-16">
        <div className="flex mx-16 xl:min-[1128px]:mx-52 mb-20 xl:min-[1128px]:p-10 xl:min-[1128px]:flex-row flex-col-reverse">
          <div className="font-rubik xl:min-[1128px]:m-auto xl:min-[1128px]:w-1/2 w-full mt-8">
            <h1 className="font-outfit font-black text-[2rem] text-scorpion xl:min-[1128px]:text-left text-center">
              Developer's Tale.
            </h1>
            <h6 className="text-scorpion/75 font-extralight xl:min-[1128px]:text-justify text-center mt-12">
              I'm Eunice Patricia M. Villanueva, an aspirant developer and &#8211; a Growth Crafter.
              Driven by my passion and motivation to create positive impact in my community, 
              I trained myself to become an efficient problem-solver.
            </h6>
          </div>
          <div className="w-1/2 xl:min-[1128px]:flex xl:min-[1128px]:justify-end justify-center block mx-auto">
            <img src={profile} alt="EunicePMV Profile" className="rounded-full md:max-w-[700px] md:max-h-[300px] xl:max-w-[1200px] xl:max-h-[350px] block mx-auto"/>
          </div>
        </div>
      </section>
      <section id="sub-about">
        <div className="px-16 xl:min-[1128px]:px-[248px] py-10 w-full bg-aqua-blue text-center">
          <div className="flex justify-center mb-5">
            <img src={womanMage} alt="Female Mage"/>
          </div>
          <div className="font-rubik text-white xl:min-[1128px]:px-28">
            As a Growth Crafter, I utilized my knowledge and tech stack to innovate
            and create solution for the benefit of my community towards better living. Let's
            connect and collaborate, focused on improving the quality of life through technological
            innovation.
          </div>
        </div>
      </section>
      <section ref={techWands} id="techwands" className="h-[150px] bg-aqua-blue mb-72 flex justify-center text-center">
        <div className="max-h-max">
          <div id="tech-stack" className="xl:min-[1128px]:mx-[248px] p-8 border-1 border-scorpion rounded-md shadow-[0_0_10px_rgba(0,0,0,.09)] bg-white">
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
      <section ref={projects} id="projects" className="mt-10 mb-96">
        <div className="xl:max-[1128px]:mx-52 mb-20 p-10">
          <h1 className="font-outfit font-black text-[2rem] text-scorpion text-center">
            Projects
            <div className="border-b-8 border-solid border-scorpion/50 block m-auto w-[70px]">
            </div>
          </h1>
          {/* <div className="mt-10">
            <div className="flex justify-center">
              <h3 className="font-outfit font-black text-scorpion text-[1.25rem] text-center mr-2">
                Deploying... 
              </h3>
              <img src={wink} alt="Winking Emoji" className="h-[30px] w-[30px]"/>
            </div>
            <div className="flex justify-center mt-4">
              <img src={loading} alt="Loading GIF" className="h-[30px] w-[30px]"/>
            </div>
          </div> */}
          <div className="grid grid-cols-1 gap-8 mt-10 mx-auto sm:min-[641px]:px-28 sm:max-[932px]:px-28 md:min-[934px]:grid-cols-2 lg:min-[1360px]:grid-cols-3 lg:min-[1429px]:mx-5 2xl:min-[1725px]:mx-44">
            <div className="h-[250px] rounded-md">
            </div>
            <div className="h-[250px] rounded-md bg-aqua-blue relative">
              <figure className="w-full h-full">
                <img src={eSkwela} alt="E-Skwela Logo" className="rounded-md hover:scale-100 ease-in-out h-full w-full"/>
                <figcaption className="absolute top-0 px-6 flex justify-center flex-col text-white font-outfit h-full w-full text-center opacity-0 hover:opacity-100 z-1 bg-gradient-to-r from-aqua-blue to-secondary-color transition ease-in-out hover:transition-all rounded-md">
                  <h1 className="mb-6 font-medium text-lg">
                    Learning Management System for effective and accessible learning
                  </h1>
                  <div>
                    <a href="https://eskwela-educweb.vercel.app/" className="border-2 border-white border-solid font-outfit font-light rounded-full hover:bg-aero-blue/40 cursor-pointer">
                      <span className="text-sm m-3">
                        Visit Website
                      </span>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            {/* bg-scorpion/50 */}
            <div className="h-[250px] rounded-md">
            </div>
          </div>
        </div>
      </section>
      <footer ref={contacts} id="contacts" className="relative bottom-0 bg-aqua-blue w-full text-center p-16">
        <img src={gcLogoLight} alt="GrowthCrafter Logo" className="h-[50px] w-[50px] mx-auto"/>
        <h3 className="font-outfit text-lg text-white font-bold mb-10">
          GrowthCrafter
        </h3>
        <h4 className="font-outfit text-base text-white font-normal mb-10">
          actively crafting and nurturing growth
        </h4>
        <div className="flex gap-3 justify-center">
          <a href="https://www.linkedin.com/in/eunicepmv/">
            <img src={linkedin} alt="LinkedIn Logo" className="h-[25px] w-[25px]"/>
          </a>
          <a href="https://github.com/EunicePMV">
            <img src={githubContact} alt="Github Logo" className="h-[25px] w-[25px]"/>
          </a>
        </div>
        <div className="font-outfit text-sm text-white font-extralight mb-11">
          Find and Contact Me Here 
        </div>
        <div className="font-rubik text-sm text-white">
          EunicePMV © 2024
        </div>
      </footer>
    </>
  )
}

export default App