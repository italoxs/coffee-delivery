import { ReactNode } from "react";
import { IconContainer, InfoContainer } from "./styles";

interface InfoProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function Info({ text, icon, iconBg }: InfoProps) {
  return (
    <InfoContainer>
      <IconContainer iconBg={iconBg} >{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoContainer>
  )
}