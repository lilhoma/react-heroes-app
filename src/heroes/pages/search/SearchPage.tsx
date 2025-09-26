import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.actions";
import { useSearchParams } from "react-router";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Search SuperHero Database"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      <CustomBreadcrumbs
        currentPage="Search Heroes"
        // breadcrumbs={[{ label: "Home", to: "/" }]}
      />

      <HeroStats />

      {/* Search and filters */}
      <SearchControls />

      {/* Grid */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
