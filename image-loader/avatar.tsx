"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

type AvatarStatus = "idle" | "loading" | "loaded" | "error";

type AvatarContextValue = {
  status: AvatarStatus;
  setStatus: React.Dispatch<React.SetStateAction<AvatarStatus>>;
};

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

function useAvatarContext() {
  const context = React.useContext(AvatarContext);

  if (!context) {
    throw new Error("Avatar components must be inside <Avatar>");
  }

  return context;
}

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [status, setStatus] = React.useState<AvatarStatus>("idle");

  return (
    <AvatarContext.Provider value={{ status, setStatus }}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className,
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
});

Avatar.displayName = "Avatar";

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img"> & {
    isLoadingSrc: boolean;
  }
>(({ src, className, ...props }, ref) => {
  const { status, setStatus } = useAvatarContext();

  React.useEffect(() => {
    if (props.isLoadingSrc) return;
    if (!src) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    const image = new Image();

    image.onload = () => setStatus("loaded");

    image.onerror = () => setStatus("error");

    image.src = src;
  }, [src, setStatus, props.isLoadingSrc]);

  if (status !== "loaded") return null;

  return (
    <img
      ref={ref}
      src={src}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
});

AvatarImage.displayName = "AvatarImage";

export const AvatarLoader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { status } = useAvatarContext();

  if (status !== "loading") return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AvatarLoader.displayName = "AvatarLoader";

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { status } = useAvatarContext();

  if (status !== "error") return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AvatarFallback.displayName = "AvatarFallback";

export const AvatarSrcLoader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { status } = useAvatarContext();

  if (status !== "idle") return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AvatarSrcLoader.displayName = "AvatarSrcLoader";

// ======sample usage===========
// <Avatar className="h-16 w-16 flex-shrink-0 border border-card-border md:h-20 md:w-20">
//             <AvatarImage
//               isLoadingSrc={isLoading}
//               src={organization?.logoUrl ?? ""}
//               alt={organization.name}
//             />
//             <AvatarFallback className="animate-pulse text-gray-400">
//               {organization.name?.charAt(0) || "S"}
//             </AvatarFallback>
//             <AvatarLoader>
//               <div className="h-full w-full animate-pulse bg-[#fafafa]"></div>
//             </AvatarLoader>
//             <AvatarSrcLoader>
//               <div className="h-full w-full animate-pulse bg-[#fafafa]"></div>
//             </AvatarSrcLoader>
//           </Avatar>
