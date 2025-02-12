import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us page",
    description: "About us description",
  };

export default function About() {
    return <div>Some text about us</div>
}