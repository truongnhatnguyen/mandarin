import { P, T } from "src/shared/components/Docs";
import { Form } from "./Form";
import { Preloader } from "src/components/Preloader";

// max-w-[540px] min-h-[calc(100vh-15rem)]

export function BuyPresalePage() {
  return (
    <>
      <Preloader></Preloader>
      <div className="cs-height_70 cs-height_lg_40"></div>
      <div className="py-24 sm:container sm:mx-auto md:container-auto mx-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4  h-full">
          <div className="">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="cs-single_post">
                  <T>
                    Welcome to Mandarin, the leading online platform for
                    purchasing games with DRI tokens!
                  </T>{" "}
                  <P>
                    Our website offers a wide range of gaming titles for various
                    platforms, including PC, game consoles, and mobile devices.{" "}
                  </P>{" "}
                  <P>
                    With DRI tokens, you can easily and securely buy the games
                    you want, while taking advantage of the benefits of using
                    blockchain technology.{" "}
                  </P>{" "}
                  <P>
                    Our website features a user-friendly interface that allows
                    you to easily browse and search for the games you're
                    interested in, while ensuring that your transactions are
                    safe and your personal information is secure.{" "}
                  </P>{" "}
                  <P>
                    At Mandarin, we prioritize customer satisfaction and strive
                    to provide you with the best possible gaming experience.{" "}
                  </P>{" "}
                  <T>
                    come and discover the benefits of purchasing games with DRI
                    tokens on Mandarin today!
                  </T>{" "}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-xl font-semibold">Buy</p>
            <div className="mt-4 cs-white_bg rounded-2xl  p-10 pt-6 pb-2 space-y-4">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="cs-height_70 cs-height_lg_40"></div>
    </>
  );
}
