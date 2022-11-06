interface News {
  title: String;
  date: String;
}

interface Job {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly stipend: string;
  readonly designation: string;
  readonly status: string;
  readonly deadline: string;
  readonly application_process: string;
}

interface JobDetails {
  readonly id: string;
  readonly name: string;
  readonly stipend: string;
  readonly stipend: string;
  readonly deadline: string;
  readonly jd: string;
  readonly nature_of_business: string;
  readonly designation: string;
  readonly location: string;
  readonly description: string;
  readonly eligibility: string;
  readonly shortlist: string;
  readonly test: string;
  readonly status: string;
  readonly application_process: string;
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
    readonly type: string;
  };
  readonly status: string;
  readonly resume: string;
}
