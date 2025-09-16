import { heroAPI } from "../api/hero.api";
import type { Hero } from "../interfaces/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (slug: string) => {
    const { data } = await heroAPI.get<Hero>(`/${slug}`);
    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    }
}