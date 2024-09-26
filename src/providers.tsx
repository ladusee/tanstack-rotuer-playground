import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { toast, Toaster } from "sonner";

type Meta = Record<string, unknown> & {
  errorMessage?: string;
  successMessage?: string;
  onError?: () => void;
  onSuccess?: () => void;
};

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: Meta;
    mutationMeta: Meta;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error(error, query);

      if (query?.meta?.errorMessage) {
        toast.error(query?.meta?.errorMessage);
      }

      if (query?.meta?.onError) {
        query.meta.onError();
      }
    },
    onSuccess: (_, query) => {
      // console.log(data, query);

      if (query?.meta?.successMessage) {
        toast.success(query?.meta?.successMessage);
      }

      if (query?.meta?.onSuccess) {
        query.meta.onSuccess();
      }
    },
  }),
});

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        className="sonner"
        closeButton={true}
        toastOptions={{
          classNames: {
            toast: "text-lg",
            closeButton: "bg-zinc-50",
          },
        }}
      />

      {children}
    </QueryClientProvider>
  );
};
