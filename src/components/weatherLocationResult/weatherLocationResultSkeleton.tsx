import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function Bone({ className }: { className?: string }) {
  return <Skeleton className={cn("bg-weather-ink/10", className)} />;
}

export function WeatherLocationResultSkeleton() {
  return (
    <>
      <main
        id="main"
        className="mt-[42px] flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[clamp(40px,5vw,366px)]"
      >
        <div className="order-2 w-full lg:order-none lg:w-[482px] lg:max-w-full lg:flex-[0_1_482px]">
          <section className="pt-[0px] pb-[38px] lg:pt-[45px]">
            <Bone className="h-[25px] w-3/4 lg:h-[32px]" />
            <Bone className="mt-[7px] h-3 w-32" />
            <Bone className="mt-1.5 h-[52px] w-24" />

            <div className="mt-[22px] mb-[26px] h-px w-4/5 bg-weather-hairline" />

            <div className="flex justify-between">
              <div className="space-y-2">
                <Bone className="h-[19px] w-32" />
                <Bone className="h-3 w-24" />
              </div>
              <div className="space-y-2">
                <Bone className="h-[19px] w-10" />
                <Bone className="h-3 w-16" />
              </div>
            </div>
          </section>

          <section>
            <Bone className="h-4 w-48" />
            <div className="mt-[18px] grid grid-cols-2 gap-x-[19px]">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[15px] border-b border-weather-hairline py-[15px]"
                >
                  <Bone className="size-4 shrink-0 rounded-full" />
                  <Bone className="h-3 flex-1" />
                  <Bone className="h-3 w-8" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="hidden contents lg:flex lg:w-full lg:flex-col lg:flex-[0_1_394px]">
          <div className="order-1 mx-0 mb-2 max-w-[300px] lg:order-none lg:mt-[5px] lg:mr-[-70px] lg:mb-0 lg:ml-[-110px] lg:max-w-none">
            <Bone className="aspect-[620/470] w-full rounded-full" />
          </div>
        </div>
      </main>

      <div className="mt-15">
        <Card className="bg-card/10">
          <CardHeader>
            <Bone className="h-5 w-40" />
            <Bone className="mt-1 h-3 w-32" />
          </CardHeader>
          <CardContent>
            <Bone className="h-[200px] w-full sm:h-[250px] lg:h-[300px]" />
          </CardContent>
        </Card>
      </div>

      <div className="mt-15">
        <Card className="bg-card/10">
          <CardHeader>
            <Bone className="h-5 w-32" />
            <Bone className="mt-1 h-3 w-24" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4">
                <Bone className="h-4 w-9 sm:w-12" />
                <Bone className="size-7 shrink-0 rounded-full sm:size-8" />
                <Bone className="h-4 w-6" />
                <Bone className="h-1.5 min-w-0 flex-1 rounded-full" />
                <Bone className="h-4 w-6" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
