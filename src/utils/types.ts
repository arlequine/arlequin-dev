export interface BlogPost {
  id: string
  title: string
  content: string
  image?: {
    url: string;
  }
  slug: string
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export interface TimelineProps {
  experiences: Experience[];
}

export interface Course {
  title: string;
  description: string;
  image: string;
}

export interface CoursesProps {
  courses: Course[];
}