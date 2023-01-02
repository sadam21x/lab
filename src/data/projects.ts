import images from '@/assets/images'

const projects = [
  {
    title: 'Sadam LAB',
    type: 'WEB',
    featured: false,
    thumbnail: images.illustrations.nextjs,
    org: 'Sadam',
    technologies: [
      {
        name: 'Next.js',
        logo: images.logos.nextjs,
      },
      {
        name: 'Tailwind',
        logo: images.logos.tailwind,
      },
      {
        name: 'SCSS',
        logo: images.logos.sass,
      },
    ],
    description:
      'Yes, this is where we are right now :D I will continue to develop this project, adding new awesome features in the near future, stay tuned!',
  },
  {
    title: 'LayanObat Mitra API',
    type: 'API',
    featured: true,
    thumbnail: images.illustrations.pharmacy,
    org: 'PT Wiraharja Graha Software',
    technologies: [
      {
        name: 'Go',
        logo: images.logos.golang,
      },
      {
        name: 'MySQL',
        logo: images.logos.mysql,
      },
    ],
    description:
      'An application programming interface (API) for pharmacy management applications. Some key features include stock management, orders, sales, and reporting.',
  },
  {
    title: 'Airlangga Tracer Study System',
    type: 'Web',
    featured: true,
    thumbnail: images.illustrations.report,
    org: 'Universitas Airlangga',
    technologies: [
      {
        name: 'Vue',
        logo: images.logos.vue,
      },
      {
        name: 'Laravel',
        logo: images.logos.laravel,
      },
      {
        name: 'PostgreSQL',
        logo: images.logos.postgresql,
      },
    ],
    description:
      'A web-based application to collect data on alumni careers after college through online surveys. Some key features include survey creation, email blaster, and reporting.',
  },
  {
    title: 'Career Counseling App',
    type: 'Web',
    featured: true,
    thumbnail: images.illustrations.socialMedia,
    org: 'Universitas Airlangga',
    technologies: [
      {
        name: 'Vue',
        logo: images.logos.vue,
      },
      {
        name: 'Laravel',
        logo: images.logos.laravel,
      },
      {
        name: 'MySQL',
        logo: images.logos.mysql,
      },
    ],
    description:
      'A web-based chat application to help students and alumni find their career paths by chatting with counselors provided by the university. Some key features include counseling scheduling, invitation email, and chat room.',
  },
  {
    title: 'E-Sertifikat Fakultas Vokasi',
    type: 'Web',
    featured: true,
    thumbnail: images.illustrations.certificate,
    org: 'Faculty of Vocational Studies, Universitas Airlangga',
    technologies: [
      {
        name: 'Laravel',
        logo: images.logos.laravel,
      },
      {
        name: 'MySQL',
        logo: images.logos.mysql,
      },
    ],
    description:
      'A web-based application used by the Faculty to create, manage and distribute e-certificates to students.',
  },
]

export default projects
