interface News {
  title: String
  date: String
}

interface Job {
  companyName: String
  openingName: String
  deadline: String
  status: 'Waiting' | 'Not Applied' | 'Accepted'
}

interface Application {
  name: String
  designation: String
  resume: String
  status: 'Waiting' | 'Rejected' | 'Accepted'
}