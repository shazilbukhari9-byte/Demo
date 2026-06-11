import { cn } from "@/lib/utils";

/**
 * Modern Glassmorphism Timeline
 * - Vertical timeline with glowing nodes
 * - Glassy cards for content
 * - Dark/Light theme support
 */
export const Component = () => {
  const events = [
    {
      // year: "2021",
      title: "Incoming Call Registerd",
      // description: "The project started with a small passionate team.",
    },
    {
      // year: "2022",
      title: "Lead Created in Zoho CRM",
      // description: "Released our first public version with core features.",
    },
    {
      // year: "2023",
      title: "Invoice Sent Over Whatsapp",
      // description: "Scaled to thousands of users in over 40 countries.",
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto py-12 px-4">
      {/* Vertical line */}
      <div
        className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-orange-400/60 to-orange-500/60 dark:from-white-500/40 dark:to-white-600/40" />
      <div className="space-y-12">
        {events.map((event, idx) => (
          <div key={idx} className="relative flex gap-6 items-start animate-fade-in">
            {/* Timeline node */}
            <div className="relative z-10">
              <div
                className={cn(
                  "h-4 w-4 rounded-full border-2 border-white dark:border-neutral-800",
                  "bg-gradient-to-r from-orange-400 to-pink-100",
                  "shadow-[0_0_12px_rgba(59,130,246,0.6)]",
                  "transition-transform duration-200 hover:scale-110"
                )} />
            </div>

            {/* Content Card */}
            <div
              className={cn(
                "flex-1 rounded-lg p-4 backdrop-blur-xl",
                "bg-white/70 dark:bg-neutral-900/70",
                "border border-gray-200/50 dark:border-white/10",
                "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
                "hover:shadow-[0_10px_36px_rgba(0,0,0,0.15)] transition-all duration-300"
              )}>
              <span
                className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {event.year}
              </span>
              <h3 className="mt-1 text-lg font-semibold bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};