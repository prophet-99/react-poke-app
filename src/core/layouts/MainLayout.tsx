import {
  SidebarProvider,
  SidebarTrigger,
} from '@/assets/components/ui/sidebar';
import { AppSidebar } from '@/core/components/AppSidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="py-4 px-8 bg-gray-100 min-h-screen w-full">
        <SidebarTrigger className="mb-4" />

        {children}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
