import { useState } from "react"

import AddForm from "./components/AddForm"
import Header from "./components/Header"
import PackingList from "./components/PackingList"
import Footer from "./components/Footer"

export type itemProps = {
  description: string
  quantity: number
  packed: boolean
  id: number
}

const App = () => {
  const [items, setItems] = useState<itemProps[]>([])

  const handleAddItem = (item: itemProps) => {
    setItems((prevItems) => [...prevItems, item])
  }

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )

    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Header />
      <AddForm onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  )
}

export default App
