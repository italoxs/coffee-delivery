import { TitleText } from "../../../../components/Typograph";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeesList } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <TitleText size="l" color='subtitle'>
        Nossos cafés
      </TitleText>

      <CoffeesList>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesList>
    </CoffeeListContainer>
  )
}