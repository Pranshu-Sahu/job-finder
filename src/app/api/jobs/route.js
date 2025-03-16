// app/api/jobs/route.js
import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET(request) {
  // Build a realistic job description using a template
  const description = faker.helpers.fake(
    "Join our team as a {{person.jobTitle}} at {{company.name}}. You will be responsible for overseeing projects, collaborating with cross-functional teams, and driving innovation. Candidates should have at least {{number.int({ min: 1, max: 10 })}} years of experience and a passion for excellence."
  );

  const jobs = Array.from({ length: 10 }, () => ({
    _id: faker.string.uuid(), // updated for v9+
    title: faker.person.jobTitle(), // use faker.person instead of deprecated faker.name
    company: faker.company.name(),
    location: faker.location.city(), // use faker.location instead of faker.address
    // Optionally simulate a job type
    jobType: faker.helpers.arrayElement(['Full-time', 'Part-time', 'Contract', 'Internship']),
    // Generate a salary between $50,000 and $150,000 (no decimals)
    salary: faker.finance.amount({ min: 50000, max: 150000, dec: 0, symbol: '$' }),
    description,
  }));

  return NextResponse.json(jobs);
}
