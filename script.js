/* =========================================
   HMS - HOME MASSAGE SERVICES
   BOOKING FORM JAVASCRIPT
========================================= */


/* =========================================
   EMAILJS CONFIGURATION
=========================================

   IMPORTANT:
   - Public Key yahan add karein
   - Service ID yahan add karein
   - Template ID yahan add karein
   - PRIVATE KEY kabhi bhi yahan mat daalein
*/


const EMAILJS_PUBLIC_KEY = "3cfj2808eTpoLiYgA";

const EMAILJS_SERVICE_ID = "service_gcz4xbp";

const EMAILJS_TEMPLATE_ID = "template_7rfybnl";


/* =========================================
   INITIALIZE EMAILJS
========================================= */

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});


/* =========================================
   GET FORM ELEMENTS
========================================= */

const bookingForm =
  document.getElementById("booking-form");

const formStatus =
  document.getElementById("form-status");


/* =========================================
   BOOKING FORM SUBMIT
========================================= */

bookingForm.addEventListener(
  "submit",
  async function (event) {

    // Page reload ko stop karta hai
    event.preventDefault();


    // Button
    const submitButton =
      bookingForm.querySelector(
        'button[type="submit"]'
      );


    // Loading message
    formStatus.textContent =
      "Sending your booking request...";


    // Button disable
    submitButton.disabled = true;

    submitButton.textContent =
      "Sending...";


    try {

      /* =====================================
         SEND FORM THROUGH EMAILJS
      ===================================== */

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        bookingForm
      );


      /* =====================================
         SUCCESS MESSAGE
      ===================================== */

      formStatus.textContent =
        "Booking request sent successfully. HMS will contact you for confirmation.";


      formStatus.style.color =
        "#c8a96b";


      /* =====================================
         CLEAR FORM
      ===================================== */

      bookingForm.reset();


    } catch (error) {

      console.error(
        "EmailJS Error:",
        error
      );


      /* =====================================
         ERROR MESSAGE
      ===================================== */

      formStatus.textContent =
        "Sorry, your request could not be sent. Please try again or contact HMS directly.";


      formStatus.style.color =
        "#ff9b9b";

    }


    /* =====================================
       ENABLE BUTTON AGAIN
    ===================================== */

    submitButton.disabled = false;

    submitButton.textContent =
      "Send Booking Request";

  }
);


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   PREVENT PAST BOOKING DATES
========================================= */

const dateInput =
  document.querySelector(
    'input[name="date"]'
  );


if (dateInput) {

  const today =
    new Date().toISOString().split("T")[0];

  dateInput.min = today;

}


/* =========================================
   PHONE NUMBER BASIC VALIDATION
========================================= */

const phoneInput =
  document.querySelector(
    'input[name="phone"]'
  );


if (phoneInput) {

  phoneInput.addEventListener(
    "input",
    function () {

      // Sirf numbers, +, spaces, -, brackets
      this.value =
        this.value.replace(
          /[^0-9+\-\s()]/g,
          ""
        );

    }
  );

}


/* =========================================
   SERVICE SELECTION
========================================= */

const serviceSelect =
  document.querySelector(
    'select[name="service"]'
  );


if (serviceSelect) {
serviceSelect.addEventListener(
    "change",
    function () {

      if (this.value) {

        console.log(
          "Selected service:",
          this.value
        );

      }

    }
  );

}


/* =========================================
   BOOKING FORM READY
========================================= */

console.log(
  "HMS Booking System Loaded Successfully."
);

