"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useEffect, useState } from "react"

const sortedOption = [
  "featured",
  "price: low to high",
  "price: high to low",
  "newest arrivals",

] as const

export default function SortedBy({
  handleSorted
}: {
  handleSorted: (value: string) => void
}) {

  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (selected) {
      handleSorted(selected)
    }
  }, [selected])

  return (
    <Combobox
      items={sortedOption}
      value={selected}
      onValueChange={setSelected}

    >
      <ComboboxInput placeholder="sort by: Featured" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              <p className="capitalize">
                {item}
              </p>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
