"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DoctorDetail({ params }) {
  const { id } = params;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    async function fetchDoctor() {
      const res = await fetch(`/api/doctors/${id}`);
      if (res.ok) {
        const data = await res.json();
        setDoctor(data);
      } else {
        setDoctor(null);
      }
    }
    fetchDoctor();
  }, [id]);

  if (!doctor) return <p>Loading or doctor not found...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{doctor.name}</h1>
      <p>
        <strong>Category:</strong> {doctor.category}
      </p>
      <p>
        <strong>Bio:</strong> {doctor.bio}
      </p>
    </div>
  );
}
