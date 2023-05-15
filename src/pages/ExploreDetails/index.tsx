import React, { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Head } from "src/components/Head";
import { CustomSwiper } from "./CustomSwiper";
import { Card } from "src/components/Card";
// import { useData } from "src/hooks/useData";

const dataCards = [
  {
    LuotLike: "1.2K",
    img: "/assets/exploredetails/similar4.png",
    avatarInfo: "/assets/exploredetails/avatar-similar3.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    id: "sport-1",
  },
  {
    LuotLike: "1.2K",
    img: "/assets/exploredetails/similar3.png",
    avatarInfo: "/assets/exploredetails/avatar-similar2.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    id: "sport-1",
  },
  {
    LuotLike: "1.2K",
    img: "/assets/exploredetails/similar2.png",
    avatarInfo: "/assets/exploredetails/avatar-similar1.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    id: "sport-1",
  },
  {
    LuotLike: "1.2K",
    img: "/assets/exploredetails/similar1.png",
    avatarInfo: "/assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    id: "sport-1",
  },
  {
    LuotLike: "1.2K",
    img: "/assets/exploredetails/similar.png",
    avatarInfo: "/assets/exploredetails/avatar-similar.png",
    info: "austin R.",
    price: "0.29 --DR",
    title: "Kawaii-bubble-tea",
    id: "sport-1",
  },
];

const data = [
  {
    about:
      " Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona. American Truck Simulator takes you on a journey through the breathtaking landscapes and widely recognized landmarks around the States.Game mechanics are based on the highly successful model from Euro Truck Simulator 2 and have been expanded with new features, creating the most captivating game experience from SCS Software.American Truck Simulator puts you in the seat of a driver for hire entering the local freight market, making you work your way up to become an owner-operator, and go on to create one of the largest transportation companies in the United States.FeaturesDrive highly detailed truck models officially licensed from iconic truck manufacturers.Your truck is your new home. Make it yours by changing cabins, chassis, paintjobs, adding tuning accessories or more powerful engines.Lots of different cargoes to choose: From food to machinery to hazard cargoes.Multiple types of trailers – from reefers to flatbeds, from dumpers to lowboys and goosenecks.The longest trailers (up to 53 ft) will challenge your skills and patience while hauling and during parking.Deliver your cargoes to a rich variety of companies and locations like refineries, oil storage, gas stations, car factories, or roadworks.Various simulation settings for trucking enthusiasts: Air brake simulation; different types of brakes: retarder, Jake brake, trailer brake; multiple types of transmissions straight from real trucks, brake intensity, and more.Get the feel of being inside a real cabin: Adjust your seat, mirrors and position your head to get the best view of the road.Drive safely, follow the rules and speed limits – police will fine you if you aren't careful!Ensure that you are not delivering overweight cargo – you may be checked at the weigh scales.Use the route adviser as your personal assistant during the travels.Try the life of a truck driver for hire. By delivering the cargoes safely and improving your skills, become the owner of your own, successful company!Build your own fleet of trucks, buy garages, hire drivers, manage your company for maximum profits.Make your trucking time better by listening to your favorite songs via built-in music player or streaming your favorite radio stations.Capture your favorite moments with a photo mode offering rich set of editing options.Great support for steering wheels, gamepads and other input devices.Long-time support of the game, including new features.Obtain challenging Steam achievements and collect all hand-painted Steam trading cards.World of Trucks Take advantage of additional features of American Truck Simulator by joining our online community on World of Trucks, our center for virtual truckers all around the world interested in Euro Truck Simulator 2, American Truck Simulator and future SCS Software's truck simulators.Use in-game Photo Mode to capture the best moments and share them with thousands of people who love trucks.Favorite the images you like the most and return to them anytime in the future.Discuss the screenshots with everyone using World of Trucks.See the best images hand-picked by the game creators in Editor's Pick updated almost every day. Try to get your own screenshot on this list!Upload and use your custom avatar and license plate in the game.More features coming soon! To join World of Trucks, simply sign up with your Steam account on the join page. You will need to own American Truck Simulator or Euro Truck Simulator 2 to join World of Trucks.World of Trucks is an optional service, registration on World of Trucks isn't required to play the game.",
    description:
      "Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona. American Truck Simulator takes you on a journey through the breathtaking landscapes and widely recognized landmarks around the States.",
    titles: {
      title: "American Truck Simulator",
      genre: "Indie, Simulation",
      developer: "SCS Software",
      puslisher: "SCS Software",
      franchise: "SCS Software",
      releaseDate: "2016-2-2",
    },
    images: [
      "/assets/exploredetails/simulation/americaTruck/image-1.webm",
      "/assets/exploredetails/simulation/americaTruck/image-2.jpg",
      "/assets/exploredetails/simulation/americaTruck/image-3.jpg",
      "/assets/exploredetails/simulation/americaTruck/image-4.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/americaTruck/header.jpg",
    id: "simulation-1",
  },
  {
    about:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.Key Features in Arma 3 Altis & Stratis Defeat your enemy on a richly detailed, open-world battlefield – stretching over 290 km² of Mediterranean island terrain. From expansive cities to rolling hills, whether steamrolling your tank across the dusty plains, flying a transport helicopter over the dense forests, or waging asymmetric warfare from the rocky hills, the islands of Altis and Stratis are dynamic worlds, which lend themselves to the most varied engagements in gaming. Weapons & VehiclesHead into combat on foot, drive armored vehicles, or take to the skies in helicopters and jets. Conduct a combined arms attack over air, land, and sea, with over 20 vehicles to drive and pilot, 40+ weapons to pick from, customizable loadouts with short- and long-distance attachments, and various types of gear to suit your needs on the battlefield. With a massive arsenal at your disposal, Arma 3 moves you into a world of tactical opportunities. Singleplayer Follow the story of Ben Kerry, a soldier who gets caught up in a Mediterranean flashpoint, across three gameplay-driven campaign episodes: Survive, Adapt, Win. Immerse yourself in Arma 3’s diverse gameplay by completing the focused showcase scenarios. Run through the competitive firing drills to hone your shooting and movement skills, and complete your training by signing up to Arma 3 Bootcamp, which features SP and MP tutorials, and a dedicated Virtual Reality practice environment. Multiplayer Fight online in the massive military sandbox that is Arma 3. Form a squad and team up against your enemy in the official Defend and Seize multiplayer scenarios. Or jump into one of the many popular unofficial game modes developed by the Arma 3 community. Experience a new form of multiplayer in Arma 3 Zeus, where Game Masters have the ability to influence the battlefield of other players in real-time. Content Creation Start creating your own experiences with Arma 3’s intuitive scenario editor and powerful modding tools. Enjoy a platform filled with player-created content, ranging from custom weapons and vehicles, to intense singleplayer scenarios and entirely new multiplayer game modes. Share and discover content on the Arma 3 Steam Workshop, which lets you install player-created content with a click of a button. Revamped Engine Navigate the battlefield with fluid new animations; feel the devastating power of combat with the upgraded sound engine, new ragdoll simulation and PhysX™-supported vehicles. Pushed forward by game-changing innovations, the highly moddable Real Virtuality™ 4 engine powers a new generation of Arma with even more stunning graphics, broad simulation gameplay, and massive sandbox terrains.",
    description:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.",
    titles: {
      title: "Arma 3",
      genre: "Action, Simulation, Strategy",
      developer: "Bohemia Interactive",
      puslisher: "Bohemia Interactive",
      franchise: "Arma Franchise",
      releaseDate: "2013-9-12",
    },
    images: [
      "/assets/exploredetails/simulation/arma/image-1.webm",
      "/assets/exploredetails/simulation/arma/image-2.jpg",
      "/assets/exploredetails/simulation/arma/image-3.jpg",
      "/assets/exploredetails/simulation/arma/image-4.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/arma/header.jpg",
    id: "simulation-2",
  },
  {
    about:
      "Play with up to two players or AI as you battle through four campaigns to explore the mystery of a new planet, LV-895. Discover what hides in the ruins and caves beneath in this third-person survival shooter set in the Aliens universe.Build your fireteam focusing on class composition, consumables, and weapons to take down Xenomorphs, beat Challenge Card runs, or play various game modes with friends.Blast through hordes of Xenomorphs, evade deadly Prowlers and Spitters, and set up defensive positions to stay alive long enough to get your fireteam to safety.Build your Marine the way you want. Level up in each of 7 unique classes or be a master of one. Choose your weapon – everything from magnums and SMGs to rocket launchers – and use over 130 unique perks to create the build of your choice.Level your character through 7 Class Kits, each with two unique abilities to use in combat and unlockable perks. Max out a variety of weapons, powering them up in stats the more you use them.",
    description:
      "Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona. American Truck Simulator takes you on a journey through the breathtaking landscapes and widely recognized landmarks around the States.",
    titles: {
      title: "American Truck Simulator",
      genre: "Indie, Simulation",
      developer: "SCS Software",
      puslisher: "SCS Software",
      franchise: "SCS Software",
      releaseDate: "2016-2-2",
    },
    images: [
      "/assets/exploredetails/action/aliens/video.webm",
      "/assets/exploredetails/action/aliens/image-1.jpg",
      "/assets/exploredetails/action/aliens/image-2.jpg",
      "/assets/exploredetails/action/aliens/image-3.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/americaTruck/header.jpg",
    id: "action-1",
  },
  {
    about:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.Key Features in Arma 3 Altis & Stratis Defeat your enemy on a richly detailed, open-world battlefield – stretching over 290 km² of Mediterranean island terrain. From expansive cities to rolling hills, whether steamrolling your tank across the dusty plains, flying a transport helicopter over the dense forests, or waging asymmetric warfare from the rocky hills, the islands of Altis and Stratis are dynamic worlds, which lend themselves to the most varied engagements in gaming. Weapons & VehiclesHead into combat on foot, drive armored vehicles, or take to the skies in helicopters and jets. Conduct a combined arms attack over air, land, and sea, with over 20 vehicles to drive and pilot, 40+ weapons to pick from, customizable loadouts with short- and long-distance attachments, and various types of gear to suit your needs on the battlefield. With a massive arsenal at your disposal, Arma 3 moves you into a world of tactical opportunities. Singleplayer Follow the story of Ben Kerry, a soldier who gets caught up in a Mediterranean flashpoint, across three gameplay-driven campaign episodes: Survive, Adapt, Win. Immerse yourself in Arma 3’s diverse gameplay by completing the focused showcase scenarios. Run through the competitive firing drills to hone your shooting and movement skills, and complete your training by signing up to Arma 3 Bootcamp, which features SP and MP tutorials, and a dedicated Virtual Reality practice environment. Multiplayer Fight online in the massive military sandbox that is Arma 3. Form a squad and team up against your enemy in the official Defend and Seize multiplayer scenarios. Or jump into one of the many popular unofficial game modes developed by the Arma 3 community. Experience a new form of multiplayer in Arma 3 Zeus, where Game Masters have the ability to influence the battlefield of other players in real-time. Content Creation Start creating your own experiences with Arma 3’s intuitive scenario editor and powerful modding tools. Enjoy a platform filled with player-created content, ranging from custom weapons and vehicles, to intense singleplayer scenarios and entirely new multiplayer game modes. Share and discover content on the Arma 3 Steam Workshop, which lets you install player-created content with a click of a button. Revamped Engine Navigate the battlefield with fluid new animations; feel the devastating power of combat with the upgraded sound engine, new ragdoll simulation and PhysX™-supported vehicles. Pushed forward by game-changing innovations, the highly moddable Real Virtuality™ 4 engine powers a new generation of Arma with even more stunning graphics, broad simulation gameplay, and massive sandbox terrains.",
    description:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.",
    titles: {
      title: "Arma 3",
      genre: "Action, Simulation, Strategy",
      developer: "Bohemia Interactive",
      puslisher: "Bohemia Interactive",
      franchise: "Arma Franchise",
      releaseDate: "2013-9-12",
    },
    images: [
      "/assets/exploredetails/action/aliens/video.webm",
      "/assets/exploredetails/action/aliens/image-1.jpg",
      "/assets/exploredetails/action/aliens/image-2.jpg",
      "/assets/exploredetails/action/aliens/image-3.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/arma/header.jpg",
    id: "action-2",
  },
  {
    about:
      "Play with up to two players or AI as you battle through four campaigns to explore the mystery of a new planet, LV-895. Discover what hides in the ruins and caves beneath in this third-person survival shooter set in the Aliens universe.Build your fireteam focusing on class composition, consumables, and weapons to take down Xenomorphs, beat Challenge Card runs, or play various game modes with friends.Blast through hordes of Xenomorphs, evade deadly Prowlers and Spitters, and set up defensive positions to stay alive long enough to get your fireteam to safety.Build your Marine the way you want. Level up in each of 7 unique classes or be a master of one. Choose your weapon – everything from magnums and SMGs to rocket launchers – and use over 130 unique perks to create the build of your choice.Level your character through 7 Class Kits, each with two unique abilities to use in combat and unlockable perks. Max out a variety of weapons, powering them up in stats the more you use them.",
    description:
      "Experience legendary American trucks and deliver various cargoes across sunny California, sandy Nevada, and the Grand Canyon State of Arizona. American Truck Simulator takes you on a journey through the breathtaking landscapes and widely recognized landmarks around the States.",
    titles: {
      title: "American Truck Simulator",
      genre: "Indie, Simulation",
      developer: "SCS Software",
      puslisher: "SCS Software",
      franchise: "SCS Software",
      releaseDate: "2016-2-2",
    },
    images: [
      "/assets/exploredetails/simulation/americaTruck/image-1.webm",
      "/assets/exploredetails/simulation/americaTruck/image-2.jpg",
      "/assets/exploredetails/simulation/americaTruck/image-3.jpg",
      "/assets/exploredetails/simulation/americaTruck/image-4.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/americaTruck/header.jpg",
    id: "sport-1",
  },
  {
    about:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.Key Features in Arma 3 Altis & Stratis Defeat your enemy on a richly detailed, open-world battlefield – stretching over 290 km² of Mediterranean island terrain. From expansive cities to rolling hills, whether steamrolling your tank across the dusty plains, flying a transport helicopter over the dense forests, or waging asymmetric warfare from the rocky hills, the islands of Altis and Stratis are dynamic worlds, which lend themselves to the most varied engagements in gaming. Weapons & VehiclesHead into combat on foot, drive armored vehicles, or take to the skies in helicopters and jets. Conduct a combined arms attack over air, land, and sea, with over 20 vehicles to drive and pilot, 40+ weapons to pick from, customizable loadouts with short- and long-distance attachments, and various types of gear to suit your needs on the battlefield. With a massive arsenal at your disposal, Arma 3 moves you into a world of tactical opportunities. Singleplayer Follow the story of Ben Kerry, a soldier who gets caught up in a Mediterranean flashpoint, across three gameplay-driven campaign episodes: Survive, Adapt, Win. Immerse yourself in Arma 3’s diverse gameplay by completing the focused showcase scenarios. Run through the competitive firing drills to hone your shooting and movement skills, and complete your training by signing up to Arma 3 Bootcamp, which features SP and MP tutorials, and a dedicated Virtual Reality practice environment. Multiplayer Fight online in the massive military sandbox that is Arma 3. Form a squad and team up against your enemy in the official Defend and Seize multiplayer scenarios. Or jump into one of the many popular unofficial game modes developed by the Arma 3 community. Experience a new form of multiplayer in Arma 3 Zeus, where Game Masters have the ability to influence the battlefield of other players in real-time. Content Creation Start creating your own experiences with Arma 3’s intuitive scenario editor and powerful modding tools. Enjoy a platform filled with player-created content, ranging from custom weapons and vehicles, to intense singleplayer scenarios and entirely new multiplayer game modes. Share and discover content on the Arma 3 Steam Workshop, which lets you install player-created content with a click of a button. Revamped Engine Navigate the battlefield with fluid new animations; feel the devastating power of combat with the upgraded sound engine, new ragdoll simulation and PhysX™-supported vehicles. Pushed forward by game-changing innovations, the highly moddable Real Virtuality™ 4 engine powers a new generation of Arma with even more stunning graphics, broad simulation gameplay, and massive sandbox terrains.",
    description:
      "Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.",
    titles: {
      title: "Arma 3",
      genre: "Action, Simulation, Strategy",
      developer: "Bohemia Interactive",
      puslisher: "Bohemia Interactive",
      franchise: "Arma Franchise",
      releaseDate: "2013-9-12",
    },
    images: [
      "/assets/exploredetails/simulation/arma/image-1.webm",
      "/assets/exploredetails/simulation/arma/image-2.jpg",
      "/assets/exploredetails/simulation/arma/image-3.jpg",
      "/assets/exploredetails/simulation/arma/image-4.jpg",
    ],

    imageHeader: "/assets/exploredetails/simulation/arma/header.jpg",
    id: "sport-2",
  },
];

interface DataEntity {
  about: string;
  id: string;
  description: string;
  titles: TitleEntity;
  images: string[];
  imageHeader: string;
}
interface TitleEntity {
  title: string;
  genre: string;
  developer: string;
  puslisher: string;
  franchise: string;
  releaseDate: string;
}

export function ExploreDetails() {
  const { id } = useParams();
  // const { data } = useData({
  //   path: "assets/exploredetails/datas.json",
  //   defaultValue: [],
  // });

  const datas = useMemo(() => {
    return data.filter((item) => item.id === id) as DataEntity[];
  }, [id]);

  // const datas = data.filter((item) => item.id === id) as DataEntity[];

  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <Head title="Explore Details"></Head>

        <div className="cs-height_100 cs-height_lg_70" />
        <div className="container-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            <div className="col-lg-6">
              <CustomSwiper imgs={datas[0].images}></CustomSwiper>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">ABOUT THIS GAME</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-box_shadow cs-general_box_5 text-justify leading-6 tracking-tighter">
                      {datas[0].about.split(".").map((item, index) => (
                        <React.Fragment key={index}>
                          {item.trim()}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-height_0 cs-height_lg_40" />
              <div className="cs-single_product_head">
                <h2>{datas[0].titles.title}</h2>
                <span className="cs-card_like cs-primary_color cs-box_shadow">
                  <i className="fas fa-heart fa-fw" />
                  2.1K
                </span>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
              <div className="grid gap-4">
                <div className="rounded-md w-full h-80">
                  <img
                    src={datas[0].imageHeader}
                    alt=""
                    className="rounded-md w-full h-full bg-cover"
                  />
                </div>
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5 text-center">
                      <div>
                        <span className="font-bold ">TiTLE:</span>{" "}
                        {datas[0].titles.title}
                      </div>
                      <div>
                        <span className="font-bold ">GENRE:</span>{" "}
                        {datas[0].titles.genre}
                      </div>
                      <div>
                        <span className="font-bold ">DEVELOPER:</span>{" "}
                        {datas[0].titles.developer}
                        NAMCO studio inc
                      </div>
                      <div>
                        <span className="font-bold ">PUBLISHER:</span>{" "}
                        {datas[0].titles.puslisher}
                        NAMCO emtaiment
                      </div>
                      <div>
                        <span className="font-bold ">FRANCHISE:</span>{" "}
                        {datas[0].titles.franchise}
                      </div>
                      <div>
                        <span className="font-bold ">RELEASE DATE:</span>{" "}
                        {datas[0].titles.releaseDate}
                      </div>
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-tabs cs-fade_tabs cs-style1">
                <div className="cs-medium">
                  <ul className="cs-tab_links cs-style1 cs-medium cs-primary_color cs-mp0 cs-primary_font">
                    <li className="active">
                      <NavLink to="#Description">Description</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-tab_content">
                  <div id="Description" className="cs-tab active">
                    <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                      {datas[0].description}
                    </div>
                  </div>
                  {/* .cs-tab */}
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />

              <div className="row">
                <div className="col-xl-6">
                  <div className="cs-white_bg cs-box_shadow cs-general_box_5">
                    <div className="cs-social_widget justify-content-center">
                      <NavLink to="#">
                        <i className="fab fa-twitter" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-telegram" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                </div>
              </div>
              <div className="cs-height_10 cs-height_lg_10" />
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center"
                  >
                    <span>Buy Now</span>
                  </NavLink>
                </div>
                <div className="">
                  <NavLink
                    to="#"
                    className="cs-btn cs-style1 cs-btn_lg w-full text-center bg-white"
                  >
                    <span>Place Bid</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_95 cs-height_lg_70" />
        <div className="sm:container sm:mx-auto mx-4">
          <h2 className="cs-section_heading cs-style1">Similar Items</h2>
          <div className="cs-height_45 cs-height_lg_45" />
          <div className="cs-grid_5 cs-gap_30">
            {dataCards.map((data, idx) => (
              <Card
                key={idx}
                id={data.id}
                LuotLike={data.LuotLike}
                img={data.img}
                avatarInfo={data.avatarInfo}
                info={data.info}
                price={data.price}
                title={data.title}
              ></Card>
            ))}
          </div>
        </div>
        <div className="cs-height_100 cs-height_lg_70" />
      </div>
    </>
  );
}
