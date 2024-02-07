import { NavigationMenu, navigationMenuTriggerStyle, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuIndicator, NavigationMenuViewport } from "./components/ui/navigation-menu"
// import "@fontsource/rubik/300.css"

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
        <div className="flex mx-52 p-10">
          <div className="w-1/2 font-rubik">
            <h1 className="font-outfit font-black text-[2rem] text-scorpion">
              Developer's Tale.
            </h1>
            <h4 className="text-scorpion/75 font-normal mb-3">
              actively crafting and nurturing growth
            </h4>
            <h6 className="text-scorpion/50 font-thin text-justify mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa officia temporibus beatae facere et. Quasi, facere. Fuga, eligendi fugiat.
            </h6>
          </div>
          <div className="w-1/2">
            *Insert picture here
          </div>
        </div>
        <div className="py-10 w-full bg-aero-blue">
          <div className="h-[25px]">
            🧙🏾
          </div>
          <div>
            all about me
          </div>
        </div>
      </section>
      <section>
        TechWands
      </section>
      <div>
        Projects
      </div>
      <div>
        Blog
      </div>
      <div>
        Contacts
      </div>
    </>
  )
}

export default App

{/* do we include footer? What is the importance of: © Copyright 2023 RaulWebDev. All rights reserved. */}