import React from "react";
import { NavLink } from "react-router-dom";

export function HowItWorks() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        {/* Start Page Head */}
        <section
          className="cs-page_head cs-bg"
          data-src="assets/img/page_head_bg.svg"
        >
          <div className="sm:container sm:mx-auto mx-4">
            <div className="text-center">
              <h1 className="cs-page_title">How It Works</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="index.html">Home</NavLink>
                </li>
                <li className="breadcrumb-item active">How It Works</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Page Head */}

        {/* Start Icon Boxes */}
        <div className="sm:container sm:mx-auto mx-4">
          <div className="cs-height_95 cs-height_lg_70" />
          <h2 className="cs-section_heading cs-style1 text-center">
            Create buy and sell your NFTs
          </h2>
          <div className="cs-height_45 cs-height_lg_45" />

          <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="">
              <div className="cs-iconbox cs-style1 cs-white_bg">
                <div className="cs-iconbox_icon">
                  <svg
                    width={53}
                    height={53}
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.2269 0.399988C33.9474 0.472951 33.4673 0.660947 33.1599 0.817847C32.8525 0.974646 27.4267 4.11499 21.1026 7.79646L9.60418 14.4899H7.22456C4.62127 14.4899 4.19681 14.5551 3.23294 15.1022C2.12722 15.7299 1.18226 17.068 0.946406 18.3399C0.811048 19.0698 0.808813 47.5429 0.944068 48.3685C1.25513 50.2683 2.86894 51.8821 4.76872 52.1932C5.13872 52.2538 13.1399 52.2907 25.7417 52.29C48.1149 52.2887 46.9308 52.3213 48.0592 51.6757C49.1098 51.0747 49.8778 50.1284 50.2976 48.918C50.4576 48.4565 50.4844 48.0453 50.4851 46.0253C50.486 43.793 50.4749 43.6557 50.273 43.3832C49.8705 42.8401 49.9165 42.8449 44.9864 42.8433C41.3499 42.8421 40.2187 42.8098 39.5176 42.6876C36.2167 42.112 33.6135 40.0351 32.323 36.9478C31.7693 35.6229 31.6864 35.1532 31.6865 33.3403C31.6865 31.9543 31.7203 31.5976 31.9158 30.9229C32.8809 27.5924 35.3118 25.1874 38.6981 24.2126C39.3551 24.0235 39.8032 24.0032 44.5594 23.9488C49.5814 23.8912 49.7164 23.8844 49.9961 23.6767C50.4972 23.3046 50.5601 22.9106 50.5052 20.4855C50.4415 17.6638 50.2629 17.07 49.138 15.9378C48.454 15.2495 47.7942 14.8732 46.8267 14.6198L46.1264 14.4364L42.6954 8.44215C39.242 2.4085 38.7699 1.68486 37.8944 1.08257C36.9123 0.406797 35.3288 0.1121 34.2269 0.399988ZM36.2574 2.8604C36.6681 3.0553 37.3595 3.72792 37.2518 3.82771C37.2089 3.86735 33.0784 6.28264 28.0727 9.19495L18.9716 14.4899H16.6964C15.3156 14.4899 14.4592 14.4533 14.5178 14.3968C14.7339 14.1883 34.2351 2.8922 34.6217 2.75156C35.1004 2.57739 35.7525 2.62078 36.2574 2.8604ZM42.0946 12.1641C42.7695 13.344 43.3218 14.35 43.3218 14.3997C43.3218 14.4511 41.1271 14.4899 38.2239 14.4899C35.4201 14.4899 33.1536 14.4624 33.1873 14.4287C33.2952 14.3206 40.7139 10.0187 40.7921 10.0187C40.8335 10.0187 41.4196 10.9841 42.0946 12.1641ZM39.786 26.3889C37.3169 26.8102 35.0942 28.7748 34.3103 31.2289C33.0948 35.0338 35.3098 39.1048 39.2021 40.2197C40.0056 40.4498 40.1027 40.4537 45.0493 40.4537H50.0795L50.74 40.1374C51.8263 39.6171 52.5388 38.7476 52.7708 37.6592C52.854 37.2686 52.8798 35.8759 52.8566 33.0355L52.8232 28.9707L52.5519 28.3919C52.2058 27.6534 51.4984 26.946 50.76 26.5999L50.1811 26.3286L45.2526 26.3128C42.5419 26.3041 40.0819 26.3384 39.786 26.3889ZM41.9786 31.2117C43.0638 31.665 43.6688 33.0089 43.277 34.0955C43.0339 34.7694 42.6754 35.1736 42.0486 35.4802C40.8705 36.0566 39.5538 35.5865 38.9318 34.3674C38.5278 33.5755 38.7476 32.2772 39.385 31.6912C40.0582 31.0722 41.1579 30.8689 41.9786 31.2117Z"
                      fill="url(#paint0_linear_1360_6767)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1360_6767"
                        x1="0.84375"
                        y1="0.290039"
                        x2="63.2046"
                        y2="31.8753"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#FC466B" />
                        <stop offset={1} stopColor="#3F5EFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Set up wallet</h2>
                <div className="cs-iconbox_subtitle">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </div>
              </div>
              <div className="cs-height_30 cs-height_lg_30" />
            </div>
            <div className="">
              <div className="cs-iconbox cs-style1 cs-white_bg">
                <div className="cs-iconbox_icon">
                  <svg
                    width={63}
                    height={53}
                    viewBox="0 0 63 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.0213 0.393447C15.2469 0.747141 13.6542 1.96206 12.8781 3.55374C12.2223 4.89853 12.2522 4.15165 12.2522 19.2464V33.1657L12.4978 33.9467C13.123 35.9338 14.9116 37.5764 16.8971 37.9871C17.2871 38.0677 23.3377 38.0953 36.2089 38.0751L54.9528 38.0457L55.6139 37.7964C56.9935 37.2759 58.1673 36.2511 58.8318 34.9866C59.5856 33.552 59.5521 34.283 59.5539 19.2241C59.555 9.77461 59.5184 5.43567 59.4339 5.02752C59.0972 3.40101 57.8034 1.68522 56.3667 0.959979C54.9504 0.245048 56.1138 0.282869 35.8761 0.294404C25.75 0.300171 17.2653 0.344757 17.0213 0.393447ZM54.4622 5.374L54.7864 5.69819V14.3245C54.7864 19.0785 54.744 22.9035 54.692 22.8454C54.6401 22.7874 52.9523 20.8185 50.9412 18.47C48.9303 16.1215 47.0997 14.038 46.8735 13.8401C45.3549 12.5125 43.0422 12.5051 41.5349 13.823C41.2978 14.0304 39.1116 16.5882 36.6768 19.5071L32.2498 24.8143L31.8448 24.445C31.6219 24.2418 30.8408 23.4902 30.1088 22.7748C28.3953 21.1001 27.9159 20.8528 26.3933 20.8586C24.651 20.8651 24.6256 20.8829 20.4873 24.998L16.9659 28.4997V17.2077C16.9659 6.85821 16.9813 5.88974 17.1511 5.60226C17.253 5.42979 17.4401 5.23836 17.567 5.1768C17.7192 5.10294 23.9858 5.06223 35.9679 5.05735L54.138 5.04981L54.4622 5.374ZM22.872 7.55029C21.9836 7.78953 21.4173 8.12248 20.7344 8.80691C18.9201 10.6253 18.8764 13.4487 20.6337 15.3068C21.6034 16.3322 22.6882 16.8063 24.0641 16.8063C25.431 16.8063 26.5256 16.3315 27.4764 15.3261C28.1674 14.5956 28.4712 14.0097 28.681 13.0037C29.3798 9.65216 26.1893 6.65702 22.872 7.55029ZM5.71963 26.5672C3.65669 33.4508 2.83251 36.3569 2.79514 36.8795C2.64885 38.9237 3.86099 41.0341 5.69235 41.9238C6.29759 42.2179 10.7565 43.4516 24.5632 47.1453C34.5064 49.8053 42.9142 52.0528 43.2473 52.1397C43.9533 52.3239 45.2006 52.3416 45.9136 52.1774C47.2207 51.8763 48.6491 50.8055 49.2733 49.6585C49.4365 49.3585 50.0708 47.5214 50.6826 45.5758C51.2945 43.6303 51.8227 41.9511 51.8564 41.8444C51.9146 41.6601 51.0228 41.6503 34.1922 41.6496C16.9341 41.6488 16.4427 41.643 15.5544 41.4301C12.3025 40.6505 9.89675 38.271 8.94724 34.8951C8.71732 34.0777 8.70867 33.8022 8.65122 25.5177L8.59211 16.9824L5.71963 26.5672Z"
                      fill="url(#paint0_linear_1360_6757)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1360_6757"
                        x1="2.7832"
                        y1="0.290039"
                        x2="68.2844"
                        y2="36.4949"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#FC466B" />
                        <stop offset={1} stopColor="#3F5EFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Create Collections</h2>
                <div className="cs-iconbox_subtitle">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </div>
              </div>
              <div className="cs-height_30 cs-height_lg_30" />
            </div>
            <div className="">
              <div className="cs-iconbox cs-style1 cs-white_bg">
                <div className="cs-iconbox_icon">
                  <svg
                    width={53}
                    height={53}
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.99303 0.487964C3.02942 1.01595 1.48925 2.57808 0.971252 4.5669C0.710104 5.56955 0.710104 39.648 0.971252 40.6507C1.50888 42.7149 3.21704 44.3715 5.23989 44.7905C5.66368 44.8783 9.45858 44.9076 17.6049 44.8862C29.2707 44.8554 29.361 44.8535 29.6793 44.6157C30.289 44.1605 30.4792 43.7892 30.4792 43.0546C30.4792 42.3199 30.289 41.9487 29.6793 41.4935C29.3616 41.2562 29.2502 41.2534 17.5263 41.1959C5.80238 41.1384 5.69098 41.1356 5.37325 40.8982C5.19679 40.7665 4.9447 40.5144 4.81297 40.338C4.57354 40.0172 4.57343 40.0099 4.57343 22.6088C4.57343 5.20769 4.57354 5.20037 4.81297 4.87963C4.9447 4.70316 5.19679 4.45108 5.37325 4.31934C5.694 4.07992 5.70131 4.0798 23.1024 4.0798C40.5035 4.0798 40.5108 4.07992 40.8316 4.31934C41.008 4.45108 41.2601 4.70316 41.3919 4.87963C41.6292 5.19735 41.632 5.30875 41.6895 17.0327C41.747 28.7566 41.7498 28.868 41.9871 29.1857C42.4423 29.7954 42.8136 29.9855 43.5482 29.9855C44.2829 29.9855 44.6541 29.7954 45.1093 29.1857C45.3471 28.8674 45.3491 28.777 45.3798 17.1113C45.4012 8.96495 45.372 5.17005 45.2841 4.74626C44.8651 2.72341 43.2085 1.01526 41.1443 0.477624C40.1592 0.221007 5.94922 0.230765 4.99303 0.487964ZM16.4364 7.86088C15.7013 8.04559 14.6551 8.66477 14.1472 9.21576C13.8864 9.49875 13.5074 10.0796 13.3053 10.5063C12.9723 11.209 12.9376 11.3871 12.9376 12.3919C12.9376 13.4392 12.962 13.5508 13.3715 14.3794C13.894 15.4367 14.5667 16.0953 15.6467 16.6069C16.3485 16.9394 16.5283 16.9746 17.5263 16.9746C18.5243 16.9746 18.7041 16.9394 19.4059 16.6069C20.4859 16.0953 21.1586 15.4367 21.6811 14.3794C22.0911 13.5499 22.115 13.4401 22.115 12.3859C22.115 11.3317 22.0911 11.2219 21.6811 10.3924C20.8961 8.80405 19.5015 7.87203 17.7876 7.79048C17.2924 7.7669 16.6844 7.79861 16.4364 7.86088ZM27.9815 17.1608C27.8218 17.2232 25.4048 19.5583 22.6103 22.35L17.5296 27.4256L15.1755 25.0845C13.1802 23.1002 12.7551 22.7312 12.3858 22.6632C11.4575 22.4922 11.1858 22.6404 9.65583 24.1527L8.23276 25.5593V31.5189V37.4785H23.1024H37.9721V31.5242V25.57L33.819 21.4228C31.5348 19.142 29.5188 17.2211 29.339 17.1543C28.9398 17.0058 28.3712 17.0086 27.9815 17.1608ZM42.7931 33.9186C42.3628 34.1178 41.977 34.5276 41.8135 34.9593C41.7375 35.1597 41.6895 36.4285 41.6895 38.2358V41.1852L38.5612 41.2196C35.6118 41.252 35.4145 41.2677 35.1123 41.4935C34.5028 41.9489 34.3128 42.32 34.3128 43.0546C34.3128 43.7891 34.5028 44.1603 35.1123 44.6157C35.4145 44.8415 35.6119 44.8572 38.5558 44.8896L41.6789 44.9239L41.7132 48.047C41.7456 50.9909 41.7613 51.1883 41.9871 51.4904C42.4425 52.1 42.8137 52.29 43.5482 52.29C44.2827 52.29 44.6539 52.1 45.1093 51.4904C45.3351 51.1883 45.3508 50.9909 45.3832 48.047L45.4175 44.9239L48.5406 44.8896C51.4845 44.8572 51.6819 44.8415 51.9841 44.6157C52.5936 44.1603 52.7837 43.7891 52.7837 43.0546C52.7837 42.32 52.5936 41.9489 51.9841 41.4935C51.6819 41.2677 51.4845 41.252 48.5406 41.2196L45.4175 41.1853L45.3832 38.0622C45.3508 35.1182 45.3351 34.9209 45.1093 34.6187C44.9776 34.4424 44.7331 34.1961 44.5662 34.0714C44.1812 33.784 43.256 33.7042 42.7931 33.9186Z"
                      fill="url(#paint0_linear_1360_6784)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1360_6784"
                        x1="0.775391"
                        y1="0.290039"
                        x2="63.1273"
                        y2="31.863"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#FC466B" />
                        <stop offset={1} stopColor="#3F5EFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Add NFTs</h2>
                <div className="cs-iconbox_subtitle">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </div>
              </div>
              <div className="cs-height_30 cs-height_lg_30" />
            </div>
            <div className="">
              <div className="cs-iconbox cs-style1 cs-white_bg">
                <div className="cs-iconbox_icon">
                  <svg
                    width={53}
                    height={53}
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1383 0.484227C14.356 0.860113 12.9518 1.64327 11.5862 3.02321C10.6607 3.95841 10.2448 4.58099 9.70598 5.83764C9.10249 7.24531 9.04713 7.75942 9.04713 11.9596V15.7217H6.60636C4.63308 15.7217 4.09348 15.7518 3.78939 15.8789C3.30768 16.0801 2.9844 16.3842 2.73496 16.8707C2.55337 17.2248 2.46257 18.5754 1.67291 32.6638C1.198 41.137 0.834506 48.3439 0.865077 48.679C0.939929 49.4992 1.48492 50.5987 2.09562 51.1617C2.35176 51.3978 2.86669 51.7356 3.23973 51.9123L3.91818 52.2338L12.6363 52.2619L21.3544 52.29L21.0481 51.7541C20.5463 50.8757 20.2064 49.714 20.1503 48.684C20.0802 47.3993 21.2747 30.5137 21.4941 29.6871C21.583 29.352 21.7967 28.8136 21.969 28.4905C22.3384 27.7973 23.3651 26.7981 24.0807 26.4355C25.0796 25.9293 25.5567 25.8812 29.5883 25.8796L33.3208 25.878L33.3224 25.5987C33.3232 25.4452 33.2294 23.5599 33.1138 21.4093C32.8841 17.1354 32.8386 16.8677 32.2455 16.2916C31.7262 15.7873 31.3557 15.7217 29.0271 15.7217H26.9405L26.8976 11.7861C26.8582 8.17319 26.8371 7.78644 26.6401 7.06869C25.3434 2.34436 20.8064 -0.500228 16.1383 0.484227ZM19.0578 3.43952C21.0929 3.80606 22.9498 5.49415 23.6307 7.59662C23.7875 8.08087 23.8169 8.65836 23.8511 11.9385L23.8906 15.7217H25.4149H26.9391L26.9053 17.4919C26.8748 19.0912 26.8513 19.2891 26.6621 19.5423C25.9498 20.4954 24.7255 20.5189 24.106 19.5915C23.8884 19.2659 23.8754 19.1471 23.8754 17.484V15.7217H17.9931H12.1108L12.0771 17.4919C12.0465 19.0912 12.023 19.2891 11.8338 19.5423C11.1216 20.4954 9.89722 20.5189 9.27768 19.5915C9.06013 19.2659 9.04713 19.1471 9.04713 17.484V15.7217H10.5706H12.094V12.1212C12.094 8.24825 12.1314 7.86667 12.6163 6.79071C13.1511 5.60404 14.1823 4.53306 15.3767 3.92367C16.3754 3.41413 17.8446 3.22096 19.0578 3.43952ZM25.5512 29.116C25.0592 29.3441 24.75 29.6658 24.5405 30.1669C24.3525 30.6169 23.1191 47.4507 23.1953 48.5267C23.3196 50.2806 24.5089 51.7012 26.2221 52.1423C26.705 52.2666 28.5327 52.2847 38.2574 52.2613L49.7233 52.2338L50.4018 51.9123C50.7748 51.7356 51.2885 51.3988 51.5432 51.164C52.1062 50.6451 52.6795 49.5443 52.7705 48.8073C52.81 48.4873 52.5867 44.707 52.2139 39.386C51.5135 29.3914 51.5909 29.908 50.6992 29.2813L50.2644 28.9757L38.1109 28.9517C26.4605 28.9287 25.9406 28.9355 25.5512 29.116ZM34.1735 33.7254C34.8222 34.0974 34.9458 34.4525 34.9458 35.945C34.9458 37.6133 35.0991 38.1231 35.8176 38.8461C36.7267 39.7606 38.0143 39.9388 39.1407 39.3063C40.2472 38.6847 40.6334 37.8064 40.6334 35.9111C40.6334 34.5311 40.7437 34.1556 41.2567 33.7897C41.7089 33.4671 42.5217 33.4505 42.9302 33.7555C43.5634 34.2282 43.6268 34.4107 43.6619 35.8637C43.7195 38.2404 43.2372 39.6416 41.8995 40.984C40.1007 42.7892 37.5564 43.2269 35.2613 42.1262C34.5871 41.8028 34.2465 41.553 33.6334 40.9325C32.3256 39.6085 31.9038 38.4302 31.9006 36.0919C31.8992 34.9852 31.9308 34.7123 32.1012 34.3603C32.4861 33.5654 33.4039 33.2843 34.1735 33.7254Z"
                      fill="url(#paint0_linear_1360_6776)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1360_6776"
                        x1="0.863281"
                        y1="0.290039"
                        x2="63.1466"
                        y2="31.7697"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#FC466B" />
                        <stop offset={1} stopColor="#3F5EFB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="cs-iconbox_title">Ready for sale</h2>
                <div className="cs-iconbox_subtitle">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </div>
              </div>
              <div className="cs-height_30 cs-height_lg_30" />
            </div>
          </div>
        </div>
        {/* End Icon Boxes */}
        <div className="cs-height_60 cs-height_lg_40" />

        <div>
          <div className="sm:container sm:mx-auto mx-4">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="">
                <div className="cs-faq">
                  <div className="cs-section_heading cs-style3">
                    <h2 className="cs-section_title">Getting Started</h2>
                    <div className="cs-section_seperator" />
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                  <div className="cs-accordians">
                    <div className="cs-accordian active">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          How do I get started in NFT?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <b>Step 1:</b> Decide on the concept.
                        <b>Step 2:</b> Decide on the platform. <br />
                        <b>Step 3:</b> Connect and build community.
                        <b>Step 4:</b> Create your art. <br />
                        <b>Step 5:</b> Mint and share.
                        <b>The final step:</b> Selling your NFT.
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          How much does the average NFT sell for?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          What kind of NFTs sell best?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          How to make money with NFTs as a beginner?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          Who owns the most expensive NFT?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                  </div>
                  {/* .cs-accordians */}
                </div>
                <div className="cs-height_0 cs-height_lg_30" />
              </div>
              <div className="">
                <div className="cs-faq">
                  <div className="cs-section_heading cs-style3">
                    <h2 className="cs-section_title">
                      Safety, Security, and Policies
                    </h2>
                    <div className="cs-section_seperator" />
                  </div>
                  <div className="cs-height_30 cs-height_lg_30" />
                  <div className="cs-accordians">
                    <div className="cs-accordian active">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          Do you have to mint an NFT to sell it?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          How much does the average NFT sell for?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          What kind of NFTs sell best?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          How to make money with NFTs as a beginner?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                    <div className="cs-accordian">
                      <div className="cs-accordian_head">
                        <h2 className="cs-accordian_title">
                          Who owns the most expensive NFT?
                        </h2>
                        <span className="cs-accordian_toggle">
                          <svg
                            width={13}
                            height={7}
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62109 0.750977L6.95443 6.08431L12.2878 0.750977"
                              stroke="currentColor"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-accordian-body">
                        <p>
                          Once you have minted a piece of artwork on a
                          marketplace as an <br />
                          NFT, you should never mint it on another platform. If
                          you ever decide <br />
                          to do so, note that most platforms reserve
                        </p>
                      </div>
                    </div>
                    {/* .cs-accordian */}
                  </div>
                  {/* .cs-accordians */}
                </div>
              </div>
            </div>
          </div>
          <div className="cs-height_90 cs-height_lg_70" />
          {/* Start CTA */}
          <div className="sm:container sm:mx-auto mx-4">
            <div className="cs-cta cs-style2 text-center cs-white_bg">
              <h2 className="cs-cta_title">Can't find your desire answer?</h2>
              <div className="cs-cta_subtitle">
                Exercitation veniam consequat sunt nostrud amet. It is a long{" "}
                <br />
                established fact that a reader
              </div>
              <NavLink to={""} className="cs-btn cs-style1 cs-btn_lg">
                <span>Contact Us</span>
              </NavLink>
            </div>
          </div>
          {/* End CTA */}
        </div>
      </div>
      <div className="cs-height_100 cs-height_lg_70"></div>
    </>
  );
}
