import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function DesignThinkingSection() {
  return (
    <section className="mb-24 sm:mb-32">
      <div className="text-center mb-16 sm:mb-20">
        <Badge className="mb-6 text-base px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 text-gray-200">
          Design Thinking Framework
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">How RAPPORTÖR Works</h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Our solution addresses key dimensions of innovation and impact
        </p>
      </div>

      <div className="grid gap-10 sm:gap-12">
        {/* Usability */}
        <Card className="border-l-4 border-l-blue-500 border-gray-800 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <CardTitle className="text-white text-3xl sm:text-4xl tracking-tight">Usability</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-base sm:text-lg">Who are we designing for?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Target Users</h4>
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl border border-blue-800">
                  <p className="font-medium text-gray-100">Primary: Factory Floor Workers</p>
                  <p className="text-sm text-gray-400 mt-1">Who report safety incidents</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl border border-blue-800">
                  <p className="font-medium text-gray-100">Secondary: Safety Managers</p>
                  <p className="text-sm text-gray-400 mt-1">Who analyze incident data and identify patterns</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl border border-blue-800">
                  <p className="font-medium text-gray-100">Tertiary: Factory Managers</p>
                  <p className="text-sm text-gray-400 mt-1">Who need actionable insights for prevention strategies</p>
                </div>
              </div>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-3">User Experience Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg mt-0.5">✓</span>
                  <span className="text-gray-300 leading-relaxed">One-click data cleaning and standardization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg mt-0.5">✓</span>
                  <span className="text-gray-300 leading-relaxed">Intuitive dashboards with visual analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg mt-0.5">✓</span>
                  <span className="text-gray-300 leading-relaxed">Automated insight generation from complex data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg mt-0.5">✓</span>
                  <span className="text-gray-300 leading-relaxed">Interactive reports that empower decision-making</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Feasibility */}
        <Card className="border-l-4 border-l-green-500 border-gray-800 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <CardTitle className="text-white text-3xl sm:text-4xl tracking-tight">Feasibility</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-base sm:text-lg">How can we build this?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-4 items-center">
                {/* React */}
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-transparent">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#61DAFB">
                    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1"/>
                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" fill="none" stroke="#61DAFB" strokeWidth="1"/>
                  </svg>
                  <span className="font-medium text-sm text-gray-100">React</span>
                </div>
                {/* Next.js */}
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-transparent">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                  </svg>
                  <span className="font-medium text-sm text-gray-100">Next.js</span>
                </div>
                {/* Python */}
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-transparent">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#FFD43B"/>
                    <path d="M12.18 11.03a.52.52 0 0 0-.08.19.52.52 0 0 0 .08.19l.11.15.15.11c.06.04.12.06.19.08.07.01.14.01.21-.01.07-.02.13-.04.19-.08l.15-.11.11-.15c.04-.06.06-.12.08-.19.01-.07.01-.14-.01-.21-.02-.07-.04-.13-.08-.19l-.11-.15-.15-.11a.52.52 0 0 0-.19-.08.52.52 0 0 0-.21.01.52.52 0 0 0-.19.08l-.15.11-.11.15z" fill="#013243"/>
                  </svg>
                  <span className="font-medium text-sm text-gray-100">Python</span>
                </div>
                {/* TensorFlow */}
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-transparent">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6F00">
                    <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"/>
                  </svg>
                  <span className="font-medium text-sm text-gray-100">TensorFlow</span>
                </div>
                {/* scikit-learn */}
                <div className="flex items-center gap-2 p-3 border rounded-lg bg-transparent">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F7931E">
                    <path d="M12.906 0C9.5 0 6.76 2.74 6.76 6.15c0 1.2.333 2.326.914 3.287l5.233 9.057 5.232-9.057c.581-.961.914-2.087.914-3.287 0-3.41-2.74-6.15-6.147-6.15zm0 9.906a3.756 3.756 0 1 1 0-7.512 3.756 3.756 0 0 1 0 7.512zM1.938 18.75L7.17 9.693c.581-.961.914-2.087.914-3.287C8.084 2.996 5.344.256 1.937.256S-4.23 2.996-4.23 6.406c0 1.2.333 2.326.914 3.287l5.232 9.057zm0-15.657a2.906 2.906 0 1 1 0 5.812 2.906 2.906 0 0 1 0-5.812zm21 15.657l5.232-9.057c.581-.961.914-2.087.914-3.287 0-3.41-2.74-6.15-6.146-6.15-3.407 0-6.147 2.74-6.147 6.15 0 1.2.333 2.326.914 3.287l5.233 9.057zm0-15.657a2.906 2.906 0 1 1 0 5.812 2.906 2.906 0 0 1 0-5.812z"/>
                  </svg>
                  <span className="font-medium text-sm text-gray-100">scikit-learn</span>
                </div>
              </div>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-3">Core Capabilities</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg mt-0.5">→</span>
                  <span className="text-gray-300 leading-relaxed">AI-powered data cleaning and standardization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg mt-0.5">→</span>
                  <span className="text-gray-300 leading-relaxed">Pattern recognition across multiple variables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg mt-0.5">→</span>
                  <span className="text-gray-300 leading-relaxed">Predictive risk scoring for different areas/times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg mt-0.5">→</span>
                  <span className="text-gray-300 leading-relaxed">REST API integration with existing IKEA systems</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Viability */}
        <Card className="border-l-4 border-l-purple-500 border-gray-800 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <CardTitle className="text-white text-3xl sm:text-4xl tracking-tight">Viability</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-base sm:text-lg">How does this align with IKEA?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Strategic Alignment</h4>
              <div className="p-5 bg-gradient-to-br from-purple-950 to-purple-900 rounded-xl border border-purple-800 space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  RAPPORTÖR directly supports IKEA's core values of safety, responsibility, and continuous improvement.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By preventing workplace accidents and improving safety management, we protect IKEA's most valuable asset: its people.
                </p>
              </div>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Measurable Impact</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-5 bg-gradient-to-br from-purple-950 to-purple-900 rounded-xl border border-purple-800">
                  <p className="text-4xl font-bold text-purple-400 mb-2">70%</p>
                  <p className="text-sm text-gray-400">Reduction in analysis time</p>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-purple-950 to-purple-900 rounded-xl border border-purple-800">
                  <p className="text-4xl font-bold text-purple-400 mb-2">30%</p>
                  <p className="text-sm text-gray-400">Potential accident prevention</p>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-purple-950 to-purple-900 rounded-xl border border-purple-800">
                  <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
                  <p className="text-sm text-gray-400">Data quality improvement</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability */}
        <Card className="border-l-4 border-l-emerald-500 border-gray-800 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-white text-3xl sm:text-4xl tracking-tight">Sustainability</CardTitle>
            </div>
            <CardDescription className="text-gray-400 text-base sm:text-lg">What is our environmental and social impact?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Positive Impacts</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
                  <span className="text-emerald-400 font-bold text-xl mt-0.5">+</span>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-100">Worker Safety & Well-being</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Preventing accidents improves worker health and reduces injury-related impacts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
                  <span className="text-emerald-400 font-bold text-xl mt-0.5">+</span>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-100">Environmental Hazard Prevention</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Predict and prevent fires, chemical leaks, and other environmental hazards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-xl border border-emerald-800">
                  <span className="text-emerald-400 font-bold text-xl mt-0.5">+</span>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-100">Reduced Emergency Response Impact</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Fewer accidents = reduced emissions from emergency vehicles and medical responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="bg-gray-700" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-3">Considerations & Risks</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-lg mt-0.5">⚠</span>
                  <span className="text-gray-300 leading-relaxed">Data privacy and security for sensitive incident reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-lg mt-0.5">⚠</span>
                  <span className="text-gray-300 leading-relaxed">Potential algorithmic bias in pattern recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-lg mt-0.5">⚠</span>
                  <span className="text-gray-300 leading-relaxed">Energy consumption of ML model training and inference</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}