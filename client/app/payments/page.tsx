import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { defaultConfig } from "next/dist/server/config-shared"
import Image from "next/image";
import { cn } from "@/lib/utils"

const invoices = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image: "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 6,
    title: "Invoice Paid",
    badge: "Emily Clark",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1800,
  },
  {
    id: 7,
    title: "New Order",
    badge: "Daniel Wilson",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 8,
    title: "Subscription Renewal",
    badge: "Sophia Martinez",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 900,
  },
  {
    id: 9,
    title: "Payment Received",
    badge: "Chris Evans",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2700,
  },
  {
    id: 10,
    title: "New Order",
    badge: "Olivia Taylor",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 11,
    title: "Invoice Paid",
    badge: "James Anderson",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 12,
    title: "Subscription Renewal",
    badge: "Emma White",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1100,
  },
  {
    id: 13,
    title: "Payment for Services",
    badge: "Robert King",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 14,
    title: "New Order",
    badge: "Isabella Moore",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1600,
  },
  {
    id: 15,
    title: "Invoice Paid",
    badge: "William Scott",
    image: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
  {
    id: 16,
    title: "Subscription Renewal",
    badge: "Ava Harris",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1000,
  },
  {
    id: 17,
    title: "Payment Received",
    badge: "Ethan Lewis",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2300,
  },
  {
    id: 18,
    title: "New Order",
    badge: "Mia Walker",
    image: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1900,
  },
  {
    id: 19,
    title: "Invoice Paid",
    badge: "Noah Hall",
    image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2600,
  },
  {
    id: 20,
    title: "Subscription Renewal",
    badge: "Charlotte Young",
    image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 21,
    title: "Payment for Services",
    badge: "Benjamin Allen",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3100,
  },
  {
    id: 22,
    title: "New Order",
    badge: "Amelia Wright",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1700,
  },
  {
    id: 23,
    title: "Invoice Paid",
    badge: "Lucas Lopez",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
  {
    id: 24,
    title: "Subscription Renewal",
    badge: "Harper Gonzalez",
    image: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 25,
    title: "Payment Received",
    badge: "Henry Perez",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2900,
  },
  {
    id: 26,
    title: "New Order",
    badge: "Evelyn Roberts",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1600,
  },
  {
    id: 27,
    title: "Invoice Paid",
    badge: "Alexander Turner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3500,
  },
  {
    id: 28,
    title: "Subscription Renewal",
    badge: "Abigail Phillips",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1100,
  },
  {
    id: 29,
    title: "Payment for Services",
    badge: "Jack Campbell",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2700,
  },
  {
    id: 30,
    title: "New Order",
    badge: "Ella Parker",
    image: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1800,
  },
  {
    id: 31,
    title: "Invoice Paid",
    badge: "Logan Stewart",
    image: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2600,
  },
  {
    id: 32,
    title: "Subscription Renewal",
    badge: "Grace Morris",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 900,
  },
  {
    id: 33,
    title: "Payment Received",
    badge: "Sebastian Rogers",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3100,
  },
  {
    id: 34,
    title: "New Order",
    badge: "Chloe Reed",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 35,
    title: "Invoice Paid",
    badge: "David Cook",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3300,
  },
  {
    id: 36,
    title: "Subscription Renewal",
    badge: "Victoria Morgan",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
  {
    id: 37,
    title: "Payment for Services",
    badge: "Joseph Bell",
    image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2800,
  },
  {
    id: 38,
    title: "New Order",
    badge: "Hannah Murphy",
    image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1700,
  },
  {
    id: 39,
    title: "Invoice Paid",
    badge: "Samuel Rivera",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 40,
    title: "Subscription Renewal",
    badge: "Zoey Cooper",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1000,
  },
  {
    id: 41,
    title: "Payment Received",
    badge: "Andrew Bailey",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3600,
  },
  {
    id: 42,
    title: "New Order",
    badge: "Natalie Brooks",
    image: "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1600,
  },
  {
    id: 43,
    title: "Invoice Paid",
    badge: "Ryan Kelly",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2900,
  },
  {
    id: 44,
    title: "Subscription Renewal",
    badge: "Lucy Howard",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1100,
  },
  {
    id: 45,
    title: "Payment for Services",
    badge: "Nathan Ward",
    image: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3400,
  },
  {
    id: 46,
    title: "New Order",
    badge: "Sofia Cox",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1800,
  },
  {
    id: 47,
    title: "Invoice Paid",
    badge: "Christian Diaz",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2700,
  },
  {
    id: 48,
    title: "Subscription Renewal",
    badge: "Layla Foster",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 900,
  },
  {
    id: 49,
    title: "Payment Received",
    badge: "Aaron Simmons",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3100,
  },
  {
    id: 50,
    title: "New Order",
    badge: "Nora Bennett",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2000,
  },
];

export function TableDemo() {
  return (
    <div className="rounded-xl border bg-background p-4">
      <Table>
        <TableCaption className="text-muted-foreground">
          A list of your recent invoices
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.id}
              className="hover:bg-muted/50 transition-colors"
            >
              {/* User */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full">
                    <Image
                        src={invoice.image}
                        alt={invoice.badge}
                        fill
                        className="object-cover"
                        />
                    </div>
                  <div className="flex flex-col">
                    <span className="font-medium leading-none">
                      {invoice.badge}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Customer
                    </span>
                  </div>
                </div>
              </TableCell>

              {/* Invoice ID */}
              <TableCell className="font-mono text-sm">
                #{invoice.id}
              </TableCell>

              {/* Status */}
              <TableCell>
                <span className={ cn(`inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary`,
                    statusClasses[invoice.title] ?? "bg-muted text-muted-foreground"
                )}>
                  {invoice.title}
                </span>
              </TableCell>

              {/* Amount */}
              <TableCell className="text-right font-semibold">
                ${invoice.count.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="font-medium">
              Total
            </TableCell>
            <TableCell className="text-right font-bold">
              $2,500.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

const statusClasses: Record<string, string> = {
  "New Order": "bg-green-500/20 text-green-700",
  "Invoice Paid": "bg-blue-500/20 text-blue-700",
  "Payment Received": "bg-emerald-500/20 text-emerald-700",
  "Subscription Renewal": "bg-yellow-500/20 text-yellow-700",
  "Payment for Services": "bg-purple-500/20 text-purple-700",
}


export default TableDemo