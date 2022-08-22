import fetcher from "@/lib/fetch";
import useSWR from "swr";

export function useCurrentUser() {
  const { data, mutate } = useSWR("/api/user", fetcher);
  const user = data?.user;
  return [user, { mutate }];
}
