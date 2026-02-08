"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

const todos = [
  { id: 1, text: "Finish dashboard UI", done: true },
  { id: 2, text: "Fix sidebar collapsible", done: false },
  { id: 3, text: "Refactor chart component", done: false },
  { id: 4, text: "Prepare PR description", done: true },
  { id: 5, text: "Review git history", done: false },
]

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(todos)

  const toggleTodo = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }

  return (
    <div>
      {/* DATE PICKER */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start gap-2">
            <CalendarIcon className="h-4 w-4" />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d)
              setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>

      {/* TODO LIST */}
      <ScrollArea className="mt-4 max-h-[500px]">
        <div className="flex flex-col gap-3">
          {items.map(item => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`todo-${item.id}`}
                  checked={item.done}
                  onCheckedChange={() => toggleTodo(item.id)}
                />
                <label
                  htmlFor={`todo-${item.id}`}
                  className={`text-sm ${
                    item.done ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {item.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
