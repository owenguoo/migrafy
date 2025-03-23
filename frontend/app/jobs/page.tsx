import { ChevronRight, Search, MapPin, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

export default function JobsPage() {
  return (
    <Layout>
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Job Search</h2>
          <p className="text-[#6a6a6a]">
            Find opportunities matched to your skills and experience
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6a6a6a]"
              size={18}
            />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full pl-10 pr-4 py-2.5 border border-[#d9e0e7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2273ce]"
            />
          </div>
          <div className="relative flex-1">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6a6a6a]"
              size={18}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-2.5 border border-[#d9e0e7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2273ce]"
            />
          </div>
          <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 px-6">
            Search Jobs
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Filters Panel */}
          <div className="w-72 border border-[#d9e0e7] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                  stroke="#6a6a6a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Filters</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Job Type</span>
                  <ChevronRight size={16} className="text-[#6a6a6a]" />
                </div>
                <div className="h-px bg-[#d9e0e7]"></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Experience Level</span>
                  <ChevronRight size={16} className="text-[#6a6a6a]" />
                </div>
                <div className="h-px bg-[#d9e0e7]"></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Salary Range</span>
                  <ChevronRight size={16} className="text-[#6a6a6a]" />
                </div>
                <div className="h-px bg-[#d9e0e7]"></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Industry</span>
                  <ChevronRight size={16} className="text-[#6a6a6a]" />
                </div>
                <div className="h-px bg-[#d9e0e7]"></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Date Posted</span>
                  <ChevronRight size={16} className="text-[#6a6a6a]" />
                </div>
                <div className="h-px bg-[#d9e0e7]"></div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button className="w-full bg-[#2273ce] hover:bg-[#2273ce]/90">
                Apply Filters
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#d9e0e7] text-[#6a6a6a] hover:text-[#2273ce]"
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1 border border-[#d9e0e7] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">Job Matches</h3>
                <p className="text-sm text-[#6a6a6a]">
                  Based on your skills and experience
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#6a6a6a]">Sort by:</span>
                <div className="flex items-center gap-1 border border-[#d9e0e7] rounded px-3 py-1.5">
                  <span className="text-sm">Best Match</span>
                  <ChevronRight
                    size={16}
                    className="rotate-90 text-[#6a6a6a]"
                  />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#d9e0e7] mb-6">
              <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-[#2273ce] text-[#2273ce]">
                <span>Best Matches</span>
                <span className="bg-[#bddfff] text-[#2273ce] text-xs px-2 py-0.5 rounded-full">
                  1
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-[#6a6a6a]">
                <span>Applied</span>
                <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-[#6a6a6a]">
                <span>Saved</span>
                <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded-full">
                  2
                </span>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="border border-[#d9e0e7] rounded-lg p-4">
                <div className="flex gap-4">
                  <div className="bg-[#bddfff] p-3 rounded-lg flex items-center justify-center self-start">
                    <Briefcase size={24} className="text-[#2273ce]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">
                            Customer Service Representative
                          </h4>
                          <span className="bg-[#d0ffbd] text-[#00a508] text-xs px-2 py-0.5 rounded">
                            New
                          </span>
                        </div>
                        <p className="text-xs text-[#6a6a6a]">
                          Rogers Communications
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#bddfff] text-[#2273ce] text-xs px-2 py-0.5 rounded">
                          92% Match
                        </span>
                        <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                          Full-time
                        </span>
                      </div>
                    </div>
                    <p className="text-sm mb-3">
                      Providing excellent customer service via phone and email
                      to resolve customer inquiries and issues.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1 text-xs text-[#6a6a6a] whitespace-nowrap">
                          <MapPin size={12} />
                          <span>Toronto, ON</span>
                        </div>
                        <div className="text-xs text-[#6a6a6a] whitespace-nowrap">
                          $38,000 - $45,000
                        </div>
                        <div className="flex gap-2 overflow-hidden">
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Customer Service
                          </span>
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Qualification
                          </span>
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Qualification
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        <button className="text-[#6a6a6a] hover:text-[#2273ce] p-1.5">
                          <Star size={20} />
                        </button>
                        <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 text-xs py-1 h-8">
                          View Job
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="border border-[#d9e0e7] rounded-lg p-4">
                <div className="flex gap-4">
                  <div className="bg-[#bddfff] p-3 rounded-lg flex items-center justify-center self-start">
                    <Briefcase size={24} className="text-[#2273ce]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <div>
                        <h4 className="font-medium">Job Title</h4>
                        <p className="text-xs text-[#6a6a6a]">Company</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#bddfff] text-[#2273ce] text-xs px-2 py-0.5 rounded">
                          86% Match
                        </span>
                        <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                          Full-time
                        </span>
                      </div>
                    </div>
                    <p className="text-sm mb-3">
                      Providing excellent customer service via phone and email
                      to resolve customer inquiries and issues.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1 text-xs text-[#6a6a6a] whitespace-nowrap">
                          <MapPin size={12} />
                          <span>Location</span>
                        </div>
                        <div className="text-xs text-[#6a6a6a] whitespace-nowrap">
                          $ salary
                        </div>
                        <div className="flex gap-2 overflow-hidden">
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Customer Service
                          </span>
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Qualification
                          </span>
                          <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded whitespace-nowrap">
                            Qualification
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        <button className="text-[#6a6a6a] hover:text-[#2273ce] p-1.5">
                          <Star size={20} />
                        </button>
                        <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 text-xs py-1 h-8">
                          View Job
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional job listings would go here */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
