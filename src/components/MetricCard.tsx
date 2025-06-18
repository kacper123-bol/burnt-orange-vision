
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
}

export function MetricCard({ title, value, description, icon: Icon, trend }: MetricCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:shadow-dark-orange-500/10 border-border/50 hover:border-dark-orange-500/30">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-dark-orange-500 group-hover:scale-110 transition-transform duration-200" />
      </CardHeader>
      <CardContent className="relative">
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              trend.isPositive 
                ? 'bg-green-500/10 text-green-400' 
                : 'bg-red-500/10 text-red-400'
            }`}>
              {trend.isPositive ? '+' : ''}{trend.value}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
