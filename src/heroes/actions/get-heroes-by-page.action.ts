import { heroAPI } from "../api/hero.api"

export const getHeroesByPageAction = async () => {
    const { data } = await heroAPI.get('/');
    console.log(data)
    return data;
}