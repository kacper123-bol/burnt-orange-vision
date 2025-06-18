
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { MetricCard } from "@/components/MetricCard"
import { DashboardChart } from "@/components/DashboardChart"
import { ActivityFeed } from "@/components/ActivityFeed"
import { Users, DollarSign, TrendingUp, ShoppingCart, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, John</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10 w-64 bg-background/50 border-border/50 focus:border-dark-orange-500 transition-colors"
                  />
                </div>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-dark-orange-500 rounded-full"></span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-6 space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <MetricCard
                    title="Total Users"
                    value="10,482"
                    description="Active users this month"
                    icon={Users}
                    trend={{ value: "12.5%", isPositive: true }}
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <MetricCard
                    title="Revenue"
                    value="$45,231"
                    description="Total revenue this month"
                    icon={DollarSign}
                    trend={{ value: "8.2%", isPositive: true }}
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <MetricCard
                    title="Growth Rate"
                    value="23.1%"
                    description="Month over month growth"
                    icon={TrendingUp}
                    trend={{ value: "4.1%", isPositive: true }}
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <MetricCard
                    title="Orders"
                    value="1,234"
                    description="Orders processed today"
                    icon={ShoppingCart}
                    trend={{ value: "2.3%", isPositive: false }}
                  />
                </div>
              </div>

              {/* Charts Section */}
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <DashboardChart />
              </div>

              {/* Activity Feed */}
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <ActivityFeed />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
