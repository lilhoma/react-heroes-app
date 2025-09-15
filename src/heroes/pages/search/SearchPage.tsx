import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
