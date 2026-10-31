/**
 * مسودة content.js — مبنية فقط على ما ذكرتِه في المحادثة.
 * أي قيمة فيها كلمة TODO لا أعرفها: استبدليها قبل النشر.
 * لم تُغيَّر أسماء المفاتيح، والقيم فقط هي التي استُبدلت.
 */

export const PROFILE = {
  name: { ar: 'نهى صالح محمداحمد', en: 'Nuha Salih Mohammed' }, // TODO: تأكدي من الاسم الذي تريدينه ظاهرًا
  email: 'pocopad66@gmai.com', // TODO
  github: 'https://github.com/nuha-salih',
  //linkedin: 'https://www.linkedin.com/in/TODO', // TODO أو احذفي السطر إن لم يكن لديك حساب
  //x: 'https://x.com/TODO', // TODO أو احذفي السطر إن لم يكن لديك حساب

  location: { ar: 'نجران، السعودية', en: 'Najran, Saudi Arabia' }, // TODO: عدّليها إن لم ترغبي بإظهار المدينة
  timeZone: 'Asia/Riyadh',
}

export const NAV = [
  { id: 'home', ar: 'الرئيسية', en: 'Home' },
  { id: 'about', ar: 'نبذة', en: 'About' },
  { id: 'skills', ar: 'المهارات', en: 'Skills' },
  { id: 'projects', ar: 'المشاريع', en: 'Projects' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
]

export const CONTENT = {
  ar: {
    dir: 'rtl',
    hero: {
      titleBefore: 'كيف نكشف الطائرات المسيّرة',
      titleAccent: 'مبكرًا',
      titleAfter: '؟',
      subtitle:
        'أجمع بين الذكاء الاصطناعي والأنظمة المدمجة لأبني حلولًا ترصد ما لا تلتقطه العين مبكرًا.',
      ctaPrimary: 'شاهد المشاريع',
      ctaSecondary: 'تواصل معي',
      scroll: 'مرّر للأسفل',
    },
    about: {
      index: '01',
      kicker: 'نبذة',
      paragraphs: [
        'أجيب على هذا السؤال بالجمع بين أمرين: حساسات وأنظمة مدمجة تلتقط المعلومة، ونموذج ذكاء اصطناعي يفهمها. هذا ما أعمل عليه في مشروع لكشف الطائرات المسيّرة الصغيرة مبكرًا، وهو ما زال قيد التطوير.',
        'أدرس علوم الحاسب في جامعة نجران. أطوّر نماذج الذكاء الاصطناعي وخدمات الباك إند، وأبني مشاريع عتاد  صغيرة بـArduino وESP32، وأتعامل مع أدوات الذكاء الاصطناعي .',
        'أتجه نحو الروبوتات الانظمه المدمجة وتقنيات TinyMlوالطائرات المسيّرة وكل ما يربط الذكاء الاصطناعي بالعالم الحقيقي . أنا عضوة في أربعة أندية طلابية (الذكاء الاصطناعي، والبرمجة، والأمن السيبراني، وIEEE)، وحصلت على المركز الأول في هاكثون أنيوثون بالمسار التقني.',
      ],
      education: {
        kicker: 'التعليم',
        degree: 'بكالوريوس علوم الحاسب — قيد الدراسة',
        school: 'جامعة نجران · نجران',
        period: 'قيد الدراسة', // TODO: أضيفي سنة البداية إن أحببتِ
      },
    },
    skills: {
      index: '02',
      kicker: 'المهارات',
      titleBefore: 'الأدوات التي',
      titleAccent: 'أعتمد',
      titleAfter: 'عليها.',
      intro: 'أختار أدواتي بحسب المشكلة: ما يربط الحساس بالنموذج بأبسط طريقة تعمل.',
      groups: [
        { title: 'الذكاء الاصطناعي والباك إند', items: ['Python', 'FastAPI', 'REST API', 'تعلّم الآلة'] },
        { title: 'الأنظمة المدمجة', items: ['Arduino', 'ESP32', 'Raspberry Pi', 'الحساسات'] },
        { title: 'الأمن والأدوات', items:[ 'أدوات الذكاء الاصطناعي ','GitHub'] }, // TODO: أضيفي ما تتقنينه فعلًا
      ],
    },
    projects: {
      index: '03',
      kicker: 'المشاريع',
      titleBefore: 'أشياء',
      titleAccent: 'بنيتها',
      titleAfter: 'بنفسي.',
      intro: 'مشاريع تجمع الذكاء الاصطناعي بالعتاد، بعضها مكتمل وبعضها ما زال يُبنى.',
      viewProject: 'افتح المشروع',
      viewCode: 'اقرأ الكود',
      moreTitle: 'مشاريع أخرى',
    },
    contact: {
      index: '04',
      kicker: 'تواصل',
      titleBefore: 'لنتحدّث عمّا',
      titleAccent: 'تبنيه',
      titleAfter: '.',
      intro: 'يسعدني التعاون في مشاريع الذكاء الاصطناعي والأنظمة المدمجة والطائرات المسيّرة.',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال…',
        success: 'وصلت الرسالة — شكراً، وسيصل الردّ قريباً.',
        error: 'تعذّر الإرسال. المراسلة على البريد مباشرة تعمل دائماً.',
      },
    },
    footer: {
      top: 'للأعلى',
    },
    loading: 'جارٍ تحميل الصفحة',
  },

  en: {
    dir: 'ltr',
    hero: {
      titleBefore: 'How do we spot drones',
      titleAccent: 'early',
      titleAfter: '?',
      subtitle:
        'I combine AI and embedded systems to build solutions that catch what the eye misses.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      index: '01',
      kicker: 'About',
      paragraphs: [
        'I answer it by combining two things: sensors and embedded systems that capture the signal, and an AI model that makes sense of it. That is what I am building in a project for early detection of small drones, still in development.',
        'I study Computer Science at Najran University. I develop AI models and backend services, build small hardware projects with Arduino and ESP32, and work with AI tools.',
        'I am heading toward robotics, drones,TinyMl and anything that connects AI to the real world. I am a member of four student clubs (AI, Programming, Cybersecurity, and IEEE), and I won first place in the technical track at the Anuthon hackathon.',
      ],
      education: {
        kicker: 'Education',
        degree: 'B.Sc. Computer Science — in progress',
        school: 'Najran University · Najran',
        period: 'In progress',
      },
    },
    skills: {
      index: '02',
      kicker: 'Skills',
      titleBefore: 'The tools I',
      titleAccent: 'reach for',
      titleAfter: 'most.',
      intro: 'I pick tools by the problem: the simplest thing that connects the sensor to the model.',
      groups: [
        { title: 'AI & backend', items: ['Python', 'FastAPI', 'REST API', 'Machine learning'] },
        { title: 'Embedded systems', items: ['Arduino', 'ESP32', 'Raspberry Pi', 'Sensors'] },
        { title: 'Security & tools', items: ['AI tools', 'GitHub'] },
      ],
    },
    projects: {
      index: '03',
      kicker: 'Projects',
      titleBefore: 'Things I',
      titleAccent: 'built',
      titleAfter: 'myself.',
      intro: 'Projects that join AI with hardware, some finished and some still being built.',
      viewProject: 'Open project',
      viewCode: 'View code',
      moreTitle: 'More projects',
    },
    contact: {
      index: '04',
      kicker: 'Contact',
      titleBefore: "Let's talk about what",
      titleAccent: "you're building",
      titleAfter: '.',
      intro: 'Happy to collaborate on AI, embedded systems, and drone projects.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message received — thank you, a reply is on the way.',
        error: 'Could not send. Emailing me directly always works.',
      },
    },
    footer: {
      top: 'Back to top',
    },
    loading: 'Loading the page',
  },
}

/* TODO: كل رابط url أدناه مؤقت — ضعي رابط المستودع الحقيقي لكل مشروع قبل النشر. */
export const PROJECTS = [
  {
    id: '01',
    kind: 'code',
    featured: true,
    url: 'https://github.com/nuha-salih/Anti-UAV410', // TODO: رابط مستودع مشروع كشف الدرونز
    title: { ar: 'كشف الطائرات المسيّرة بالذكاء الاصطناعي', en: 'AI-Powered Drone Detection' },
    description: {
      ar: 'مشروع تخرج قيد التطوير للكشف المبكر عن الطائرات المسيّرة الصغيرة، لأن صغر حجمها يجعل رصدها مبكرًا صعبًا. أعمل على الجانب الذكي من النظام.', //TODO: أضيفي مدخلات النظام (كاميرا/صوت/رادار) وما أُنجز.
      en: 'A graduation project in development for early detection of small drones, which are hard to spot early because of their size. I work on the AI side of the system.,'// TODO: add the system inputs (camera/audio/radar) and what is done so far.',
    },
    tech: ['Python', 'AI'],
  },
  {
    id: '02',
    kind: 'code',
    featured: true,
    url: 'https://github.com/nuha-salih/Aman_AI', // TODO: رابط مستودع «أمان AI»
    title: { ar: 'أمان AI', en: 'Aman AI' },
    description: {
      ar: 'نموذج أولي من هاكثون «أمد» (برعاية بنك الإنماء وأكاديمية طويق). كنت مسؤولة عن نموذج الذكاء الاصطناعي والباك إند وربطه عبر API.',
      en: 'A prototype from the Amad hackathon (sponsored by Alinma Bank and Tuwaiq Academy). I was responsible for the AI model, the backend, and the API integration. It runs the core functions .',
    },
    tech: ['AI', 'Backend', 'REST API'],
  },
  {
    id: '03',
    kind: 'code',
    featured: true,
    url: 'https://github.com/nuha-salih', // TODO: رابط الكود أو احذفي الحقل إن لم يوجد
    title: { ar: 'روبوت متنقل بحساس ألترا ساوند', en: 'Ultrasonic Mobile Robot' },
    description: {
      ar: 'روبوت يتجنب العوائق بعجلتين وهيكل خشبي مبني على Arduino Nano ودرايفر محركات وحساس مسافة بالموجات فوق الصوتية، وهو أساس الاستشعار والتحكم.',// TODO: اكتبي ما يفعله فعلًا (يتجنب العوائق؟ يتوقف؟ يدور؟).',
      en: 'A two-wheeled robot with a wooden chassis, built on an Arduino Nano with a motor driver and an ultrasonic distance sensor, the basis of sensing and control. ',//TODO: describe what it actually does (avoid obstacles? stop? turn?).',
    },
    tech: ['Arduino Nano', 'Ultrasonic sensor'],
  },
   {
    id: '04', // أو الرقم التسلسلي المناسب لديك
    kind: 'code',
    featured: true,
    url: 'https://github.com/nuha-salih/Solar-Storm-prediction',
    title: { ar: 'التنبؤ بالعواصف الشمسية', en: 'Solar Storm Prediction' },
    description: {
      ar: 'نموذج ذكاء اصطناعي يحلل بيانات النشاط الشمسي للتنبؤ بالعواصف الخطيرة مبكرًا، بهدف حماية الأقمار الصناعية وشبكات الاتصالات الأرضية من تأثيرات الطقس الفضائي العنيف.',
      en: 'An AI model that analyzes solar activity data to forecast hazardous storms in advance, aiming to protect satellites and global communication grids from severe space weather.',
    },
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
  },

  
   
  {
    id: '05',
    kind: 'code',
    featured: true,
    url: 'https://x.com/Najran_Univers/status/2018747185290973204',
    title: { 
      ar: 'نظام وسم للحضور التلقائي', 
      en: 'Wsm Automated Attendance System' 
    },
    description: {
      ar: 'نظام ذكي موجه للفصول الدراسية يعتمد على متحكمات ESP32 وإشارات البلوتوث للتحقق من الحضور وتوثيقه تلقائياً، وهو المشروع الفائز بالمركز الأول في مسار إنيوثون جامعة نجران التقني والهندسي.',
      en: 'An intelligent classroom attendance system built on ESP32 microcontrollers and Bluetooth signals to automatically verify and log attendance, winner of 1st place in the Najran University Hackathon (Technical & Engineering Track).',
    },
    tech: ['ESP32', 'BLE', 'IoT', 'Arduino'],
  },

]
