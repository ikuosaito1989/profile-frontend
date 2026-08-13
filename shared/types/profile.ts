export interface Portfolio {
  id: number
  name: string
  thumbnailUrl: string
  description: string
  portfolioUrl: string
  skills: string[]
}

export interface Skill {
  id: number
  name: string
  star: number
}

export interface Fontawesome {
  name: string
  prefix: string
  iconName: string
}

export interface Social {
  id: number
  name: string
  url: string
  fontawesome: Fontawesome
}

export interface EnrollmentPeriod {
  from: string
  to: string | null
}

export interface Deliverable {
  name: string
  url: string
}

export interface Resume {
  id: number
  company: string
  enrollmentPeriod: EnrollmentPeriod
  jobDescription: string
  deliverables: Deliverable[] | null
}
