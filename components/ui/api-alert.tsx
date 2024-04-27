"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Server } from "lucide-react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { useOrigin } from "@/hooks/use-origin";
interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public API",
  admin: "Admin API",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const origin = useOrigin();
  const baseUrl = `${origin}`;
  const onCopy = () => {
    navigator.clipboard.writeText(baseUrl + description);
    toast.success("API Route copied to clipboard");
  };

  return (
    <Alert className="flex items-center gap-2 p-2">
      {/* <Server className="h-4 w-4" /> */}
      <AlertTitle className="">{title}</AlertTitle>
      <AlertDescription className="flex w-full items-center justify-between gap-2">
        <code className="relative rounded bg-muted px-1 py-1 font-mono text-sm font-semibold">
          <span className="hidden md:inline-block">{baseUrl}</span>
          {description}
        </code>
        <Button
          variant="outline"
          className="flex-none"
          size="icon"
          onClick={onCopy}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
