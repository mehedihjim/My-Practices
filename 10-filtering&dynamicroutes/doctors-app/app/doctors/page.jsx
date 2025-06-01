"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [filter, setFilter] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch("/api/doctors");
      const data = await res.json();
      setDoctors(data);
      setCategories(["all", ...new Set(data.map((doc) => doc.category))]);
    }
    fetchDoctors();
  }, []);

  const filteredDoctors =
    filter === "all"
      ? doctors
      : doctors.filter((doc) => doc.category === filter);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Doctors Directory</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <ul>
        {filteredDoctors.map((doc) => (
          <li key={doc.id}>
            <Link href={`/doctors/${doc.id}`}>{doc.name}</Link> - {doc.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
