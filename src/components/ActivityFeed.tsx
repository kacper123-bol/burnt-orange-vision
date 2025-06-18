
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: { name: "Alice Johnson", avatar: "", initials: "AJ" },
    action: "completed",
    target: "Project Alpha",
    time: "2 minutes ago",
    type: "success"
  },
  {
    id: 2,
    user: { name: "Bob Smith", avatar: "", initials: "BS" },
    action: "updated",
    target: "Dashboard Settings",
    time: "5 minutes ago",
    type: "info"
  },
  {
    id: 3,
    user: { name: "Carol White", avatar: "", initials: "CW" },
    action: "deleted",
    target: "Old Reports",
    time: "10 minutes ago",
    type: "warning"
  },
  {
    id: 4,
    user: { name: "David Brown", avatar: "", initials: "DB" },
    action: "created",
    target: "New Campaign",
    time: "15 minutes ago",
    type: "success"
  },
  {
    id: 5,
    user: { name: "Emma Davis", avatar: "", initials: "ED" },
    action: "shared",
    target: "Analytics Report",
    time: "20 minutes ago",
    type: "info"
  }
]

const getBadgeVariant = (type: string) => {
  switch (type) {
    case 'success': return 'default'
    case 'warning': return 'secondary'
    case 'info': return 'outline'
    default: return 'default'
  }
}

export function ActivityFeed() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Avatar className="w-8 h-8 mt-1">
              <AvatarImage src={activity.user.avatar} />
              <AvatarFallback className="bg-dark-orange-600 text-white text-xs">
                {activity.user.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">
                  {activity.user.name}
                </p>
                <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                  {activity.action}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.target}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
