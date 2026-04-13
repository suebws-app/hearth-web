/**
 * Flatten nested locale JSON to dot-separated keys (e.g. landing.hero.badge).
 */
export function flattenMessages(
  obj: Record<string, unknown>,
  prefix = "",
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(
        result,
        flattenMessages(value as Record<string, unknown>, fullKey),
      );
    } else if (typeof value === "string") {
      result[fullKey] = value;
    }
  }
  return result;
}
