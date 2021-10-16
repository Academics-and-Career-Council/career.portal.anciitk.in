interface News {
  title: String;
  date: String;
}

interface Job {
  readonly id: string;
  readonly name: string;
  readonly stipend: string;
  readonly designation: string;
  readonly status: string;
}

interface JobDetails {
  readonly id: string;
  readonly name: string;
  readonly stipend: string;
  readonly designation: string;
  readonly jd: string;
  readonly nature_of_business: string;
  readonly location: string;
  readonly description: string;
  readonly eligibilty: string;
  readonly shortlist: string;
  readonly test: string;
}

interface Application {
  readonly id: string;
  readonly student: {
    readonly name: string;
    readonly rollno: number;
    readonly branch: string;
  };
  readonly job: {
    readonly name: string;
    readonly designation: string;
  };
  readonly status: string;
  readonly resume: string;
}
