import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSucces: ({ success }) => {
      if (success) {
        // user is sync to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });
};
