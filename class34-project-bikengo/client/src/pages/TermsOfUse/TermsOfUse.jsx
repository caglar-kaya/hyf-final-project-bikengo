import React from "react";

const TermsOfUse = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 py-10 flex flex-col gap-y-5">
        <div>
          <h3 className="text-gray-400 text-lg tracking-widest">Agreement</h3>
          <h1 className="text-text text-5xl font-semibold py-3 tracking-widest">
            Terms of Use
          </h1>
        </div>
        <div className="flex flex-col space-y-5 tracking-wider text-gray-700 font-semibold">
          <p>
            We know its tempting to skip these terms of use, but its important
            to establish what you can expect form us as you use BikeNGo service.
            and what we expect from you.
          </p>
          <p>
            These Terms of Use reflect the way BikeNGo business works the laws
            that apply to our company, and certain things weve always believed
            to be true. AS a result, these Terms of Use help define BikeNGo
            relationship with you as you interact with our services. For
            example, these terms include the following topic heading
          </p>
        </div>
        <div className="px-10 ">
          <ul className="list-disc marker:text-primary">
            {/* add list of terms of use here */}
            <li className="text-lg text-gray-700 tracking-wide">
              Anything that would be a breach of any other person’s privacy
              (including if you upload personal information about an individual
              without their consent) or any other legal rights.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              Using our website to defame, harass, threaten, menace or offend
              any person.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              Interfering with anyone using our website.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              Tampering with or modifying our website, knowingly transmitting
              viruses or other disabling features, or damaging or interfering
              with our website, including using trojan horses, viruses or piracy
              or programming routines that may damage or interfere with our
              website.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              Using our website to send unsolicited email messages.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              Facilitating or assisting a third party to do any of the above
              act.s
            </li>
          </ul>
        </div>
        <div className="px-7 tracking-wider text-gray-600">
          <p>
            Understanding these terms is important because, to use our services,
            you must accept this terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
