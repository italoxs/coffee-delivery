import { RegularText, TitleText } from "../../components/Typograph";
import { CheckoutSuccessContainer, CheckoutSuccessDetailsContainer } from "./styles";

import checkouSuccessImg from '../../assets/checkouSuccess.svg'
import { Info } from "../../components/Info";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function CheckoutSuccess() {
  const { colors } = useTheme()

  return (
    <CheckoutSuccessContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <CheckoutSuccessDetailsContainer>
          <Info
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua do cafá expresso, 163</strong>
                <br />
                Maceió, AL
              </RegularText>
            }
          />
          <Info
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <Info
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </CheckoutSuccessDetailsContainer>
        <img src={checkouSuccessImg} alt="" />
      </section>
    </CheckoutSuccessContainer>
  )
}