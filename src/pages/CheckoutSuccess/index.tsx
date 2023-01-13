import { CheckoutSuccessContainer, CheckoutSuccessDetailsContainer } from "./styles";
import { RegularText, TitleText } from "../../components/Typograph";

import checkouSuccessImg from '../../assets/checkouSuccess.svg'
import { Info } from "../../components/Info";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function CheckoutSuccess() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>;

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
                Entrega em <strong>{state.street}, {state.number}</strong>
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </CheckoutSuccessDetailsContainer>
        <img src={checkouSuccessImg} alt="" />
      </section>
    </CheckoutSuccessContainer>
  )
}