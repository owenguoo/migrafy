import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Settings,
  Mic,
  Video,
  BookOpen,
  Info,
} from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { Layout } from "@/frontend/components/layout/layout";

export default function LanguageAssistantPage() {
  return (
    <Layout>
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-2">
          <Link
            href="/language-learning"
            className="text-[#6a6a6a] hover:text-[#2273ce]"
          >
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-2xl font-bold">Language Assistant</h2>
          <div className="ml-auto flex gap-2">
            <button className="p-2 text-[#2273ce] hover:bg-[#bddfff] rounded-full">
              <Play size={20} />
            </button>
            <button className="p-2 text-[#6a6a6a] hover:bg-[#d9e0e7] rounded-full">
              <Info size={20} />
            </button>
            <button className="p-2 text-[#6a6a6a] hover:bg-[#d9e0e7] rounded-full">
              <Settings size={20} />
            </button>
          </div>
        </div>
        <p className="text-[#6a6a6a]">Practice Live with our AI assistant!</p>
      </div>

      {/* Practice Tabs */}
      <div className="flex border-b border-[#d9e0e7] mb-6">
        <button className="px-6 py-3 text-[#2273ce] border-b-2 border-[#2273ce] font-medium">
          Free Practice
        </button>
        <button className="px-6 py-3 text-[#6a6a6a]">Job Interview</button>
        <button className="px-6 py-3 text-[#6a6a6a]">
          Workplace Conversation
        </button>
      </div>

      {/* AI Assistant Section */}
      <div className="border border-[#d9e0e7] rounded-lg p-8 bg-[#f5f7fa] mb-6">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 relative">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="AI Assistant Avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center">
            Hi, I'm Steven and I'll help you improve your English.
          </h3>

          <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 mb-6">
            Practice Live with AI
          </Button>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <button className="w-14 h-14 bg-[#2273ce] text-white rounded-lg flex items-center justify-center">
                <Mic size={24} />
              </button>
              <span className="text-xs mt-1 text-[#6a6a6a]">mic on</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-14 h-14 bg-[#2273ce] text-white rounded-lg flex items-center justify-center">
                <Video size={24} />
              </button>
              <span className="text-xs mt-1 text-[#6a6a6a]">video on</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-[#6a6a6a]">
          <BookOpen size={16} />
          <span>
            Suggested Topics: Customer inquiries, Return policies, Product
            information
          </span>
        </div>
      </div>

      {/* Transcript and Feedback */}
      <div className="flex gap-6">
        {/* Live Transcript */}
        <div className="flex-1 border border-[#d9e0e7] rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Live Transcript</h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium">
                Steven:{" "}
                <span className="font-normal">
                  Hello! I'm your language learning assistant. How can I help
                  you practice English for customer service today?
                </span>
              </p>
            </div>

            <div>
              <p className="font-medium">
                You:{" "}
                <span className="font-normal text-[#2273ce]">
                  How would I help someone who wants to give back item, no
                  receipt?
                </span>
              </p>
            </div>

            <div>
              <p className="font-medium">Steven:</p>
            </div>
          </div>
        </div>

        {/* Live Feedback */}
        <div className="flex-1 border border-[#d9e0e7] rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Live Feedback</h3>

          <div className="space-y-4 mb-8">
            <div>
              <div className="flex justify-between mb-1">
                <span>Pronunciation</span>
                <span>72%</span>
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
                <span>Grammar</span>
                <span>45%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Vocabulary</span>
                <span>89%</span>
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
                <span>Fluency</span>
                <span>65%</span>
              </div>
              <div className="h-2 bg-[#d9d9d9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6cadf5] rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-3">Suggested Improvements</h4>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#ffebeb] flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#b53030"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#b53030"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-[#b53030]">
                give back item no receipt
              </span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#ebffeb] flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00a508"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm text-[#00a508]">
                return an item without a receipt
              </span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                <Info size={16} className="text-[#6a6a6a]" />
              </div>
              <span className="text-sm text-[#6a6a6a]">
                Being specific and descriptive provides more information and
                demonstrates better vocabulary.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
