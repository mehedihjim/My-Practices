export async function GET() {
  const doctors = [
    {
      id: "1",
      name: "Dr. Smith",
      category: "Cardiology",
      bio: "Heart specialist",
    },
    {
      id: "2",
      name: "Dr. Alice",
      category: "Dentistry",
      bio: "Dental care expert",
    },
    {
      id: "3",
      name: "Dr. Bob",
      category: "Pediatrics",
      bio: "Child specialist",
    },
  ];

  return new Response(JSON.stringify(doctors), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
