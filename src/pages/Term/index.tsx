import { Head } from "src/components/Head";
import { P, T } from "src/shared/components/Docs";

export function TermPage() {
  return (
    <>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        {/* Start Page Head */}
        <Head title="Terms &amp; Conditions"></Head>
        {/* End Page Head */}
        <div className="cs-height_100 cs-height_lg_70" />
        <div className="sm:container sm:mx-auto mx-5">
          <div className="container-auto py-12">
            <T>Eligibility</T>{" "}
            <P>
              To use our website and purchase games using DRI tokens, you must
              be at least 18 years old and have a valid DRI token wallet
              address.
            </P>{" "}
            <T>Purchasing Games </T>{" "}
            <P>
              When you purchase a game on our website using DRI tokens, you
              agree to pay the specified amount of DRI tokens for the game. We
              reserve the right to change the prices of our games at any time
              without notice. We also reserve the right to refuse or cancel any
              orders for any reason.{" "}
            </P>{" "}
            <T>Delivery </T>{" "}
            <P>
              Once you have purchased a game using DRI tokens, you will receive
              a digital copy of the game through your account on our website. We
              are not responsible for any delays or issues with the delivery of
              the game due to circumstances beyond our control.
            </P>
            <T>Refunds </T>{" "}
            <P>
              We do not offer refunds for games purchased using DRI tokens,
              except as required by law.
            </P>{" "}
            <T>Ownership and Use</T>{" "}
            <P>
              When you purchase a game on our website using DRI tokens, you own
              a license to use the game for your personal, non-commercial use.
              You may not copy, distribute, or resell the game or any part of
              it.
            </P>
            <T>Disclaimer of Warranties</T>{" "}
            <P>
              We make no warranties, express or implied, about the accuracy,
              reliability, or completeness of the information or content on our
              website. We also do not warrant that our website will be
              error-free or free from viruses or other harmful components.
            </P>
            <T>Limitation of Liability</T>{" "}
            <P>
              We will not be liable for any damages, including but not limited
              to, indirect, incidental, or consequential damages, arising from
              the use or inability to use our website or the games purchased on
              our website..
            </P>
            <T>Indemnification </T>{" "}
            <P>
              You agree to indemnify and hold us harmless from any claims,
              damages, or expenses, including reasonable attorneys' fees,
              arising from your use of our website or any breach of these Terms
              & Conditions.
            </P>
            <T>Governing Law and Jurisdiction</T>{" "}
            <P>
              These Terms & Conditions will be governed by and construed in
              accordance with the laws of the jurisdiction in which our company
              is located. Any disputes arising from these Terms & Conditions
              will be resolved in the courts of that jurisdiction.
            </P>
            <T>Changes to these Terms & Conditions</T>{" "}
            <P>
              We reserve the right to modify or update these Terms & Conditions
              at any time without notice. Any changes will be posted on our
              website, and your continued use of our website after such changes
              will constitute your acceptance of the updated Terms & Conditions.
            </P>
          </div>
        </div>
        <div className="cs-height_60 cs-height_lg_30" />
      </div>
    </>
  );
}
