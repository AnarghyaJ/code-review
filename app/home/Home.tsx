
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <main className="p-8">
    <div className="flex flex-col items-center space-y-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-center">
            <UserIcon className="w-6 h-6 mr-2" />
            <CardTitle>OAuth Authorization</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <GithubIcon className="w-10 h-10" />
            <div className="flex flex-col">
              <span>Please authorize the application with GitHub</span>
            </div>
          </div>
          <Button className="mt-4 bg-black text-white" variant="primary">
            Authorize
          </Button>
        </CardContent>
      </Card>
      <div className="opacity-50 transform transition-all duration-200 ease-in-out">
        <h1 className="text-2xl font-bold text-center">Select a GitHub Repository</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled variant="outline">
              Select a Repository
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>My Repositories</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Repo1</DropdownMenuItem>
              <DropdownMenuItem>Repo2</DropdownMenuItem>
              <DropdownMenuItem>Repo3</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Card className="w-full max-w-lg">
          <CardHeader>
            <div className="flex items-center justify-center">
              <GithubIcon className="w-6 h-6 mr-2" />
              <CardTitle>Selected Repository</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Avatar alt="Avatar" className="w-10 h-10" src="/placeholder.svg?height=40&width=40" />
              <div className="flex flex-col">
                <span>Repo Name</span>
                <Badge>Private</Badge>
              </div>
            </div>
            <p className="mt-4">Repo description...</p>
          </CardContent>
        </Card>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled variant="outline">
              Select a Pull Request
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Recent Pull Requests</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Pull Request 1</DropdownMenuItem>
              <DropdownMenuItem>Pull Request 2</DropdownMenuItem>
              <DropdownMenuItem>Pull Request 3</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Card className="w-full max-w-lg">
          <CardHeader>
            <div className="flex items-center justify-center">
              <GitPullRequestIcon className="w-6 h-6 mr-2" />
              <CardTitle>Selected Pull Request</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Avatar alt="Avatar" className="w-10 h-10" src="/placeholder.svg?height=40&width=40" />
              <div className="flex flex-col">
                <span>Pull Request Title</span>
                <Badge>Open</Badge>
              </div>
            </div>
            <p className="mt-4">Pull request description...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </main>
  )
}

function GitPullRequestIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
