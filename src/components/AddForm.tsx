import { useState } from "react"
import { type itemProps } from "../App"

type AddFormProps = {
  onAddItem: (item: itemProps) => void
}

const AddForm = ({ onAddItem }: AddFormProps) => {
  const [itemInput, setItemInput] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (itemInput.trim() === "") return

    onAddItem({
      description: itemInput.trim(),
      quantity,
      packed: false,
      id: Date.now(),
    })

    setItemInput("")
    setQuantity(1)
  }

  return (
    <form onSubmit={onSubmit} className="add-form">
      <h3>What do you need for your trip?</h3>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="itemInput"
        id="itemInput"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddForm
