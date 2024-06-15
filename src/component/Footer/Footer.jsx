import React from "react";
import amazonPayLogo from "../../assets/images/amazon-pay.png";
import americanExpressPayLogo from "../../assets/images/American-Express-Color.png";
import mastercardLogo from "../../assets/images/mastercard.webp";
import paypalLogo from "../../assets/images/paypal.png";
import geoglePlay from "../../assets/images/get-google-play.png";
import appStore from "../../assets/images/get-apple-store.png";
export default function Footer() {
  return (
    <footer className="w-full py-4 bg-slate-100 absolute bottom-0 left-0 right-0">
      <h2 className="text-2xl semibold">Get the Freshcart App</h2>
      <p className="my-3">
        We will send you a link, open it on your phone to download the app{" "}
      </p>
      <div className="flex gap-4">
        <input
          type="text"
          className="form-control flex-grow"
          placeholder="Email..."
        />
        <button className="btn-primary"> share app link</button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 items-center">
          <span>payment partener</span>
          <div className="flex gap-2 items-center">
            <img src={amazonPayLogo} className="w-16" alt="logo" />
            <img src={americanExpressPayLogo} className="w-16" alt="logo" />
            <img src={mastercardLogo} className="w-16" alt="logo" />
            <img src={paypalLogo} className="w-16" alt="logo" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span>Get delivers with FreshCart</span>
          <div className="flex gap-2 items-center">
            <img src={geoglePlay} className="w-16" alt="logo" />
            <img src={appStore} className="w-16" alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
