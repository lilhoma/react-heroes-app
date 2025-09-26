import { describe, test, expect } from "vitest"
import { heroAPI } from "./hero.api"

const BASE_URL = import.meta.env.VITE_API_URL;

describe('HeroAPI', () => {
    test('should be configured pointing to the testing server', () => {

        expect(heroAPI).toBeDefined();

        expect(heroAPI.defaults.baseURL).toBe(`${BASE_URL}/api/heroes`);

        expect(BASE_URL).toContain('3001')
    })
})