// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by Xiaoxiong Zuo (左肖雄) on deep learning, foundation models, and time-domain astronomy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-participated-in-the-brics-astronomy-working-group-hackathon-as-a-graduate-student-representative-from-nadc-read-report",
          title: 'Participated in the BRICS Astronomy Working Group Hackathon as a graduate student representative...',
          description: "",
          section: "News",},{id: "news-successfully-concluded-the-first-session-of-the-nadc-fundamentals-of-astroinformatics-course-read-report",
          title: 'Successfully concluded the first session of the NADC “Fundamentals of Astroinformatics” course. Read...',
          description: "",
          section: "News",},{id: "news-i-attended-the-34th-adass-conference-and-ivoa-interoperability-meeting-in-malta-i-delivered-an-oral-presentation-titled-transforming-data-into-insights-ai-driven-x-ray-source-classification-within-the-nadc-framework-see-coverage",
          title: 'I attended the 34th ADASS Conference and IVOA Interoperability Meeting in Malta. I...',
          description: "",
          section: "News",},{id: "news-new-sci-comm-contribution-my-popular-science-article-has-been-officially-published-in-the-三体-anthology-do-not-answer-red-coast-不要回答-红案-published-by-citic-press-read-report",
          title: 'New Sci-Comm contribution! My popular science article has been officially published in the...',
          description: "",
          section: "News",},{id: "news-new-publication-our-work-on-falco-foundation-model-of-astronomical-light-curves-has-been-officially-published-and-reported-by-nadc-read-the-full-report",
          title: 'New publication! Our work on FALCO: Foundation Model of Astronomical Light Curves has...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%75%6F%78%78@%62%61%6F.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BF4B6VkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
