"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const sortedOption = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low ",
  "Newest Arrivals",
] as const

export default function SortedBy() {
  return (
    <Combobox items={sortedOption}>
      <ComboboxInput placeholder="sort by: Featured" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
