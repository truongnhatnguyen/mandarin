import { P, T } from "src/shared/components/Docs";
import { Form } from "./Form";
import { Preloader } from "src/components/Preloader";

// max-w-[540px] min-h-[calc(100vh-15rem)]

export function BuyPresalePage() {
  return (
    <>
      <Preloader></Preloader>
      <div className="cs-height_70 cs-height_lg_40"></div>
      <div className="py-24 container-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="cs-single_post">
                  <T>Privacy Policy for Atus</T>{" "}
                  <P>
                    At Atus, accessible from www.atus.network, one of our main
                    priorities is visitor privacy. This Privacy Policy document
                    contains the types of information collected and recorded by
                    Atus and how we use it.{" "}
                  </P>{" "}
                  <P>
                    At Atus, accessible from www.atus.network, one of our main
                    priorities is visitor privacy. This Privacy Policy document
                    contains the types of information collected and recorded by
                    Atus and how we use it.{" "}
                  </P>{" "}
                  <P>
                    If you have further questions or require more information
                    about our Privacy Policy, please contact us.{" "}
                  </P>{" "}
                  <P>
                    If you have further questions or require more information
                    about our Privacy Policy, please contact us.{" "}
                  </P>{" "}
                  <T>
                    What information do we collect Consent have further
                    questions or require more information
                  </T>{" "}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-xl font-semibold">Buy Pre-sale </p>
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
