import {
    Sidebar,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        Quick Start 
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="/">
                                Installation
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuButton>
                                <span>Components</span>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton href="/components/icon">
                                        Icon
                                    </SidebarMenuSubButton>
                                    <SidebarMenuSubButton href="/components/nprogress-bar">
                                        NProgressBar
                                    </SidebarMenuSubButton>
                                    <SidebarMenuSubButton href="/components/analytics-google">
                                        Google Analytics
                                    </SidebarMenuSubButton>
                                    <SidebarMenuSubButton href="/components/analytics-umami">
                                        Umami
                                    </SidebarMenuSubButton>
                                    <SidebarMenuSubButton href="/components/analytics-openpanel">
                                        Open Panel
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarMenuItem>
            </SidebarMenu>
        </Sidebar>
    )
}