import React from "react";

const PricingCards = () => {
  return (
    <section
      id="about"
      className="py-5 px-5 md:py-10 md:px-10 bg-gradient-to-r from-amber-600 to-indigo-600 w-full"
    >
      <h2 className="md:text-center text-white text-3xl md:text-5xl uppercase font-semibold font-mono">
        Price Structure
      </h2>
      <div className="cards-container grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 pt-10 md:pt-16">
        <div className="card1 rounded shadow bg-white px-5 md:px-10 py-5">
          <h4 className="text-xl md:text-2xl font-serif font-bold">
            Get Started - $0/month
          </h4>
          <ul className="py-6 md:py-16 flex flex-col space-y-3">
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Limited Content Access
              </span>
              - Access to select episodes and older seasons
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Standard Definition (480p)
              </span>{" "}
              streaming only
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Single Device streaming
              </span>{" "}
              at a time
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Advertisement Breaks
              </span>{" "}
              - 2-3 ads per episode
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              No{" "}
              <span className="font-semibold text-base md:text-lg font-serif">
                Offline
              </span>{" "}
              Downloads
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Community Features
              </span>{" "}
              - Basic commenting and rating
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Limited Watchlist
              </span>{" "}
              - Save up to 10 titles
            </li>
          </ul>
        </div>
        <div className="card2 rounded shadow bg-white px-5 md:px-10 py-5">
          <h4 className="text-xl md:text-2xl font-serif font-bold">
            Animation Lover - $9.99/month
          </h4>
          <ul className="py-5 flex flex-col space-y-3">
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Full Content Library
              </span>
              - Access to all episodes and latest releases
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                HD Quality (1080p)
              </span>{" "}
              streaming
            </li>
            <li className="font-serif text-base md:text-lg">
              <span className="font-semibold text-base md:text-lg font-serif">
                Ad-Free Experience
              </span>
              - Uninterrupted viewing at a time
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                2 Simultaneous Devices
              </span>{" "}
              - Watch on multiple screens
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Offline Downloads
              </span>{" "}
              - Download up to 20 episodes
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Early Access
              </span>{" "}
              - New episodes 24 hours before free users
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Exclusive Behind-the-Scenes
              </span>{" "}
              - content
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Unlimited Watchlist
              </span>{" "}
              - and personalized recommendations
            </li>
          </ul>
          <button className="text-sm md:text-base bg-gradient-to-br from-amber-600 to-indigo-600 cursor-pointer p-2 rounded text-white font-mono">
            Continue with Animation Lover
          </button>
        </div>
        <div className="card3 rounded shadow bg-white px-5 md:px-10 py-5">
          <h4 className="text-xl md:text-2xl font-serif font-bold">
            Ultimate Fan - $99.99/year (Save 17%)
          </h4>
          <ul className="py-5 flex flex-col justify-between space-y-4 md:space-y-5">
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Everything in Premium Monthly
              </span>
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                4K Ultra HD
              </span>{" "}
              streaming where available
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                5 Simultaneous Devices
              </span>
              - Perfect for households
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Unlimited Offline Downloads
              </span>{" "}
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Exclusive Original Series
              </span>{" "}
              - StreamToon exclusives
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Priority Customer Support
              </span>{" "}
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Early Beta Access
              </span>{" "}
              - New features first
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                Digital Collectibles
              </span>{" "}
              - Character artwork and wallpapers
            </li>
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-base md:text-lg font-serif">
                No Price Increases
              </span>{" "}
              - Locked annual rate
            </li>
          </ul>
          <button className="text-sm md:text-base bg-gradient-to-br from-amber-600 to-indigo-600 cursor-pointer p-2 rounded text-white font-mono">
            Continue with Ultimate Fan
          </button>
        </div>
        {/* <div className="card4 rounded shadow bg-white px-10 py-5">
          <h4 className="text-2xl font-serif font-bold">
            "Animation Household" - $14.99/month
          </h4>
          <ul className="py-5 flex flex-col justify-between space-y-5">
            <li className="font-serif text-base md:text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Everything in Premium Monthly
              </span>
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                6 Individual Profiles
              </span>{" "}
              Personalized for each family member
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Kids Safe Mode
              </span>
              - Curated content for children
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Parental Controls
              </span>{" "}
              - Content filtering and time limits
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Family Watchlist
              </span>{" "}
              - Shared viewing recommendations
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Multiple Age Categories
              </span>{" "}
              - Content sorted by age groups
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Family Movie Nights
              </span>{" "}
              - Synchronized viewing features
            </li>
            <li className="font-serif text-lg text-justify">
              <span className="font-semibold text-lg font-serif">
                Educational Content
              </span>{" "}
              - Learning-focused animations
            </li>
          </ul>
          <button className="bg-gradient-to-br from-amber-600 to-indigo-600 cursor-pointer p-2 rounded text-white font-mono">
            Continue with Animation Houshold
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PricingCards;
