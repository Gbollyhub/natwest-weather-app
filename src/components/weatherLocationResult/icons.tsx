import {
  Droplet,
  Droplets,
  Eye,
  Gauge,
  MoonStar,
  Sun,
  Thermometer,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { MetricGlyphName } from "./types";

const METRIC_ICON: Record<MetricGlyphName, LucideIcon> = {
  highLow: Thermometer,
  wind: Wind,
  humidity: Droplets,
  dewPoint: Droplet,
  pressure: Gauge,
  uvIndex: Sun,
  visibility: Eye,
  moonPhase: MoonStar,
};

export function MetricGlyph({ name }: { name: MetricGlyphName }) {
  const Icon = METRIC_ICON[name];
  return <Icon className="size-4" aria-hidden="true" />;
}