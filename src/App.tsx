import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./components/ui/navigation-menu"
import profile from "./assets/images/portfolioProfile.png"
import womanMage from "./assets/images/woman-mage.png"
import wand from "./assets/images/wand.png"

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
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:text-scorpion/50 cursor-pointer transition-all duration-200 ease-in-out">
            <NavigationMenuLink>
              Contacts
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <section id="about" className="mt-10 mb-16">
        <div className="flex mx-52 mb-20 p-10">
          <div className="w-1/2 font-rubik m-auto mr-16">
            <h1 className="font-outfit font-black text-[2rem] text-scorpion">
              Developer's Tale.
            </h1>
            <h4 className="text-scorpion font-normal mb-3">
              actively crafting and nurturing growth
            </h4>
            <h6 className="text-scorpion/75 font-extralight text-justify mt-12">
              I'm Eunice Patricia M. Villanueva, an aspirant developer and &#8211; a Growth Crafter.
              Driven by my passion and motivation to create positive impact in my community, 
              I trained myself to become an efficient problem-solver.
            </h6>
          </div>
          <div className="w-1/2">
            <img src={profile} alt="EunicePMV Profile" className="rounded-full h-[350px] w-[350px]"/>
          </div>
        </div>
      </section>
      {/* place tecwands overlapping the about  */}
      <section id="sub-about">
        <div className="px-[248px] pt-10 pb-40 w-full bg-mid-blue text-center">
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
        <div id="tech-stack" className="mx-[260px] p-8 border-1 border-scorpion rounded-md shadow-[0_0_10px_rgba(0,0,0,.09)]">
          <div className="flex">
            <div className="font-outfit font-black text-[2rem] text-scorpion mr-2">
              TechWands 
            </div>
            <div className="block my-auto">
              <img src={wand} alt="Magic Wand" className="h-8 w-8"/>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="tech-stack" className="mx-[260px] p-8 border-1 border-scorpion rounded-md shadow-[0_0_10px_rgba(0,0,0,.09)]">
        <div className="flex">
          <div className="font-outfit font-black text-[2rem] text-scorpion mr-2">
            TechWands 
          </div>
          <div className="block my-auto">
            <img src={wand} alt="Magic Wand" className="h-8 w-8"/>
          </div>
        </div>
      </section> */}
      <section>
        Projects
      </section>
      <div>
        Blog justify-center
      </div>
      <div>
        Contacts
      </div>
    </>
  )
}

export default App

{/* do we include footer? What is the importance of: © Copyright 2023 RaulWebDev. All rights reserved. */}