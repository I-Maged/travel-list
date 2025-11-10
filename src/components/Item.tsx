import { type itemProps } from "../App"

type ItemDisplayProps = {
  item: itemProps
  onDeleteItem: (id: number) => void
  onToggleItem: (id: number) => void
}

const Item = ({ item, onDeleteItem, onToggleItem }: ItemDisplayProps) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.quantity}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item
