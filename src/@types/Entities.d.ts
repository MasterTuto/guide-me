type Semester = {
  id: string;
  name: string;
  icon: string;
  subjects: Subject[];
};

type Subject = {
  id: string;
  semesterId?: string;
  name: string;
  icon: string;
  description: string;
  workload: number;
  bookReferences: BookReference[];
  videoResources: Resource[];
  textResources: Resource[];
};

type BookReference = {
  id: string;
  author?: string;
  title?: string;
  edition?: string;
  year?: string;
  isbn?: string;
  city?: string;
  publisher?: string;
  downloadLink?: string;
};

type Resource = {
  id: string;
  author: string;
  title: string;
  thumbnail?: string;
  description?: string;
  link: string;
  relevance: number;
  keywords: string[];
  platform?: HostPlatform;
  duration?: number;
};

type HostPlatform = {
  id: string;
  name: string;
  baseUrl: string;
};

type SearchResult = {
  count: number;
  items: (Resource & { subject: Subject; semester: Semester })[];
};
