import V2Site from "../../components/v2-site";
import "./v2.css";

export const metadata = {
  title: "Website V2 Preview",
  description: "The AI Product Manager — better decisions, better products and better commercial outcomes.",
  robots: { index: false, follow: false },
};

export default function V2Preview() {
  return <V2Site />;
}
