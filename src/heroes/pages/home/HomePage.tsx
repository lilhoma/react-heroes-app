import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="SuperHero Database"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumbs currentPage="SuperHeroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Favorite Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Heroes Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Villains  Character Grid */}
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
