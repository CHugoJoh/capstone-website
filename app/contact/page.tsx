import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-gray-300 hover:text-white hover:bg-gray-800">
              ← Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 text-gray-200">Team 6</Badge>
          <h1 className="text-5xl font-bold mb-4 text-white">Contact Our Team</h1>
          <p className="text-xl text-gray-400">
            Get in touch with the RAPPORTÖR development team
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Team Members</CardTitle>
              <CardDescription className="text-gray-400">
                Chalmers University of Technology - IKEA Capstone Project 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Add your actual team members here */}
                <div className="p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-semibold mb-1 text-white">Team Member 1</h3>
                  <p className="text-sm text-gray-400 mb-2">Role/Position</p>
                  <a
                    href="mailto:member1@chalmers.se"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    member1@chalmers.se
                  </a>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-semibold mb-1 text-white">Team Member 2</h3>
                  <p className="text-sm text-gray-400 mb-2">Role/Position</p>
                  <a
                    href="mailto:member2@chalmers.se"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    member2@chalmers.se
                  </a>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-semibold mb-1 text-white">Team Member 3</h3>
                  <p className="text-sm text-gray-400 mb-2">Role/Position</p>
                  <a
                    href="mailto:member3@chalmers.se"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    member3@chalmers.se
                  </a>
                </div>
                <div className="p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                  <h3 className="text-lg font-semibold mb-1 text-white">Team Member 4</h3>
                  <p className="text-sm text-gray-400 mb-2">Role/Position</p>
                  <a
                    href="mailto:member4@chalmers.se"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    member4@chalmers.se
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optional: Add team photo section */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Meet the Team</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/team-photo.jpg"
                alt="Team Photo"
                width={800}
                height={500}
                className="rounded-lg"
              />
            </CardContent>
          </Card> */}

          <Card className="border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">About the Project</CardTitle>
              <CardDescription className="text-gray-400">RAPPORTÖR - Intelligent Safety Analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We're a team of students from Chalmers University working on an innovative solution
                to improve workplace safety at IKEA through intelligent data analytics and AI-powered
                insights. Feel free to reach out if you have any questions about our project or would
                like to collaborate!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
