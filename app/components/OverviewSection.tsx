import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OverviewSection() {
  return (
    <section className="mb-24 sm:mb-32">
      <div className="text-center mb-12 sm:mb-16">
        <Badge className="mb-6 text-base px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 text-gray-200">
          Innovation Overview
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">RAPPORTÖR</h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Intelligent Data Quality & Analytics Platform for IKEA Safety Management
        </p>
      </div>

      {/* Video Demo */}
      <Card className="mb-12 overflow-hidden border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video bg-gradient-to-br from-blue-950 to-purple-950">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/vedio.mp4"
              title="Rapportör Demo"
              loop
              controls
            />
          </div>
        </CardContent>
      </Card>

      {/* Problem Statement */}
      <Card className="border-gray-800 shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl sm:text-3xl tracking-tight text-white">The Problem We're Solving</CardTitle>
          <CardDescription className="text-base text-gray-400">
            Transforming workplace safety through intelligent data analytics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Safety managers at IKEA cannot extract meaningful insights from incident data due to:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-950 border border-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">!</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-100">Data Quality Issues</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  60% of time spent cleaning data instead of analyzing
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-950 border border-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">!</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-100">Inconsistent Categorization</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Similar incidents categorized differently across reports
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-950 border border-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">!</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-100">No Predictive Capabilities</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Unable to identify near-miss patterns that predict accidents
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-950 border border-red-900 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">!</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-100">Missing Context</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
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