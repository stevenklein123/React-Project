import { useState } from "react";
import { CenteredCard } from "./components/CenteredCard";
import { Button } from "./components/Button";
import { ChangeName } from "./pages/ChangeName";
import { CharacterCounter } from "./pages/CharacterCounter";
import { GreetingApp } from "./pages/GreetingApp";
import { LikeDislike } from "./pages/LikeDislike";
import { Profile } from "./pages/Profile";
import { ShowHide } from "./pages/ShowHide";
import { FormValidation } from "./pages/FormValidation";
import { TodoList } from "./pages/TodoList";

const PAGES = [
  { name: "Change Name", component: ChangeName },
  { name: "Character Counter", component: CharacterCounter },
  { name: "Greeting App", component: GreetingApp },
  { name: "Like / Dislike", component: LikeDislike },
  { name: "Profile", component: Profile },
  { name: "Show / Hide", component: ShowHide },
  { name: "Form Validation", component: FormValidation },
  { name: "Todo List", component: TodoList },
];

function App() {
  const [activePage, setActivePage] = useState(null);

  const ActiveComponent = activePage !== null ? PAGES[activePage].component : null;

  return (
    <CenteredCard>
      {ActiveComponent ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">{PAGES[activePage].name}</h2>
            <Button variant="secondary" onClick={() => setActivePage(null)} className="text-sm">
              Back
            </Button>
          </div>
          <ActiveComponent />
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">React Mini-Apps</h1>
          <div className="grid gap-3">
            {PAGES.map((page, index) => (
              <Button key={page.name} onClick={() => setActivePage(index)} className="w-full">
                {page.name}
              </Button>
            ))}
          </div>
        </>
      )}
    </CenteredCard>
  );
}

export default App;
