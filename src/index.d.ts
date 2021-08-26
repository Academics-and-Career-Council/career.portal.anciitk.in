interface News {
  title: String
  date: String
}

interface Job {
  id: String
  companyName: String
  openingName: String
  deadline: String
  stipend: String
  location: String
  description: String
  eligiblity: String
  status: 'Waiting' | 'Not Applied' | 'Accepted'
}

interface Application {
  id: String
  name: String
  designation: String
  resume: String
  status: 'Waiting' | 'Rejected' | 'Accepted'
}