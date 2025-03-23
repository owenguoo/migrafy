import Link from "next/link";
import { Layout } from "@/frontend/components/layout/layout";
import { ChevronRight, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";

export default function LanguageLearningPage() {
  return (
    <Layout>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Language Learning</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-[#d9e0e7]"
            >
              <span className="text-sm">Take Assessment</span>
            </Button>
            <Button className="flex items-center gap-2 bg-[#2273ce] hover:bg-[#2273ce]/90">
              <MessageSquare size={16} />
              <span className="text-sm">Language Assistant</span>
            </Button>
          </div>
        </div>
        <p className="text-[#6a6a6a]">
          Improve your English skills for work and daily life
        </p>
      </div>

      {/* Progress and Practice Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Progress Card */}
        <div className="border border-[#d9e0e7] rounded-lg p-6 md:w-[30%]">
          <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
          <p className="text-sm text-[#6a6a6a] mb-4">
            Overall language development
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Speaking</span>
                <span className="text-sm">72%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Listening</span>
                <span className="text-sm">32%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "32%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Reading</span>
                <span className="text-sm">89%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Writing</span>
                <span className="text-sm">65%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Vocabulary</span>
                <span className="text-sm">70%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center w-full mt-6 text-sm text-[#2273ce]">
            View Detailed Progress
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Practice Card */}
        <div className="border border-[#d9e0e7] rounded-lg p-6 md:w-[70%]">
          <h3 className="text-lg font-semibold mb-2">
            Practice with AI Assistant
          </h3>
          <p className="text-sm text-[#6a6a6a] mb-4">
            Improve your speaking and listening skills
          </p>

          <div className="bg-[#d9e0e7]/50 rounded-lg p-6 mb-4 flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-lg inline-block mb-3">
              <MessageSquare size={24} className="text-[#2273ce]" />
            </div>
            <h4 className="font-semibold mb-2">
              Personalized Language Practice
            </h4>
            <p className="text-sm text-[#6a6a6a] mb-4">
              Our AI assistant helps you practice English in a safe,
              judgment-free environment. Get instant feedback and suggestions to
              improve your skills.
            </p>
            <Link href="/language-assistant">
              <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90">
                Start Practice
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-[#d9e0e7] rounded-lg p-3">
              <div className="flex items-start mb-2">
                <MessageSquare size={16} className="text-[#2273ce] mt-1 mr-2" />
                <div>
                  <h5 className="text-xs font-medium">
                    Daily Conversation Practice
                  </h5>
                  <p className="text-xs text-[#6a6a6a]">
                    Practice everyday conversations with our AI assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-xs text-[#6a6a6a]">
                  <Clock size={12} className="mr-1" />
                  10-15 min
                </div>
                <button className="text-xs text-[#2273ce]">Start</button>
              </div>
            </div>

            <div className="border border-[#d9e0e7] rounded-lg p-3">
              <div className="flex items-start mb-2">
                <MessageSquare size={16} className="text-[#2273ce] mt-1 mr-2" />
                <div>
                  <h5 className="text-xs font-medium">Pronunciation Trainer</h5>
                  <p className="text-xs text-[#6a6a6a]">
                    Improve your pronunciation with feedback on difficult sounds
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-xs text-[#6a6a6a]">
                  <Clock size={12} className="mr-1" />
                  5-10 min
                </div>
                <button className="text-xs text-[#2273ce]">Start</button>
              </div>
            </div>

            <div className="border border-[#d9e0e7] rounded-lg p-3">
              <div className="flex items-start mb-2">
                <MessageSquare size={16} className="text-[#2273ce] mt-1 mr-2" />
                <div>
                  <h5 className="text-xs font-medium">Vocabulary Builder</h5>
                  <p className="text-xs text-[#6a6a6a]">
                    Expand your vocabulary with spaced repetition learning
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-xs text-[#6a6a6a]">
                  <Clock size={12} className="mr-1" />
                  5-10 min
                </div>
                <button className="text-xs text-[#2273ce]">Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
