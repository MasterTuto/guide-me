import graphTheory from "../../assets/img/png/graph-theory.png";

const bookReferences: BookReference[] = [
  {
    id: "1",
    author: "Curso em Vídeo",
    city: "São Paulo",
    title: "Media Queries para outros dispositivos",
    downloadLink: "https://www.youtube.com/watch?v=T1rfhkmcH00",
    edition: "1ª Edição",
    publisher: "Curso em Vídeo",
    year: "2020",
  },
  {
    id: "2",
    author: "Curso em Vídeo",
    city: "São Paulo",
    title: "Media Queries para outros dispositivos",
    downloadLink: "https://www.youtube.com/watch?v=T1rfhkmcH00",
    edition: "1ª Edição",
    publisher: "Curso em Vídeo",
    year: "2020",
  },
  {
    id: "3",
    author: "Curso em Vídeo",
    city: "São Paulo",
    title: "Media Queries para outros dispositivos",
    downloadLink: "https://www.youtube.com/watch?v=T1rfhkmcH00",
    edition: "1ª Edição",
    publisher: "Curso em Vídeo",
    year: "2020",
  },
];

export const SEMESTERS: Record<string, Semester> = {
  I: {
    id: "I",
    name: "1º Semestre",
    icon: "",
    subjects: [
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
      {
        id: "graph-theory",
        name: "Teoria dos Grafos",
        icon: graphTheory,
        bookReferences,
        description:
          "A teoria dos grafos ou de grafos é um ramo da matemática que estuda as relações entre os objetos de um determinado conjunto.",
        textResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        videoResources: [
          {
            id: "1",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "2",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "3",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "4",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
          {
            id: "5",
            author: "Curso em Vídeo",
            title:
              "Media Queries para outros dispositivos - @Curso em Vídeo HTML5 e CSS3",
            link: "https://www.youtube.com/watch?v=T1rfhkmcH00",
            thumbnail: "https://i3.ytimg.com/vi/T1rfhkmcH00/maxresdefault.jpg",
            duration: 15 * 60 + 1,
            relevance: 0.67,
            description:
              "Gustavo Guanabara ensina Media Queries para os estudantes",
            keywords: [],
            platform: {
              id: "yt",
              baseUrl: "https://youtube.com",
              name: "YouTube",
            },
          },
        ],
        workload: 10,
        semesterId: "",
      },
    ],
  },
};
