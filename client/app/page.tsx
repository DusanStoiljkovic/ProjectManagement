import CardList from "@/components/CardList";
import { Chart } from "@/components/Chart";
import { ChartAreaGradient } from "@/components/ChartGradient";
import { ChartPie } from "@/components/ChartPie";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (      
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <Chart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions"/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartPie/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 2xl:col-span-2">
        <ChartAreaGradient/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content"/>
      </div>
    </div>
  );
}
