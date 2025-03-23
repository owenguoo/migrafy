import { Search, Users, Globe, Calendar } from "lucide-react";
import { Button } from "@/frontend/components/ui/button";
import { Layout } from "@/frontend/components/layout/layout";

export default function CommunityPage() {
  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Community</h2>
          <p className="text-[#6a6a6a]">
            Connect with other immigrants and build your network
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6a6a6a]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search communities"
              className="pl-10 pr-4 py-2 border border-[#d9e0e7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2273ce] w-64"
            />
          </div>
          <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 flex items-center gap-2">
            <Users size={16} />
            Create Community
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex border border-[#d9e0e7] rounded-lg overflow-hidden">
          <button className="flex-1 py-3 text-center">Discover</button>
          <button className="flex-1 py-3 text-center bg-[#d9e0e7]/50 text-[#2273ce] font-medium flex items-center justify-center">
            My Communities
            <span className="ml-2 bg-[#2273ce] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button className="flex-1 py-3 text-center">Events</button>
          <button className="flex-1 py-3 text-center">Community Feed</button>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="border border-[#d9e0e7] rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Community 1 */}
          <div className="border border-[#d9e0e7] rounded-lg p-4">
            <div className="flex gap-4 mb-3">
              <div className="w-16 h-16 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                <Users size={24} className="text-[#6a6a6a]" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Sunday Pilates in Toronto</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                    Interest-based
                  </span>
                  <span className="text-xs text-[#6a6a6a]">128 members</span>
                </div>
                <p className="text-xs text-[#6a6a6a]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#6a6a6a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-[#6a6a6a]">45 posts this week</span>
            </div>
            <Button className="w-full bg-[#2273ce] hover:bg-[#2273ce]/90">
              Join Community
            </Button>
          </div>

          {/* Community 2 */}
          <div className="border border-[#d9e0e7] rounded-lg p-4">
            <div className="flex gap-4 mb-3">
              <div className="w-16 h-16 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                <Users size={24} className="text-[#6a6a6a]" />
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  Retail & Customer Service Network
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                    Industry
                  </span>
                  <span className="text-xs text-[#6a6a6a]">142 members</span>
                </div>
                <p className="text-xs text-[#6a6a6a]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#6a6a6a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-[#6a6a6a]">32 posts this week</span>
            </div>
            <Button className="w-full bg-[#2273ce] hover:bg-[#2273ce]/90">
              Join Community
            </Button>
          </div>

          {/* Community 3 */}
          <div className="border border-[#d9e0e7] rounded-lg p-4">
            <div className="flex gap-4 mb-3">
              <div className="w-16 h-16 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                <Users size={24} className="text-[#6a6a6a]" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Community</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                    Language
                  </span>
                  <span className="text-xs text-[#6a6a6a]">128 members</span>
                </div>
                <p className="text-xs text-[#6a6a6a]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#6a6a6a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-[#6a6a6a]">16 posts this week</span>
            </div>
            <Button className="w-full bg-[#2273ce] hover:bg-[#2273ce]/90">
              Join Community
            </Button>
          </div>

          {/* Community 4 */}
          <div className="border border-[#d9e0e7] rounded-lg p-4">
            <div className="flex gap-4 mb-3">
              <div className="w-16 h-16 bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                <Users size={24} className="text-[#6a6a6a]" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Community</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#d9e0e7] text-[#6a6a6a] text-xs px-2 py-0.5 rounded">
                    Country-based
                  </span>
                  <span className="text-xs text-[#6a6a6a]">128 members</span>
                </div>
                <p className="text-xs text-[#6a6a6a]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#6a6a6a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-[#6a6a6a]">
                160 posts this week
              </span>
            </div>
            <Button className="w-full bg-[#2273ce] hover:bg-[#2273ce]/90">
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recommended Communities */}
        <div className="border border-[#d9e0e7] rounded-lg p-6 md:col-span-2">
          <h3 className="text-lg font-semibold mb-2">
            Recommended Communities
          </h3>
          <p className="text-sm text-[#6a6a6a] mb-4">
            Based on your profile and interests
          </p>

          <div className="space-y-4">
            {/* Recommended Community 1 */}
            <div className="border border-[#d9e0e7] rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#bddfff] p-2 rounded-lg">
                  <Globe size={20} className="text-[#2273ce]" />
                </div>
                <div>
                  <h4 className="font-medium">Retail Professionals Network</h4>
                  <p className="text-xs text-[#6a6a6a]">
                    320 members • 87 posts this week
                  </p>
                </div>
              </div>
              <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 text-xs py-1 h-8 px-4">
                Join
              </Button>
            </div>

            {/* Recommended Community 2 */}
            <div className="border border-[#d9e0e7] rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#bddfff] p-2 rounded-lg">
                  <Globe size={20} className="text-[#2273ce]" />
                </div>
                <div>
                  <h4 className="font-medium">
                    Painting - Claude Monet Inspired
                  </h4>
                  <p className="text-xs text-[#6a6a6a]">
                    156 members • 25 posts this week
                  </p>
                </div>
              </div>
              <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 text-xs py-1 h-8 px-4">
                Join
              </Button>
            </div>

            {/* Recommended Community 3 */}
            <div className="border border-[#d9e0e7] rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#bddfff] p-2 rounded-lg">
                  <Globe size={20} className="text-[#2273ce]" />
                </div>
                <div>
                  <h4 className="font-medium">Community Name</h4>
                  <p className="text-xs text-[#6a6a6a]">
                    265 members • 20 posts this week
                  </p>
                </div>
              </div>
              <Button className="bg-[#2273ce] hover:bg-[#2273ce]/90 text-xs py-1 h-8 px-4">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="border border-[#d9e0e7] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={18} className="text-[#2273ce]" />
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
          </div>
          <p className="text-sm text-[#6a6a6a] mb-4">
            Events from your communities
          </p>

          <div className="space-y-4">
            {/* Event 1 */}
            <div className="flex gap-3">
              <div className="bg-[#bddfff] rounded-lg p-2 text-center w-14 flex-shrink-0">
                <div className="text-xs text-[#2273ce]">MAR</div>
                <div className="text-xl font-bold text-[#2273ce]">24</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">
                  Toronto Newcomers Meetup
                </h4>
                <p className="text-xs text-[#6a6a6a] mb-2">
                  Christie Pits Park • 10:00 AM
                </p>
                <button className="w-full text-xs border border-[#d9e0e7] rounded py-1 text-[#2273ce]">
                  Register
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex gap-3">
              <div className="bg-[#bddfff] rounded-lg p-2 text-center w-14 flex-shrink-0">
                <div className="text-xs text-[#2273ce]">MAR</div>
                <div className="text-xl font-bold text-[#2273ce]">28</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">
                  Resume Workshop • Spanish
                </h4>
                <p className="text-xs text-[#6a6a6a] mb-2">Online • 6:30 PM</p>
                <button className="w-full text-xs border border-[#d9e0e7] rounded py-1 text-[#2273ce]">
                  Register
                </button>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center w-full mt-4 text-sm text-[#2273ce]">
            View All Events
          </button>
        </div>
      </div>
    </Layout>
  );
}
