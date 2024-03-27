export type tech = {
  _id: string;
  name: string;
  favorite: boolean;
};

export type resume = {
  _id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  skills: string[];
  workExperience: {
    title: string;
    company: string;
    location: string;
    dates: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    school: string;
    location: string;
    year: number;
  };
  certifications: string[];
};

export type apiEndpoints =
  | "infos"
  | "location"
  | "summary"
  | "skills"
  | "experience"
  | "education"
  | "certifications";
