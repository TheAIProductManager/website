import V2MultiPage from "../../../components/v2-multipage";
import "../v2.css";
export const dynamicParams = false;
export const generateStaticParams = () => ["product-thesis","engagements","method","experience","beyond-engagements","contact"].map(slug=>({slug}));
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const titles:Record<string,string>={"product-thesis":"The Product Thesis","engagements":"Engagements","method":"The Method","experience":"Selected Experience","beyond-engagements":"Beyond Engagements","contact":"The Next Decision"}; return {title:(titles[slug]||"The AI Product Manager")+" | The AI Product Manager",robots:{index:false,follow:false}}; }
export default async function V2Subpage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; return <V2MultiPage slug={slug}/>; }
