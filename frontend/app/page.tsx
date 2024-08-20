import BadgesCarrousel from '@/components/badges-carrousel'
import CommunityBadges from '@/components/community-badges'
import LastActivities from '@/components/last-activities'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-10">
      <header className="border-b border-black bg-elevation/background1 sm:bg-transparent">
        <div className="flex justify-between items-center container max-w-7xl mx-auto h-[72px] px-4 sm:px-8">
          <div className="space-x-6 flex items-center">
            <div className="h-8 rounded-md bg-gradient-to-r from-[#27D17F]/10 to-white/10 p-[1px] w-28">
              <div className="flex h-full rounded-md w-full items-center justify-center text-text/primary bg-elevation/background1 back">
                <h1 className="text-text/primary text-base">Logo</h1>
              </div>
            </div>

            <nav className="items-center gap-2 hidden sm:flex">
              <a href="#" className="font-semibold text-sm px-3">
                Dashboard
              </a>
              <a href="#" className="font-semibold text-sm px-3">
                Tasks
              </a>
              <a
                href="#"
                className="font-semibold text-sm px-3 text-primary/hover"
              >
                Badges
              </a>
              <a href="#" className="font-semibold text-sm px-3">
                Leaderboard
              </a>
              <a href="#" className="font-semibold text-sm px-3">
                Connections
              </a>
            </nav>
          </div>

          <div className="flex gap-2">
            <button className="h-10 rounded-full text-text/secondary px-4 border border-primary/hover text-sm font-semibold hidden sm:block">
              How It Works
            </button>
            <button className="h-10 px-3 gap-2 rounded-md bg-elevation/background3 text-text/primary font-semibold text-sm flex items-center justify-center">
              <Image
                src="/user.png"
                alt="eth-logo"
                width={18}
                height={18}
                className="rounded-full"
              />
              bongo.eth
            </button>
            <button className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="sm:hidden px-4">
        <nav className="gap-2 flex bg-elevation/background3 rounded-md flex-wrap p-2">
          <a
            href="#"
            className="font-semibold text-sm px-3 h-10 flex items-center justify-center"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="font-semibold text-sm px-3 h-10 flex items-center justify-center"
          >
            Tasks
          </a>
          <a
            href="#"
            className="font-semibold text-sm px-3 h-10 flex items-center justify-center text-primary/hover"
          >
            Badges
          </a>
          <a
            href="#"
            className="font-semibold text-sm px-3 h-10 flex items-center justify-center"
          >
            Leaderboard
          </a>
          <a
            href="#"
            className="font-semibold text-sm px-3 h-10 flex items-center justify-center"
          >
            Connections
          </a>
        </nav>
      </div>

      <div className="container max-w-7xl mx-auto space-y-6 px-4 sm:px-8">
        <LastActivities />

        <BadgesCarrousel />

        <CommunityBadges />
      </div>

      <footer className="bg-elevation/background2 h-[49px]">
        <div className="container max-w-7xl mx-auto space-y-6 h-full flex items-center px-4 sm:px-8">
          <div className="flex items-center gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elevation/background3 h-8 w-8 rounded-full flex items-center justify-center"
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9374 1.69092C18.4806 1.03828 16.9183 0.557438 15.2849 0.282038C15.2552 0.276725 15.2255 0.290008 15.2101 0.316574C15.0092 0.665473 14.7867 1.12064 14.6308 1.47839C12.874 1.22159 11.1261 1.22159 9.40533 1.47839C9.24947 1.11267 9.01883 0.665473 8.81701 0.316574C8.8017 0.290894 8.77197 0.277611 8.74224 0.282038C7.10972 0.556553 5.54747 1.0374 4.08974 1.69092C4.07712 1.69623 4.06631 1.70508 4.0591 1.7166C1.09588 6.03887 0.284129 10.2549 0.682348 14.4186C0.68415 14.439 0.695862 14.4585 0.712079 14.4709C2.66714 15.8727 4.56093 16.7237 6.41959 17.2878C6.44932 17.2966 6.48085 17.286 6.49977 17.2621C6.93944 16.6759 7.33135 16.0578 7.6674 15.4078C7.68722 15.3697 7.6683 15.3245 7.62776 15.3095C7.00611 15.0792 6.41418 14.7985 5.84478 14.4797C5.79974 14.4541 5.79613 14.3912 5.83758 14.3611C5.9574 14.2734 6.07723 14.1822 6.19165 14.0901C6.21237 14.0733 6.2412 14.0697 6.26553 14.0804C10.0063 15.7478 14.056 15.7478 17.7526 14.0804C17.7769 14.0689 17.8058 14.0724 17.8274 14.0892C17.9418 14.1813 18.0616 14.2734 18.1824 14.3611C18.2238 14.3912 18.2211 14.4541 18.1761 14.4797C17.6067 14.8047 17.0147 15.0792 16.3922 15.3086C16.3516 15.3236 16.3336 15.3697 16.3534 15.4078C16.6967 16.0569 17.0886 16.675 17.5202 17.2612C17.5382 17.286 17.5706 17.2966 17.6004 17.2878C19.468 16.7237 21.3618 15.8727 23.3169 14.4709C23.334 14.4585 23.3448 14.4399 23.3466 14.4195C23.8232 9.60578 22.5484 5.42431 19.9672 1.71748C19.9608 1.70508 19.95 1.69623 19.9374 1.69092ZM8.22599 11.8834C7.09981 11.8834 6.17183 10.8739 6.17183 9.63412C6.17183 8.39438 7.08179 7.38487 8.22599 7.38487C9.37921 7.38487 10.2982 8.40323 10.2802 9.63412C10.2802 10.8739 9.3702 11.8834 8.22599 11.8834ZM15.821 11.8834C14.6948 11.8834 13.7668 10.8739 13.7668 9.63412C13.7668 8.39438 14.6768 7.38487 15.821 7.38487C16.9742 7.38487 17.8932 8.40323 17.8752 9.63412C17.8752 10.8739 16.9742 11.8834 15.821 11.8834Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elevation/background3 h-8 w-8 rounded-full flex items-center justify-center"
            >
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8307 0.116821H17.6345L11.5089 7.11825L18.7154 16.6454H13.0726L8.6533 10.8671L3.59644 16.6454H0.790723L7.34269 9.15668L0.429688 0.116821H6.21537L10.2102 5.39825L14.8307 0.116821ZM13.8466 14.967H15.4003L5.37122 1.70707H3.70408L13.8466 14.967Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-elevation/background3 h-8 w-8 rounded-full flex items-center justify-center"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.74331 0.694153C4.31586 0.694153 0.736694 4.29971 0.736694 8.76026C0.736694 12.3258 3.02999 15.344 6.2114 16.4122C6.60916 16.4925 6.75485 16.2387 6.75485 16.0251C6.75485 15.8381 6.74174 15.1972 6.74174 14.5293C4.51449 15.0102 4.05069 13.5678 4.05069 13.5678C3.69276 12.633 3.16241 12.3927 3.16241 12.3927C2.43343 11.8986 3.21551 11.8986 3.21551 11.8986C4.02414 11.952 4.44845 12.7265 4.44845 12.7265C5.16415 13.955 6.31743 13.6079 6.7814 13.3942C6.84761 12.8734 7.05985 12.5128 7.2852 12.3126C5.50881 12.1256 3.63982 11.4312 3.63982 8.33284C3.63982 7.45145 3.95776 6.73034 4.46156 6.16951C4.38207 5.96924 4.10362 5.14111 4.54121 4.03273C4.54121 4.03273 5.21725 3.81902 6.74158 4.8607C7.3942 4.68413 8.06723 4.59431 8.74331 4.59356C9.41936 4.59356 10.1085 4.68714 10.7449 4.8607C12.2694 3.81902 12.9454 4.03273 12.9454 4.03273C13.383 5.14111 13.1044 5.96924 13.0249 6.16951C13.542 6.73034 13.8468 7.45145 13.8468 8.33284C13.8468 11.4312 11.9778 12.1121 10.1882 12.3126C10.4799 12.5663 10.7316 13.0469 10.7316 13.8082C10.7316 14.8899 10.7185 15.758 10.7185 16.025C10.7185 16.2387 10.8644 16.4925 11.262 16.4124C14.4434 15.3438 16.7367 12.3258 16.7367 8.76026C16.7498 4.29971 13.1575 0.694153 8.74331 0.694153Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
