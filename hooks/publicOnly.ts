import { useRouter } from "next/router";
import { LoggedInUser } from "pages/api/user";
import { useEffect } from "react";

export default function publicOnly(user?: LoggedInUser) {
  const router = useRouter();
  useEffect(() => {
    if (user?.isLoggedIn) {
      console.log(user?.isLoggedIn);
      router.push("/");
      return;
    }
  });
}
