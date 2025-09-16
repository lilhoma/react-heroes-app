import { useParams } from "react-router";

const HeroPage = () => {
  const { slug } = useParams();

  console.log(slug);
  return <h1>Hero page</h1>;
};

export default HeroPage;
