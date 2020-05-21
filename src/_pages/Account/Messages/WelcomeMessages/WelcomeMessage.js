import React from "react";

export const WelcomeMessage = (props) => {
  const { message, type } = props;
  let diagnosis = "";
  switch (type) {
    case "ED":
      diagnosis = "Erectile Dysfunction";
      break;

    case "HAIR":
      diagnosis = "Alopecia";
      break;

    case "ALLERGY":
      diagnosis = "Allergic Rhinitis";
      break;

    case "JOY":
      diagnosis = "Dysthymia or Anxiety";
      break;

    case "SLEEP":
      diagnosis = "Sleep-Insomnia";
      break;

    case "WEIGHT":
      diagnosis = "Obesity";
      break;

    default:
      diagnosis = "";
  }

  return (
    <>
      <p>Dear {message.user.firstName},</p>
      <p>Thank you for choosing Victory Select for your healthcare needs.</p>
      <p>
        I am Dr. William Franklin. I have reviewed the health history
        information you provided online. Your diagnosis is {diagnosis} and I
        feel you would benefit from {message.prescription.product.productName}.
      </p>
      <p>
        Your prescription has been sent to The Daily Dose pharmacy and will be
        mailed out directly to the address you provided.
      </p>
      <p>
        Make sure to click on the treatment plan below prior to taking any
        medications. The treatment plan will help clarify the benefits, risks,
        and alternative treatment options. This includes opting for no treatment
        at all.
        <br />
        <a
          href={message.prescription.product.treatmentUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Treatment Plan
        </a>
      </p>
      <p>
        Your package insert contains a full list of potential side effects and
        warnings and we encourage you to review this information.
      </p>
      <p>
        Please feel free to contact me with any additional questions or
        concerns,
      </p>
      <p>Sincerely,</p>
      <p>
        William G. Franklin, MD
        <br />
        <a
          href={`https://www.victoryselect.com/bio/william-franklin/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Bio
        </a>
      </p>
    </>
  );
};
