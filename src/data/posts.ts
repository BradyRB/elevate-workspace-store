export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "art-of-minimalist-setup",
    title: "The Art of the Minimalist Setup",
    excerpt: "Clutter is a cognitive tax. We examine how reducing your physical environment to its essential components can unlock unprecedented levels of deep work and mental clarity.",
    date: "Nov 02, 2025",
    category: "Inspiration",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDc2SBFlMRgCYMbYbzjWod-V4XuqITcgJLUsnbHF6WyM3BMwtUMmRiL0XllXI2Obec_odk3ayuWN9czhxbivWeNrMTf7bNYn0sCHD322QvqbqaqWoowm2a22p1BDjebNF7F9JMagVNpngXI2O0ya-ooOXn7LsukyDjkjtBVM9S9LYq_gyJcd4kE7zQrBXvyJz14y8QKj1zpI-L0y-St-y1gDlXvyW9kdweH3DFMXD6sioKsOlPrJfhbus9RuseJHyNriDWv8hfS-Ve",
    featured: true
  },
  {
    id: "post-2",
    slug: "why-mechanical-keyboards-matter",
    title: "Why Mechanical Keyboards Matter",
    excerpt: "The tactile feedback of a well-engineered switch is more than just a preference; it's a connection to your tools.",
    date: "Oct 24, 2025",
    category: "Craft",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApNnYoCdg9U7K2etMdHFBOLAATpddRVdlfxEYERg5HI1KxpspPHQ0ZSBbdTCQenk1q7qlrgHm0ZqGUJSB2BCNoa8BFyjTPyYm2YNbq3YUQlydPaKx18r6119AGhZJ9iARW5W5svew5c7BSWqDybc5snRe1TE9sLryLQCWSkO7PGJxLz5urYg-qiFdgHYUejwdhJncQOflh9-wH1ju7oq1w-ob1hHWaG0WGT9PLxCuBo_SVl-VYAvZuG6h2OwbBOr3XsFab94q4iFFb"
  },
  {
    id: "post-3",
    slug: "optimizing-home-office-lighting",
    title: "Optimizing Your Home Office Lighting",
    excerpt: "How color temperature and light placement impact circadian rhythms and long-term focus during deep work sessions.",
    date: "Oct 18, 2025",
    category: "Utility",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3s-Wc2416xsIdg96lcL08kBCJnZRV_yL5b9VyC5h2TpYicMO6hmzKsrja-GsrMviiWXLniyxsjET7tukV4oOjm833MQ4SyI0Qt9En4dqClAEIDjRxRh_n6_2vcm1czNiIzx3NnWG1EjXfoEG5CKFuWsUJJPwrHgzzE1OIf7J4g7fQzGurpAnhx6ApIeX07OXqCWVHhhlPxVrd2IqlZr4iLKUUMxrd-_kk2WRgOvOoWLYWmcX_FnNxxS2t1SB3tIayWV6SOc-47YsB"
  },
  {
    id: "post-4",
    slug: "sustainability-of-premium-materials",
    title: "The Sustainability of Premium Materials",
    excerpt: "Exploring why longevity is the ultimate form of sustainability in professional product design and material sourcing.",
    date: "Oct 12, 2025",
    category: "Ethics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjvQ2SuD5ETaO4fBxklU5pP0w7SZ9vDJt_7GQJ_BjR7dlG57Ws9iVp-98nSPpxVXR-KIlhFuwzAuRl5AMbc8pgI7qNfbbabNJiLuKEg2-I7-0zHzkdSoG5SFwnjAAOqkH1P2lPg2bF8oj2XpCVzfI8o_GwYQmIrwtkqhT-iPhDOx393ognFFfXVNZemeZT0dF0_cUzOh8fyzdSsRve1t9AO0yS6sUeM9WPu7jfzTtKLphkafbnzbmQIThQzhV7ps_qksOo5fSvGKiD"
  }
];
