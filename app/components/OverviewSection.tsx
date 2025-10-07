import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OverviewSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge className="mb-4 text-lg px-4 py-2">Innovation Overview</Badge>
        <h2 className="text-5xl font-bold mb-4">RAPPORTÖR</h2>
        <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          Intelligent Data Quality & Analytics Platform for IKEA Safety Management
        </p>
      </div>

      {/* Video/Demo Placeholder */}
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center">
            {/* Placeholder for video embed */}
            <div className="text-center p-8">
              <div className="mb-4">
                <svg
                  className="mx-auto h-24 w-24 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">
                Demo Video Placeholder
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Insert your tutorial/presentation video here
              </p>
              {/* Uncomment and replace with your video embed
              <iframe
                className="w-full h-full"
                src="YOUR_VIDEO_URL"
                title="Rapportör Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Problem Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">The Problem We're Solving</CardTitle>
          <CardDescription>
            Transforming workplace safety through intelligent data analytics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Safety managers at IKEA cannot extract meaningful insights from incident data due to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300 font-bold">!</span>
              </div>
              <div>
                <h4 className="font-semibold">Data Quality Issues</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  60% of time spent cleaning data instead of analyzing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300 font-bold">!</span>
              </div>
              <div>
                <h4 className="font-semibold">Inconsistent Categorization</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Similar incidents categorized differently across reports
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300 font-bold">!</span>
              </div>
              <div>
                <h4 className="font-semibold">No Predictive Capabilities</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Unable to identify near-miss patterns that predict accidents
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300 font-bold">!</span>
              </div>
              <div>
                <h4 className="font-semibold">Missing Context</h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Critical context missing from reports, limiting analysis depth
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}