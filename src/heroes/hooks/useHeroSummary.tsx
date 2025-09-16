import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutes --- 1 sec * 60 * 5
  });
};
