import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  ChevronDown,
  Plus,
  Projector,
  CreditCard,
  User,
} from "lucide-react"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const projects = [
  { title: "Home", url: "/", icon: Home },
  { title: "Profile", url: "/users/Dusan", icon: User },
  { title: "Payments", url: "/payments", icon: CreditCard },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" side="left">

      {/* HEADER */}
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/72257891" />
                    <AvatarFallback>Dusan</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold">Dusan Stoiljkovic</span>
                    <span className="text-xs text-muted-foreground">
                      Workspace
                    </span>
                  </div>

                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>Dusan Stoiljkovic</DropdownMenuItem>
                <DropdownMenuItem>Personal</DropdownMenuItem>
                <DropdownMenuItem>New workspace</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.title}>
                <SidebarMenuButton asChild>
                  <a href={project.url} className="flex gap-2">
                    <project.icon className="h-4 w-4" />
                    <span>{project.title}</span>
                  </a>
                </SidebarMenuButton>
                {project.title==="Inbox" && (
                  <SidebarMenuBadge>24</SidebarMenuBadge>
                ) }
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
          
        {/* ADD PROJECT */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus/> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector/>
                    See All Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Plus/>
                    Add Project
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* COLLAPSIBLE */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Collapsible Group
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent> 
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Projector/>
                        See All Projects
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/#">
                        <Plus/>
                        Add Project
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem> 
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* NESTED ITEMS */}
        <SidebarGroup>
          <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                    <Projector/>
                    See All Project
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                      <Plus/>
                      Add Project
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/#">
                      <Plus/>
                      Add Category
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      
      <SidebarSeparator />

      {/* FOOTER */}     
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
    </Sidebar>
  )
}
