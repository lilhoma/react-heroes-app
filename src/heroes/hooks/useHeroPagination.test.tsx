import type { PropsWithChildren } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useHeroPagination } from "./useHeroPagination";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";
import { beforeEach } from "node:test";

vi.mock("../actions/get-heroes-by-page.action", () => ({
  getHeroesByPageAction: vi.fn(),
}));

const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const tanStackCustomProvider = () => {
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useHeroPagination", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });
  test("should return the initial state (isLoading)", () => {
    const { result } = renderHook(() => useHeroPagination(1, 6), {
      wrapper: tanStackCustomProvider(),
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  test("should return success state with data when API call succeeds", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => useHeroPagination(1, 6), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.status).toBe("success");
    expect(mockGetHeroesByPageAction).toHaveBeenCalled();
    expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, "all");
  });

  test("should call getHeroesByPageActionWithArguments", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => useHeroPagination(1, 6, "heroes"), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.status).toBe("success");
    expect(mockGetHeroesByPageAction).toHaveBeenCalled();
    expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, "heroes");
  });
});
