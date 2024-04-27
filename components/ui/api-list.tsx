"use client";

import { useOrigin } from "@/hooks/use-origin";

import { ApiAlert } from "@/components/ui/api-alert";

export const ApiList: React.FC = () => {
  const origin = useOrigin();

  const baseUrl = `/api/resume`;

  return (
    <div className="space-y-2">
      <ApiAlert title="GET" variant="public" description={`${baseUrl}`} />
      <ApiAlert title="GET" variant="public" description={`${baseUrl}/about`} />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/skills`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/work-experience`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/education`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/interests`}
      />
    </div>
  );
};
