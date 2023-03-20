import React from "react"
import * as P from "./parts"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsCardChecklist } from "react-icons/bs"
import { IoMdContacts } from "react-icons/io"
import { GiPartyPopper } from "react-icons/gi"
import { ButtonSecondary } from "../../UI/UI"

const Testamonials: React.FC = () => {
  return (
    <P.Wrapper>
      <P.Title>Czym się zajmuję?</P.Title>
      <P.TasksContainer>
        <P.Task>
          <AiOutlineCheckCircle style={{ color: "green" }} size={40} />
          <p>Kompleksowa organizacja ślubu</p>
        </P.Task>
        <P.Task>
          <BsCardChecklist style={{ color: "green" }} size={40} />
          <p>Koordynacja ślubu</p>
        </P.Task>
        <P.Task>
          <IoMdContacts style={{ color: "green" }} size={40} />
          <p>Konsultacje ślubne</p>
        </P.Task>
        <P.Task>
          <GiPartyPopper style={{ color: "green" }} size={40} />
          <p>Organizacja przyjęć i eventów</p>
        </P.Task>
      </P.TasksContainer>
      <ButtonSecondary space="auto">Skontaktuj się ze mną</ButtonSecondary>
    </P.Wrapper>
  )
}

export default Testamonials
