const MODIFIER_TO_VALUE_DICT = {
  // delay
  d1: "delay-1s",
  d2: "delay-2s",
  d3: "delay-3s",
  d4: "delay-4s",
  d5: "delay-5s",
  // speed
  slow: "slow",
  slower: "slower",
  fast: "fast",
  faster: "faster",
  // times
  infinite: "infinite"
} as const;

export type ModifierKeys = keyof typeof MODIFIER_TO_VALUE_DICT;

export type Modifiers = { [key in ModifierKeys]: true };

export function getModifierValue(key: string): string {
  return MODIFIER_TO_VALUE_DICT[(key as unknown) as ModifierKeys] ?? key;
}
