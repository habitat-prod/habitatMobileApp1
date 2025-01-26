import { useQuery } from "@tanstack/react-query";

    // Custom Hook for Fetching Tasks
    export const useTaskQuery = ({ key, fetchFn, params, enabled, refetch }) => {
      return useQuery({
        queryKey: [key, ...Object.values(params)],
        queryFn: () => fetchFn(params),
        enabled,
        retry: 2, // Optional: Retry failed queries up to 2 times
        refetch
      });
    };