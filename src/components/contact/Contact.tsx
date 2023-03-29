import React from "react"
import { ButtonSecondary, TextWrapper } from "../../UI/UI"
import { TbBow } from "react-icons/tb"
import { BsFillArrowThroughHeartFill } from "react-icons/bs"
import { SiTinyletter } from "react-icons/si"
import { ImPhone } from "react-icons/im"
import { HiOutlineMail } from "react-icons/hi"
import * as P from "./parts"

const Contact = () => {
  return (
    <P.Wrapper>
      {/* <P.RightImage></P.RightImage> */}
      {/* <P.LeftImage></P.LeftImage>  */}
      <P.TextWrapper>
        <TextWrapper>
          <h3>Zapraszam do kontaktu!</h3>
          <p>
            Jeśli szukasz wedding plannera, który pomoże Ci zorganizować
            wymarzone wesele, to skontaktuj się ze mną! Wypełnij formularz lub
            zadzwoń, a umówimy się na niezobowiązujące spotkanie, na którym
            omówimy Twoje oczekiwania i potrzeby. Na jego podstawie, przygotuję
            dla Ciebie szczegółową ofertę wraz z wyceną.
          </p>
        </TextWrapper>
      </P.TextWrapper>
      <P.Break />
      <P.Form>
        <input placeholder="Imie i nazwisko" />
        <input placeholder="Email" />
        <input placeholder="Numer telefonu" />
        <textarea placeholder="Treśc wiadomości" />
        <ButtonSecondary showing={true}>Wyślij</ButtonSecondary>
        <div>
          <div>
            <TbBow size={40} />
          </div>
          <div>
            <BsFillArrowThroughHeartFill size={40} />
          </div>
          <div>
            <SiTinyletter size={40} />
          </div>
        </div>
      </P.Form>
      <P.Contact>
        <div>
          <ImPhone size={30} /> <p>666-666-666</p>
        </div>
        <div>
          <HiOutlineMail size={30} /> <p>annamail@gmail.com</p>
        </div>
      </P.Contact>
    </P.Wrapper>
  )
}

export default Contact
