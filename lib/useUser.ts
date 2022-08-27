import Router from "next/router";
import { LoggedInUser } from "pages/api/user";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<LoggedInUser>("/api/user");

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      (redirectTo && !user?.isLoggedIn && !redirectIfFound) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectTo, redirectIfFound]);

  return { user, mutateUser };
}
