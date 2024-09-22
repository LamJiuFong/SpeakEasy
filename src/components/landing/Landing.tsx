import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Camera,
  Check,
  Globe2,
  Menu,
  MessageCircle,
  ThumbsUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <header className="px-4 lg:px-6 h-14 pt-4 flex items-center">
        <div>
          <a href="/" className="text-2xl font-bold">
            <img src="/logo.svg" alt="logo" className="h-10" />
          </a>
          <span className="sr-only">SpeakEasy</span>
        </div>
        <nav className="hidden ml-auto md:flex gap-4 sm:gap-6">
          <a
            className="text-[#8C52FF] font-medium hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-[#8C52FF] font-medium hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-[#8C52FF] font-medium hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#why-speakeasy"
          >
            Why SpeakEasy
          </a>
          <a
            className="text-[#8C52FF] font-medium hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-[#8C52FF] font-medium hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="/login"
          >
            Login
          </a>
        </nav>
        <Button
          className="md:hidden ml-auto size-8 p-0"
          onClick={toggleMenu}
          variant="outline"
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </Button>
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 right-0 bg-black/90 p-4">
            <nav className="flex flex-col gap-4">
              <a
                className="text-sm font-medium text-white hover:underline underline-offset-4 hover:text-[#FF3131]"
                href="#features"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                className="text-sm font-medium text-white hover:underline underline-offset-4 hover:text-[#FF3131]"
                href="#how-it-works"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                className="text-sm font-medium text-white hover:underline underline-offset-4 hover:text-[#FF3131]"
                href="#why-speakeasy"
                onClick={toggleMenu}
              >
                Why SpeakEasy
              </a>
              <a
                className="text-sm font-medium text-white hover:underline underline-offset-4 hover:text-[#FF3131]"
                href="#pricing"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium text-white hover:underline underline-offset-4 hover:text-[#FF3131]"
                href="/login"
                onClick={toggleMenu}
              >
                Login
              </a>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl font-bold pb-1 sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-[#8C52FF] via-[#FF3131] to-[#FF3131] text-transparent bg-clip-text">
                Speak Easy, Speak Freely
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Immersive, personalised, scenario-based language learning
                powered by AI
              </p>
              <a href="/login">
                <Button size="lg" className="font-semibold text-lg">
                  Start Learning Now
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 bg-[#8C52FF] text-white"
          id="features"
        >
          <div className="flex flex-col space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center md:mb-8">
              Traditional Language Learning{" "}
              <span className="underline">Falls Short</span>
            </h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3 px-8 md:px-16">
              <div className="flex flex-col items-center space-y-4">
                <BookOpen size={36} />
                <h3 className="text-xl font-bold">Lack of Context</h3>
                <p className="font-medium text-center md:max-w-96">
                  Most platforms teach vocabulary in isolation, making it hard
                  to apply in real-life situations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <MessageCircle size={36} />
                <h3 className="text-xl font-bold">Limited Personalization</h3>
                <p className="font-medium text-center md:max-w-96">
                  One-size-fits-all approaches don't adapt to the learner's
                  interests or pace
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Zap size={36} />
                <h3 className="text-xl font-bold">Boring Repetition</h3>
                <p className="font-medium text-center md:max-w-96">
                  Fixed lessons can be monotonous, leading to disengagement
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="flex flex-col space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center md:mb-8">
              The Solution &#45;{" "}
              <span className="bg-gradient-to-r from-[#8C52FF] via-[#FF3131] to-[#FF3131] text-transparent bg-clip-text">
                SpeakEasy
              </span>
            </h2>
            <div className="flex flex-col space-y-16 items-center">
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-32 space-y-16 md:space-y-0 items-center">
                <div className="flex flex-col items-center space-y-4">
                  <Globe2 size={36} />
                  <h3 className="text-xl font-bold">Contextual Learning</h3>
                  <p className="font-medium text-center md:max-w-96">
                    SpeakEasy immerses you in real-world scenarios, so you learn
                    vocabulary and grammar in context
                  </p>
                </div>
                <img
                  src="/people.png"
                  alt="People Chatting"
                  className="rounded-lg object-cover h-80"
                />
              </div>
              <div className="flex flex-col-reverse md:flex-row space-x-0 md:space-x-32 items-center">
                <img
                  src="/people.png"
                  alt="People Chatting"
                  className="rounded-lg object-cover h-80"
                />
                <div className="flex flex-col items-center space-y-4 mb-16 md:mb-0">
                  <MessageCircle size={36} />
                  <h3 className="text-xl font-bold">
                    Personalized Conversations
                  </h3>
                  <p className="font-medium text-center md:max-w-96">
                    Powered by generative AI, SpeakEasy adapts to your skill
                    level, interests, and learning speed
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-32 space-y-16 md:space-y-0 items-center">
                <div className="flex flex-col items-center space-y-4">
                  <Zap size={36} />
                  <h3 className="text-xl font-bold">Engaging Content</h3>
                  <p className="font-medium text-center md:max-w-96">
                    SpeakEasy provides dynamic, AI-driven lessons that evolve
                    with you, ensuring you never get bored
                  </p>
                </div>
                <img
                  src="/people.png"
                  alt="People Chatting"
                  className="rounded-lg object-cover h-80"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24" id="how-it-works">
          <div className="flex flex-col space-y-12 px-4 md:px-6 lg:px-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center">
                How It Works
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Get Started in 4 Simple Steps
              </p>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <Camera size={36} />
                <h3 className="text-xl font-bold">1. Snap a Photo</h3>
                <p className="font-medium text-center md:max-w-96">
                  Start by logging in and snapping a photo of your environment
                  or an object around you
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Zap size={36} />
                <h3 className="text-xl font-bold">2. AI-Powered Scenarios</h3>
                <p className="font-medium text-center md:max-w-96">
                  Our cutting-edge AI transforms the uploaded photo into a
                  dynamic language-learning scenario
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <MessageCircle size={36} />
                <h3 className="text-xl font-bold">3. Practice Conversations</h3>
                <p className="font-medium text-center md:max-w-96">
                  Dive into the immersive scenario and begin practicing
                  conversations with SpeakEasy's AI
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <ThumbsUp size={36} />
                <h3 className="text-xl font-bold">4. Get Feedback</h3>
                <p className="font-medium text-center md:max-w-96">
                  After completing the conversation, SpeakEasy provides
                  meaningful feedback on your performance
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 bg-[#8C52FF] text-white"
          id="why-speakeasy"
        >
          <div className="flex flex-col space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
              Why SpeakEasy?
            </h2>
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <ThumbsUp size={36} />
                <h3 className="text-xl font-bold">Fun and Stress-Free</h3>
                <p className="font-medium text-center md:max-w-96">
                  You'll never be judged for making mistakes, and every
                  conversation helps you grow
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Globe2 size={36} />
                <h3 className="text-xl font-bold">Flexible Learning</h3>
                <p className="font-medium text-center md:max-w-96">
                  Use SpeakEasy on your commute, at home, or while traveling
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Zap size={36} />
                <h3 className="text-xl font-bold">Always Fresh</h3>
                <p className="font-medium text-center md:max-w-96">
                  No more boring repetition—our AI keeps your lessons fresh and
                  interesting, tailored just for you
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-12 md:pt-24" id="pricing">
          <div className="px-4 md:px-6 lg:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8 md:mb-16">
              Choose Your Plan
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between space-y-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-center">Free</h3>
                  <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    <span className="text-4xl font-bold">$0</span> / month
                  </div>
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Limited access to basic scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>2 scenario generations per day</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline">Get Started</Button>
              </div>
              <div className="flex flex-col justify-between space-y-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-center">Standard</h3>
                  <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    <span className="text-4xl font-bold">$9.99</span> / month
                  </div>
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Access to wider range of scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>10 scenario generations per day</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>More frequent practice sessions</span>
                    </li>
                  </ul>
                </div>
                <Button>Choose Standard</Button>
              </div>
              <div className="flex flex-col justify-between space-y-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 border-2 border-primary">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-center">Premium</h3>
                  <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    <span className="text-4xl font-bold">$19.99</span> / month
                  </div>
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Unlimited access to all scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Unlimited scenario generations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Priority for new content and languages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Advanced pronunciation analysis</span>
                    </li>
                  </ul>
                </div>
                <Button>Choose Premium</Button>
              </div>
              <div className="flex flex-col justify-between space-y-8 p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                  <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Custom scenario creation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span>Tailored for schools or companies</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="flex flex-col space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  Join SpeakEasy and start speaking fluently today
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-2xl dark:text-gray-400">
                  今天开始流利说话!
                </p>
              </div>
              <a href="/login">
                <Button size="lg" className="font-semibold text-lg">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 SpeakEasy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs text-[#8C52FF] hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs text-[#8C52FF] hover:underline underline-offset-4 hover:text-[#FF3131]"
            href="#"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
