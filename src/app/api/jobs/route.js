// Using a simple mock data approach here
const mockJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'New York',
      type: 'Full-time',
      description: 'Develop user-friendly web interfaces.'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Part-time',
      description: 'Build robust backend services.'
    },
    // Add more job objects as needed
  ];
  
  export async function GET() {
    try {
      // In a real scenario, you might fetch from an external API here
      // const res = await fetch('https://api.example.com/jobs');
      // const data = await res.json();
  
      return new Response(JSON.stringify(mockJobs), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      // Return error response with a friendly message
      return new Response(JSON.stringify({ error: 'Failed to fetch jobs' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  