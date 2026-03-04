// language switch button script
let langSwitch = document.getElementById("langBtn");

// navbar elements
let navLinks = document.querySelectorAll(
  "header nav .nav-container .nav-links li a",
);
const navText = {
  arabic: {
    home: "الصفحة الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
  },
  english: {
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact Us",
  },
};

// elements for landing page
let mainHeading = document.getElementById("main-paragraph");
let secondParagraph = document.getElementById("second-paragraph");
let websiteName = document.getElementById("websiteName");
websiteName.style.color = "#ff6600";
const landingPage = {
  arabic: {
    mainHeading: "مرحبًا بكم في موقع " + websiteName.innerHTML,
    secondParagraph: "نحن ملتزمون بتقديم أفضل الخدمات لعملائنا.",
  },
  english: {
    mainHeading: "Welcome to " + websiteName.innerHTML + " Website",
    secondParagraph: "Your fast and reliable delivery service",
  },
};

// log in buttons
let ownerBtn = document.getElementById("ownerBtn");
let driverBtn = document.getElementById("driverBtn");
const ownerText = {
  arabic: "ابدأ كمالك متجر",
  english: "Get start as shop owner",
};
const driverText = {
  arabic: "ابدأ كسائق",
  english: "Get start as driver",
};

// feature cards
let cardTitle = document.querySelectorAll(".cardTitle");
let cardDes = document.querySelectorAll(".cardDes");
const featureCard1 = {
  card1Arabic: {
    title: "منصة واحدة للجميع",
    description:
      "منصة تجمع أصحاب المتاجر والسائقين في مكان واحد لتسهيل إدارة التوصيل.",
  },
  card1English: {
    title: "One Platform for All",
    description:
      "A platform that brings together shop owners and drivers in one place to facilitate delivery management.",
  },
  card2arabic: {
    title: "تسجيل سهل وسريع",
    description: "خطوات تسجيل بسيطة بدون تعقيد أو إجراءات طويلة.",
  },
  card2English: {
    title: "Easy and Fast Registration",
    description:
      "Simple registration steps without complexity or long procedures.",
  },
  card3arabic: {
    title: "نظام قابل للتطوير",
    description: "نعمل على تطوير المنصة باستمرار لإضافة مميزات جديدة مستقبلاً.",
  },
  card3English: {
    title: "Scalable System",
    description:
      "We are constantly developing the platform to add new features in the future.",
  },
};

// why choose us section heading
let whyChooseUs = document.getElementById("whyChooseUs");
let chooseUsParagraph = document.getElementById("chooseUsParagraph");
const whyChooseUsText = {
  arabic: {
    title: "لماذا تختارنا؟",
    description: "نقدم لك أفضل الحلول لإدارة عمليات التوصيل بكفاءة وسهولة.",
  },
  english: {
    title: "Why Choose Us?",
    description:
      "We provide you with the best solutions for managing delivery operations efficiently and easily.",
  },
};

// why choose us section
let whuCardTitles = document.querySelectorAll(".whuCardTitle");
let whuCardMenus = document.querySelectorAll(".whuCardMenu");
const whyChooseUsCards = {
  card1English: {
    title: "For Shop Owners",
    menu: [
      "Create orders in seconds",
      "Real-time driver matching",
      "Record of all completed deliveries",
      "Access detailed reports",
    ],
  },
  card1Arabic: {
    title: "لأصحاب المتاجر",
    menu: [
      "إنشاء الطلبات في ثوانِ",
      "مطابقة السائق في الوقت الفعلي",
      "سجل لجميع عمليات التسليم المكتملة",
      "الوصول إلى التقارير التفصيلية",
    ],
  },
  card2English: {
    title: "For Drivers",
    menu: [
      "Find nearby orders",
      "Flexible working hours",
      "Instant earnings",
      "Clear terms and conditions",
    ],
  },
  card2Arabic: {
    title: "للسائقين",
    menu: [
      "العثور على الطلبات القريبة",
      "ساعات عمل مرنة",
      "أرباح فورية",
      "شروط واضحة",
    ],
  },
};

// how it works section heading
let howItWorks = document.getElementById("howItWorks");
let hiwParagraph = document.getElementById("hiwParagraph");
const howItWorksText = {
  arabic: {
    title: "كيف تعمل المنصة؟",
    description: "نقدم لك خطوات بسيطة لفهم كيفية استخدام منصتنا بفعالية.",
  },
  english: {
    title: "How It Works?",
    description:
      "We provide you with simple steps to understand how to use our platform effectively.",
  },
};

// how it works section
let hiwCardTitle = document.querySelectorAll(".hiwCardTitle");
const howItWorksCards = {
  step1Arabic: {
    title: "كصاحب متجر",
  },
  step1English: {
    title: "As a Shop Owner",
  },
  step2Arabic: {
    title: "كسائق",
  },
  step2English: {
    title: "As a Driver",
  },
};

// steps titles and descriptions
let stepTitle = document.querySelectorAll(".stepTitle");
let stepDescription = document.querySelectorAll(".stepDescription");
const stepDetails = {
  card1: {
    step1: {
      arabic: {
        title: "أنشئ الطلب",
        description: "ادخل بيانات العميل و سعر التوصيل و موقعه",
      },
      english: {
        title: "Create Order",
        description: "Enter customer data, delivery price and location",
      },
    },
    step2: {
      arabic: {
        title: "مطابقة السائق",
        description: "نظامنا يطابق طلبك مع اقرب سائق متاح",
      },
      english: {
        title: "Driver Matching",
        description:
          "Our system matches your order with the nearest available driver",
      },
    },
    step3: {
      arabic: {
        title: "تتبع الوصيل",
        description: "تابع حالة التوصيل في الوقت الفعلي",
      },
      english: {
        title: "Delivery Tracking",
        description: "Follow the real-time delivery status",
      },
    },
  },
  card2: {
    step1: {
      arabic: {
        title: "أبحث عن الطلبات",
        description: "اعرض القريبة وقم بقبولها بسهولة",
      },
      english: {
        title: "Search For Orders",
        description: "View orders close to you and accept them easily",
      },
    },
    step2: {
      arabic: {
        title: "استلم الطرد",
        description: "تواصل مع صاحب المتجر لاستلام الطرد بسرعة",
      },
      english: {
        title: "Receive The Package",
        description: "Contact the store owner to receive the package quickly",
      },
    },
    step3: {
      arabic: {
        title: "قم بالتوصيل",
        description: "اتبع الاتجاهات لتوصيل الطرد إلي العميل بكفاءة",
      },
      english: {
        title: "Make Delivery",
        description:
          "Follow the directions to deliver the package to the customer efficiently",
      },
    },
  },
};

// let's begin section heading
let beginHeading = document.getElementById("beginHeading");
let beginParagraph = document.getElementById("beginParagraph");
const beginSecHead = {
  arabic: {
    title: "أختار دورك",
    description:
      "انضم إلى منصتنا اليوم وابدأ في تحسين عمليات التوصيل الخاصة بك.",
  },
  english: {
    title: "Choose Your Role",
    description:
      "Join our platform today and start improving your delivery processes.",
  },
};

// let's begin section Btns
let ownerEndBtn = document.getElementsByClassName("ownerEndBtn");
let driverEndBtn = document.getElementsByClassName("driverEndBtn");
let joinIcon = document.getElementsByClassName("joinIcon");
const oBtn = {
  arabic: "أنضم كصحاب متجر",
  english: "Join as a shop owner",
};
const dBtn = {
  arabic: "أنضم كسائق",
  english: "Join as a driver",
};

// footer text
let footerText = document.getElementById("footerText");
const footT = {
  arabic: "2026 Fast Delivery. جميع الحقوق محفوظة.",
  english: "2026 Fast Delivery. All Rights Reseved.",
};

// language switch functionality
langSwitch.addEventListener("click", function () {
  const isEnglish = langSwitch.classList.contains("english");

  if (isEnglish) {
    // NAVBAR
    navLinks[0].textContent = navText.english.home;
    navLinks[1].textContent = navText.english.services;
    navLinks[2].textContent = navText.english.about;
    navLinks[3].textContent = navText.english.contact;

    // LANDING PAGE
    mainHeading.textContent = landingPage.english.mainHeading;
    secondParagraph.textContent = landingPage.english.secondParagraph;

    // owner and driver buttons
    ownerBtn.textContent = ownerText.english;
    driverBtn.textContent = driverText.english;

    // feature cards
    cardTitle[0].textContent = featureCard1.card1English.title;
    cardDes[0].textContent = featureCard1.card1English.description;
    cardTitle[1].textContent = featureCard1.card2English.title;
    cardDes[1].textContent = featureCard1.card2English.description;
    cardTitle[2].textContent = featureCard1.card3English.title;
    cardDes[2].textContent = featureCard1.card3English.description;

    // why choose us section
    whyChooseUs.textContent = whyChooseUsText.english.title;
    chooseUsParagraph.textContent = whyChooseUsText.english.description;

    // why choose us cards
    whuCardTitles[0].textContent = whyChooseUsCards.card1English.title;
    whuCardMenus[0].innerHTML = "";
    whyChooseUsCards.card1English.menu.forEach(function (item) {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-circle-check custom-check"></i>${item}`;
      whuCardMenus[0].appendChild(li);
    });
    whuCardTitles[1].textContent = whyChooseUsCards.card2English.title;
    whuCardMenus[1].innerHTML = "";
    whyChooseUsCards.card2English.menu.forEach(function (item) {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-circle-check custom-check"></i>${item}`;
      whuCardMenus[1].appendChild(li);
    });

    // how it works section
    howItWorks.textContent = howItWorksText.english.title;
    hiwParagraph.textContent = howItWorksText.english.description;

    //how it works steps titles
    hiwCardTitle[0].textContent = howItWorksCards.step1English.title;
    hiwCardTitle[1].textContent = howItWorksCards.step2English.title;

    // how it works steps
    stepTitle[0].textContent = stepDetails.card1.step1.english.title;
    stepTitle[1].textContent = stepDetails.card1.step2.english.title;
    stepTitle[2].textContent = stepDetails.card1.step3.english.title;
    stepTitle[3].textContent = stepDetails.card2.step1.english.title;
    stepTitle[4].textContent = stepDetails.card2.step2.english.title;
    stepTitle[5].textContent = stepDetails.card2.step3.english.title;
    // how it works step description
    stepDescription[0].textContent =
      stepDetails.card1.step1.english.description;
    stepDescription[1].textContent =
      stepDetails.card1.step2.english.description;
    stepDescription[2].textContent =
      stepDetails.card1.step3.english.description;
    stepDescription[3].textContent =
      stepDetails.card2.step1.english.description;
    stepDescription[4].textContent =
      stepDetails.card2.step2.english.description;
    stepDescription[5].textContent =
      stepDetails.card2.step3.english.description;

    // let's begin section
    beginHeading.textContent = beginSecHead.english.title;
    beginParagraph.textContent = beginSecHead.english.description;

    // let's begin section Btns
    ownerEndBtn[0].textContent = oBtn.english;
    driverEndBtn[0].textContent = dBtn.english;

    // footer text
    footerText.textContent = footT.english;

    // update language button
    langSwitch.classList.remove("english");
    langSwitch.classList.add("arabic");
    langSwitch.textContent = "عربي";

    // body direction
    document.body.classList.add("english");
  } else {
    // NAVBAR
    navLinks[0].textContent = navText.arabic.home;
    navLinks[1].textContent = navText.arabic.services;
    navLinks[2].textContent = navText.arabic.about;
    navLinks[3].textContent = navText.arabic.contact;

    // LANDING PAGE
    mainHeading.textContent = landingPage.arabic.mainHeading;
    secondParagraph.textContent = landingPage.arabic.secondParagraph;

    // owner and driver buttons
    ownerBtn.textContent = ownerText.arabic;
    driverBtn.textContent = driverText.arabic;

    // feature cards
    cardTitle[0].textContent = featureCard1.card1Arabic.title;
    cardDes[0].textContent = featureCard1.card1Arabic.description;
    cardTitle[1].textContent = featureCard1.card2arabic.title;
    cardDes[1].textContent = featureCard1.card2arabic.description;
    cardTitle[2].textContent = featureCard1.card3arabic.title;
    cardDes[2].textContent = featureCard1.card3arabic.description;

    // why choose us section
    whyChooseUs.textContent = whyChooseUsText.arabic.title;
    chooseUsParagraph.textContent = whyChooseUsText.arabic.description;

    // why choose us cards
    whuCardTitles[0].textContent = whyChooseUsCards.card1Arabic.title;
    whuCardMenus[0].innerHTML = "";
    whyChooseUsCards.card1Arabic.menu.forEach(function (item) {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-circle-check custom-check"></i>${item}`;
      whuCardMenus[0].appendChild(li);
    });
    whuCardTitles[1].textContent = whyChooseUsCards.card2Arabic.title;
    whuCardMenus[1].innerHTML = "";
    whyChooseUsCards.card2Arabic.menu.forEach(function (item) {
      let li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-circle-check custom-check"></i>${item}`;
      whuCardMenus[1].appendChild(li);
    });

    // how it works section
    howItWorks.textContent = howItWorksText.arabic.title;
    hiwParagraph.textContent = howItWorksText.arabic.description;

    // how it works steps titles
    hiwCardTitle[0].textContent = howItWorksCards.step1Arabic.title;
    hiwCardTitle[1].textContent = howItWorksCards.step2Arabic.title;

    // how it works steps
    stepTitle[0].textContent = stepDetails.card1.step1.arabic.title;
    stepTitle[1].textContent = stepDetails.card1.step2.arabic.title;
    stepTitle[2].textContent = stepDetails.card1.step3.arabic.title;
    stepTitle[3].textContent = stepDetails.card2.step1.arabic.title;
    stepTitle[4].textContent = stepDetails.card2.step2.arabic.title;
    stepTitle[5].textContent = stepDetails.card2.step3.arabic.title;
    // how it works step description
    stepDescription[0].textContent = stepDetails.card1.step1.arabic.description;
    stepDescription[1].textContent = stepDetails.card1.step2.arabic.description;
    stepDescription[2].textContent = stepDetails.card1.step3.arabic.description;
    stepDescription[3].textContent = stepDetails.card2.step1.arabic.description;
    stepDescription[4].textContent = stepDetails.card2.step2.arabic.description;
    stepDescription[5].textContent = stepDetails.card2.step3.arabic.description;

    // let's begin section
    beginHeading.textContent = beginSecHead.arabic.title;
    beginParagraph.textContent = beginSecHead.arabic.description;

    // let's begin section Btns
    ownerEndBtn[0].textContent = oBtn.arabic;
    driverEndBtn[0].textContent = dBtn.arabic;

    // footer text
    footerText.textContent = footT.arabic;

    // update language button
    langSwitch.classList.remove("arabic");
    langSwitch.classList.add("english");
    langSwitch.textContent = "English";

    // body direction
    document.body.classList.remove("english");
  }
});
