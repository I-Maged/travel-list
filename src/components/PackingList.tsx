import Item from "./Item"
import { useState, type FC } from "react"
import { type itemProps } from "../App"

type itemsArrayProps = {
  items: itemProps[]
  onDeleteItem: (id: number) => void
  onToggleItem: (id: number) => void
  onClearList: () => void
}

const PackingList: FC<itemsArrayProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState<string>("input")

  let sortedItems: itemProps[] = items

  if (sortBy === "input") sortedItems = items

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  )
}

export default PackingList
