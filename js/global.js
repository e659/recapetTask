if (localStorage.getItem("lang") !== null) {
  localStorage.getItem("lang");
}
if (localStorage.getItem("dir") !== null) {
  localStorage.getItem("dir");
}

var set_locale_to = function (locale) {
  if (locale) $.i18n().locale = locale;

  let li = document.querySelectorAll(".switch-locale li");
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (e) {
      li.forEach((f) => f.classList.toggle("nonActive"));
    });
  }
  $("html").i18n();
};
jQuery(function () {
  $.i18n()
    .load({
      en: {
        header_Home: "Home",
        header_about: "About Us",
        header_employee: "Employer Benefits",
        header_employer: "Employee Benefits",
        header_contactUs: "Contact",
        "header_Your Cash Solution": "| Your Cash Solution ",
        header_btn: "JOIN TODAY",
        home_p1: "Financial Wellness Gate for Your Employees",
        home_p2:
          "Empower your employees to access their earned wages  anytime, and make every day a payday.",
        home_btn1: "REQUEST A DEMO",
        home_btn2: "DOWNLOAD THE APP",
        employer_secTitle: "Employer Benefits",
        "employer_col1-h5": "Zero Cost",
        "employer_col1-p": "No hidden, surprise or additional fees.",
        "employer_col2-h5": "Zero Interest",
        "employer_col2-p": "Full compliance with Shariah.",
        "employer_col3-h5": "Time-saving",
        "employer_col3-p":
          "Release pressure on human resources in your company.",
        "employer_col4-h5": "Easy Liquidity",
        "employer_col4-p":
          "Your employees will no longer need to apply for loans. ",
        "employer_col5-h5": "Money Collection",
        "employer_col5-p":
          "Withdrawn Payments will be automatically deducted when  transferring salaries.",
        "employer_col6-h5": "Quick Access",
        "employer_col6-p":
          "Meet the financial needs of your employees whenever they want.",
        "employer_col7-h5": "Increased  Productivity",
        "employer_col7-p":
          "Free your employees from  financial worries, enabling complete focus on their work.",
        "employer_col8-h5": "Turnover Reduction",
        "employer_col8-p": "Enhance employee job   satisfaction and loyalty.",
        employer_seemoreBtn: "SEE MORE",
        howQWork__h6: "How Does Qsalary Work?",
        howQWork__p1: "Financial Freedom for Your Employees  in 3 Simple Steps",
        howQWork__h51: "Register Your Company",
        howQWork__p2:
          "Registration is easy, complications and  hassle free, just contact us.",
        howQWork__h52: "Add Your Employees",
        howQWork__p3:
          "Effortlessly add your employees and their details in a click or let us take care of it.",
        howQWork__h53: "Set Maximum Withdrawal   Limits for Each Employee",
        howQWork__p4:
          "Enable easy on-demand access to earned wages, complying with wage protection  laws.",
        "4th__sectittle":
          "Taking your employees out  of their financial stress",
        "4th__p1":
          "of individuals experience financial  stress at least once a year",
        "4th__p2":
          "the annual cost to employers in lost  productivity as a result of employee financial stress",
        "4th__p3": "of employee turnover attributable to financial stress",
        "4th__btn": "REQUEST A DEMO",
        Employee_secTitle: "Employee Benefits",
        Employee_h51: "Instant Liquidity 24/7",
        Employee_p1:
          "Do you have emergency expenses? Get  liquidity with just one click.",
        Employee_h52: "No More Wages Delays",
        Employee_p2:
          "Administrative procedures will no longer  hinder your earned wages access. Get the  money you need anytime.",
        Employee_h53: "You Won't Miss Any  Promotion",
        Employee_p3:
          "With Qsalary, never miss sales discounts due to liquidity issues.",
        Employee_h54: "Centralized Expense Management",
        Employee_p4:
          "Enjoy a user-friendly app displaying your remaining wages on your smartphone.",
        Employee_h55: "Fixed Fees, 0% Interest",
        Employee_p5:
          "No interest will apply to any amount  you withdraw, but a flat fee per withdrawal.",
        download__h5: "Download the APP",
        download__p: "Help Us Contact Your Company",
        "7th___sectitle": "FAQs",
        "7th___li1": "What is Qsalary?",
        "7th___li2": "Is Qsalary a loan service?",
        "7th___li3": "For whom is Qsalary?",
        "7th___li4": "Is there a minimum salary requirement for this app?",
        "7th___li5":
          "Is there a minimum number of employees required from the company ?",
        "7th___li6": "Does Qsalary charge any interest?",
        "8th___sectitle": "Our Success Partners",
        "9th___h51": "Start Now",
        "9th___p1": "Ready to empower your employees with anytime wage access?",
        "9th___li1": "Quick & easy",
        "9th___li2": "Automation",
        "9th___li3": "No Interests",
        "9th___li4": "Stress Free",
        "9th___btn": "REQUEST A DEMO",
        contact__us___h51: "Stay in the know",
        contact__us___p1: "Subscribe Mailing List",
        contact__us___submit: "Subscribe",
        contact__us___h52: "Follow Us",
        contact__us___p2: "Social Media Accounts",
        footer__link1: "Blog",
        footer__link2: "FAQ",
        footer__link3: "Privacy Policy",
        footer__cpy1: "Powered by ASFA Ventures",
        footer__cpy2: "All rights reserved© Qsalary 2023",
      },
      ar: {
        header_Home: "الرئيسية",
        header_about: "نبذة عنا",
        header_employee: "مزايا صاحب العمل",
        header_employer: "مزايا الموظفين",
        header_contactUs: "تواصل معنا",
        "header_Your Cash Solution": "| سيولة بكل سهولة",
        header_btn: "انضم الآن",
        home_p1: "كيوسالاري، البوابة المالية لتوفير الراحة لموظفيك",
        home_p2:
          "مكِّن موظفيك من الوصول إلى مستحقاتهم المالية بسهولة وفي أي وقت، ليكون كل يوم هو يوم الراتب.",
        home_btn1: "اطلب عرضاً توضيحياً الآن",
        home_btn2: "حـمّـل الـتطبـيـق",
        employer_secTitle: "مزايا صاحب العمل",
        "employer_col1-h5": "صفر تكلفة",
        "employer_col1-p": "بدون رسوم خفية أو مفاجئة أو إضافية.",
        "employer_col2-h5": "صفر فوائد",
        "employer_col2-p": "متوافق مع مبادئ الشريعة الإسلامية.",
        "employer_col3-h5": "توفير الوقت",
        "employer_col3-p": "يخفف أعباء قسم الموارد البشرية في شركتك.",
        "employer_col4-h5": "سيولة بسهولة",
        "employer_col4-p": "لن يحتاج موظفوك للاستدانة بعد الآن.",
        "employer_col5-h5": "استرداد المال",
        "employer_col5-p": "اقتطاع تلقائي للمبالغ المسحوبة عند تحويل  الرواتب.",
        "employer_col6-h5": "وصول سريع",
        "employer_col6-p": "تأمين الاحتياجات المالية لموظفيك متى أرادوا.",
        "employer_col7-h5": "إنتاجية أعلى",
        "employer_col7-p":
          "إزالة الصعوبات المالية عن موظفيك ليكون تركيزهم على عملهم فقط.",
        "employer_col8-h5": "الحد من التسرب الوظيفي",
        "employer_col8-p": "تحسين الرضا والولاء الوظيفي لموظفيك.",
        employer_seemoreBtn: "شـاهد الـمـزيـد",
        howQWork__h6: "؟Qsalaryكيف يعمل تطبيق ",
        howQWork__p1: " خطوات بسيطة3حرر موظفيك مالياً بـ ",
        howQWork__h51: "سجل شركتك",
        howQWork__p2:
          " ستكون عملية التسجيل سهلة وبسيطة، من غيرQsalary  مع أي تعقيدات أو عراقيل، فقط تواصل معنا.",
        howQWork__h52: "أضف موظفيك",
        howQWork__p3:
          "أضف موظفيك وسجل بياناتهم بنقرات بسيطة، أو اترك لنا هذه المهمة.",
        howQWork__h53: "اختر الحد الأقصى للسحب لكل موظف",
        howQWork__p4:
          "امنح موظفيك إمكانية الحصول على مستحقاتهم  بسهولة بما يتوافق مع قوانين حماية الأجور",
        "4th__sectittle": "َلّص موظفيك من قلق الضغوطات المالية",
        "4th__p1":
          "من الأفراد يمرون بصعوبات وضائقات مالية مرة  سنوياً على الأقل",
        "4th__p2":
          "هي الكلفة السنوية للخسارة بسبب نقص إنتاجية  الموظفين الذين يعانون من ضغوطات مالية",
        "4th__p3": "من نسب استقالة الموظفين ترجع إلى الضغوطات   المالية",
        "4th__btn": "اطـلـب عرضـاً توضـيـحـيـاً الـآن",
        Employee_secTitle: "مزايا الموظفين",
        Employee_h51: "24/7سيولة مالية فورية ",
        Employee_p1:
          "هل أنت بحاجة إلى مصاريف طارئة؟ احصل على السيولة بضغطة زر.",
        Employee_h52: "لا تأخير في صرف مستحقاتك",
        Employee_p2:
          "لن تشكل الإجراءات الإدارية عائقاً للحصول على مستحقاتك المالية.",
        Employee_h53: "لن يفوتك أي عرض ترويجي",
        Employee_p3:
          "لن تكون نقص السيولة سبباً في تفويت أي خصم على الشراء بعد الآن.",
        Employee_h54: "إدارة مصاريفك من مكان واحد",
        Employee_p4:
          "تمتع بتطبيق بسيط وسهل يُظهر المبلغ المتبقي من  مستحقاتك من خلال هاتفك الذكي.",
        Employee_h55: "% فوائد0رسوم ثابتة، ",
        Employee_p5:
          "لن تُطبَّق أية فوائد على أي مبلغ تقوم بسحبه، وإنَّما  رسوم ثابتة لكل عملية سحب.",
        download__h5: "حمّل التطبيق الآن!",
        download__p: "واحصل على السيولة بسهولة",
        "7th___sectitle": "الأسئلة الشائعة",
        "7th___li1": "؟ Qsalary ما هو تطبيق  ",
        "7th___li2": "  خدمة قروض؟ Qsalary هل ",
        "7th___li3": "؟Qsalary لمن تطبيق ",
        "7th___li4":
          "هل يوجد حد أدنى للرواتب المؤهلة للاستفادة من هذا التطبيق؟",
        "7th___li5": "هل يوجد حد أدنى لعدد الموظفين في الشركة؟",
        "8th___sectitle": "شركاءالنجاح",
        "9th___h51": "ابدأ الآن",
        "9th___p1":
          "جاهز لتمكين موظفيك من الوصول إلى رواتبهم المستحقة متى أرادوا؟",
        "9th___li1": "سهل وسريع",
        "9th___li2": "بشكل آلي",
        "9th___li3": "دون فوائد",
        "9th___li4": "خالي من الضغوطات",
        "9th___btn": "اطلب عرضاً توضيحياً الآن",
        contact__us___h51: "ابقى على اطلاع",
        contact__us___p1: "اشترك بالنشرة البريدية",
        contact__us___submit: "إشتراك",
        contact__us___h52: "تابعنا على",
        contact__us___p2: "منصات التواصل الإجتماعي",
        footer__link1: "المدونة",
        footer__link2: "الأسئلة الشائعة",
        footer__link3: "سياسة الخصوصية",
        footer__cpy1: "Powered by ASFA Ventures",
        footer__cpy2: "Qsalary 2023جميع الحقوق محفوظة © ",
      },
    })
    .done(function () {
      set_locale_to(url("?locale"));
      History.Adapter.bind(window, "statechange", function () {
        set_locale_to(url("?locale"));
      });
      $(".switch-locale").on("click", "a", function (e) {
        e.preventDefault();

        if ($(this).data("locale") == "ar") {
          $("body").removeClass("ltr");
          $("body").addClass("rtl");
          $("html").attr("lang", "ar");
          $("html").attr("dir", "rtl");
        } else {
          $("body").removeClass("rtl");
          $("body").addClass("ltr");
          $("html").attr("lang", "en");
          $("html").attr("dir", "ltr");
        }

        History.pushState(null, null, "?locale=" + $(this).data("locale"));

        localStorage.setItem("lang", $(this).data("locale"));
        localStorage.setItem("dir", $("html").attr("dir"));
      });
    });
});
