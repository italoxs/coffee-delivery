import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

import coffeImg from '../../../../../public/coffees/americano.png'
import { RegularText } from "../../../../components/Typograph";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffeImg} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$9,90</p>
    </CoffeeCartCardContainer>
  )
}