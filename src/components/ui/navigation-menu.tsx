import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "./navigation-menu-variants"

interface NavigationMenuContextType {
  openItem: string | null
  setOpenItem: (item: string | null) => void
}

const NavigationMenuContext = React.createContext<NavigationMenuContextType>({
  openItem: null,
  setOpenItem: () => {},
})

const NavigationMenu = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  const navRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenItem(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <NavigationMenuContext.Provider value={{ openItem, setOpenItem }}>
      <nav
        ref={(node) => {
          navRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node
        }}
        className={cn(
          "relative z-10 flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
})
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = "NavigationMenuList"

interface NavigationMenuItemContextType {
  itemId: string
  isOpen: boolean
}

const NavigationMenuItemContext = React.createContext<NavigationMenuItemContextType>({
  itemId: "",
  isOpen: false,
})

const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => {
  const itemId = React.useId()
  const { openItem } = React.useContext(NavigationMenuContext)
  const isOpen = openItem === itemId

  return (
    <NavigationMenuItemContext.Provider value={{ itemId, isOpen }}>
      <li
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </li>
    </NavigationMenuItemContext.Provider>
  )
})
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, onClick, ...props }, ref) => {
  const { openItem, setOpenItem } = React.useContext(NavigationMenuContext)
  const { itemId, isOpen } = React.useContext(NavigationMenuItemContext)

  return (
    <button
      ref={ref}
      type="button"
      data-state={isOpen ? "open" : "closed"}
      className={cn(navigationMenuTriggerStyle(), "group cursor-pointer", className)}
      onClick={(e) => {
        setOpenItem(isOpen ? null : itemId)
        onClick?.(e)
      }}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className={cn(
          "relative top-px ml-1 h-3 w-3 transition duration-200",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  )
})
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = React.useContext(NavigationMenuItemContext)

  if (!isOpen) return null

  return (
    <div
      ref={ref}
      data-state="open"
      className={cn(
        "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-auto rounded-lg border bg-popover text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 duration-150 z-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(className)}
    {...props}
  />
))
NavigationMenuLink.displayName = "NavigationMenuLink"

const NavigationMenuViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute left-0 top-full flex justify-center", className)}
    {...props}
  />
))
NavigationMenuViewport.displayName = "NavigationMenuViewport"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
}
