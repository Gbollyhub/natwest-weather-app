import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { cn } from "@/lib/utils";

const Combobox = ComboboxPrimitive.Root;
const ComboboxLabel = ComboboxPrimitive.Label;

function ComboboxInputGroup({ className, ...props }: ComboboxPrimitive.InputGroup.Props) {
  return (
    <ComboboxPrimitive.InputGroup
      data-slot="combobox-input-group"
      className={cn(
        "flex w-full items-center gap-2.5 rounded-md border border-transparent bg-white/70 px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[18px] transition-colors focus-within:border-weather-amber/50",
        className
      )}
      {...props}
    />
  );
}

function ComboboxInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "w-full bg-transparent text-[15px] text-weather-ink outline-none placeholder:text-weather-muted",
        className
      )}
      {...props}
    />
  );
}

function ComboboxPopup({
  className,
  children,
  sideOffset = 8,
  ...props
}: ComboboxPrimitive.Popup.Props & Pick<ComboboxPrimitive.Positioner.Props, "sideOffset" | "align">) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner sideOffset={sideOffset} className="outline-none">
        <ComboboxPrimitive.Popup
          data-slot="combobox-popup"
          className={cn(
            "z-50 max-h-64 w-[var(--anchor-width)] overflow-auto rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg outline-none transition-[opacity,transform] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn("px-3 py-6 text-center text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return <ComboboxPrimitive.List data-slot="combobox-list" className={cn("flex flex-col gap-0.5", className)} {...props} />;
}

function ComboboxItem({ className, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "flex cursor-default items-center justify-between rounded-lg px-3 py-2 text-sm outline-none data-[highlighted]:bg-muted data-[selected]:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Combobox, ComboboxEmpty, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxPopup };
