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