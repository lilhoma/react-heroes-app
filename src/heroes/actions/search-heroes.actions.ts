import { heroAPI } from "../api/hero.api";
import type { Hero } from "../interfaces/hero.interface";

interface Options {
    name?: string;
    team?: string;
    category?: string
    universe?: string
    status?: string
    strength?: string
}
const BASE_URL = import.meta.env.VITE_API_URL



export const searchHeroesAction = async (options: Options = {}) => {
    const { name, team, category, universe, status, strength } = options;

    if (!name && !team && !category && !universe && !status && !strength) {
        return [];
    }

    const { data } = await heroAPI.get<Hero[]>('/search', {
        params: {
            name, team, category, universe, status, strength
        }
    });

    const heroesWithImage = data.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))

    return heroesWithImage

}