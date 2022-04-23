import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 py-10 flex flex-col gap-y-5">
        <div>
          <h3 className="text-gray-400 text-lg tracking-widest">Agreement</h3>
          <h1 className="text-text text-5xl font-semibold py-3 tracking-widest">
            Privacy Policy
          </h1>
        </div>
        <div className="flex flex-col space-y-5 tracking-wider text-gray-700 font-semibold">
          <p>
            We know its tempting to skip these Privacy Policy, but its important
            to establish what you can expect form us as you use BikeNGo service.
            and what we expect from you.
          </p>
          <p>
            When you use our services or contact us, you trust us with your
            personal information. We collect and store this information about
            you to help us deliver the best possible service. Here we will
            explain what information we collect, how we collect it and what we
            actually do with it. By giving us your information you are agreeing
            for us to process it in the ways described here.
          </p>
        </div>
        <div className="px-10 ">
          <ul className="list-disc marker:text-primary">
            {/* add list of terms of use here */}
            <li className="text-lg text-gray-700 tracking-wide">
              We collect contact details like your name, phone number, email and
              address, f you are giving us others’ personal information, please
              do so only if they agree to this policy.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              If you place an advertise with BikeNGO (only possible as a
              registered user), your name as well as the address and selection
              data will be used to process the order.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              You confirm that the item complies with the Code of Conduct and
              that you have the right to sell the item.
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              BikeNGO is dedicated to protecting intellectual property rights,
              copyrights and trademarks, our legal team would like you all to be
              aware of our policies in this area..
            </li>
            <li className="text-lg text-gray-700 tracking-wide">
              BikeNGO cannot control everything that is loaded to the site we do
              our best to ensure that listed items do not infringe upon the
              copyright, trademark or other intellectual property rights of
              third parties. If you believe that your intellectual property
              rights have been infringed, please notify our customer care team
              and we will investigate as soon as we can.
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

export default PrivacyPolicy;
