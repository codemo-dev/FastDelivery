let langSwitch = document.getElementById("langBtn");

let backHome = document.querySelector(".text");
let backLang = {
  arabic: "الرجوع للصفحة الرئيسية",
  english: "Back home",
};

let title = document.querySelector(".log");
let description = document.querySelector("#des");
let tit_des = {
    title: {
        arabic: "تسجيل الدخول",
        english: "Login"
    },
    desOwner: {
        arabic: "سجل لإنشاء طلباتك بسهولة كصاحب متجر",
        english: "Log in to create your orders as a store owner"
    },
    desDriver: {
        arabic: "سجل لقبول الطلبات القريبة منك بسهولة",
        english: "Log in to accept orders near you easily"
    }
}

let phone = document.querySelector(".number");
let password = document.querySelector(".pass");
let num_pass = {
    phone: {
        arabic: "رقم هاتفك",
        english: "Phone number"
    },
    pass: {
        arabic: "كلمة السر",
        english: "Password"
    }
}

let forgot = document.querySelector(".forgot");
let login = document.querySelector(".submitBtn");
let signin = document.querySelector(".sigIn");
let signLink = document.querySelector(".signLink");
let sign_log_forgot = {
    forgot: {
        arabic: "نسيت كلمة السر؟",
        english: "Forgot password?"
    },
    login: {
        arabic: "تسجيل الدخول",
        english: "Log in"
    },
    signin: {
        arabic: "ليس لديك حساب؟",
        english: "Don't have account?"
    },
    signLink: {
        arabic: "انشئ حساب",
        english: "Create account"
    }
}

langSwitch.addEventListener("click", () => {
  const isEnglish = langSwitch.classList.contains("english");

  if (isEnglish) {
    backHome.textContent = backLang.english;

    title.textContent = tit_des.title.english;
    if (description.classList.contains("owner")) {
        description.textContent = tit_des.desOwner.english;
    } else if (description.classList.contains("driver")) {
        description.textContent = tit_des.desDriver.english
    }

    phone.textContent = num_pass.phone.english;
    password.textContent = num_pass.pass.english;

    forgot.textContent = sign_log_forgot.forgot.english;
    login.textContent = sign_log_forgot.login.english;
    signin.textContent = sign_log_forgot.signin.english;
    signLink.textContent = sign_log_forgot.signLink.english;

    // update language button
    langSwitch.classList.remove("english");
    langSwitch.classList.add("arabic");
    langSwitch.textContent = "عربي";

    // body direction
    document.body.classList.add("english");
  } else {
    backHome.textContent = backLang.arabic;

    title.textContent = tit_des.title.arabic;
    if (description.classList.contains("owner")) {
        description.textContent = tit_des.desOwner.arabic;
    } else if (description.classList.contains("driver")) {
        description.textContent = tit_des.desDriver.arabic
    }

    phone.textContent = num_pass.phone.arabic;
    password.textContent = num_pass.pass.arabic;

    forgot.textContent = sign_log_forgot.forgot.arabic;
    login.textContent = sign_log_forgot.login.arabic;
    signin.textContent = sign_log_forgot.signin.arabic;
    signLink.textContent = sign_log_forgot.signLink.arabic;

    // update language button
    langSwitch.classList.remove("arabic");
    langSwitch.classList.add("english");
    langSwitch.textContent = "English";

    // body direction
    document.body.classList.remove("english");
  }
  localStorage.setItem("direction", document.body.classList);
  localStorage.setItem("switchBtn", langSwitch.textContent);
  localStorage.setItem("backBtn", backHome.textContent);
  localStorage.setItem("title", title.textContent);
  localStorage.setItem("des", description.textContent);
  localStorage.setItem("phone", phone.textContent);
  localStorage.setItem("password", password.textContent);
  localStorage.setItem("forgot", forgot.textContent);
  localStorage.setItem("login", login.textContent);
  localStorage.setItem("signin", signin.textContent);
  localStorage.setItem("signLink", signLink.textContent);
});

if (localStorage.getItem("direction")) {
    document.body.classList.add(localStorage.getItem("direction"));
    langSwitch.textContent = localStorage.getItem("switchBtn");
    backHome.textContent = localStorage.getItem("backBtn");
    title.textContent = localStorage.getItem("title");
    description.textContent = localStorage.getItem("des");
    phone.textContent = localStorage.getItem("phone");
    password.textContent = localStorage.getItem("password");
    forgot.textContent = localStorage.getItem("forgot");
    login.textContent = localStorage.getItem("login");
    signin.textContent = localStorage.getItem("signin");
    signLink.textContent = localStorage.getItem("signLink");
}