import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}