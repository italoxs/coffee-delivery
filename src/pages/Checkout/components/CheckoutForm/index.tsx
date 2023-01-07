import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typograph";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { CheckoutFormContainer, FormSectionContainer } from "./styles";

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}