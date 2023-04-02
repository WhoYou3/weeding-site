import React from "react"
import { GlobalStyle } from "."
import {
  Layout,
  Header,
  Offer,
  Blog,
  References,
  Instagram,
} from "../components"

const Oferta: React.FC = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Header
        sentence1="Czym się zajmuje?"
        backgroundImage="image3"
        textPlace="300px"
      />
      <Offer
        kindOffer="Kompleksowa organizacja ślubu"
        description={description1}
        kindPhoto="photo1"
      />
      <Offer
        kindOffer="Koordynacja ślubu "
        description={description2}
        kindPhoto="photo2"
        reverse={true}
      />
      <Offer
        kindOffer="Konsultacje ślubne "
        description={description3}
        kindPhoto="photo3"
      />
      <Offer
        kindOffer="Organizacja przyjęć okolicznościowych i eventów firmowych. "
        description={description4}
        kindPhoto="photo4"
        reverse={true}
      />
      <Blog />
      <Instagram />
      <References showing={false} />
    </Layout>
  )
}

const description1 = `Ślub cywilny, kościelny, a może w plenerze?\n\n Usługa kompleksowej organizacji dnia ślubu jest dedykowana narzeczonym, którzy chcą zminimalizować stres i zaangażowanie w przygotowania ceremonii.\n\n W ramach usługi oferujemy pomoc w wyborze wymarzonej lokalizacji, dekoracji, strojów, menu, fotografii, muzyki i transportu. Przygotujemy koncepcję Waszego wesela oraz zadbamy o każdy element organizacji. Sporządzimy budżet i na bieżąco będziemy informowali Was o etapach realizacji przygotowań. Przedstawimy projekt dekoracji, zaproponujemy sprawdzonych przez nas usługodawców i skoordynujemy ich pracę w dniu śubu. Finalnie będziemy z Wami podczas całego wydarzenia i dopilnujemy każdego szczegółu już na miejscu. Wybierając naszą ofertę otrzymujecie nasze wsparcie, kontakty oraz doświadczenie i  sprawdzone rozwiązania. Służymy Wam naszym wsparciem przez cały czas!`
const description2 = `Zorganizowaliście już cały ślub i wesele, zaplanowaliście wszelkie atrakcje, ale potrzebujecie osoby, która w tym wyjątkowym dniu przejmie pełną kontrolę?\n\n
Usługa koordynacji ślubu to profesjonalna pomoc w organizacji oraz planowaniu tego wyjątkowego dnia. Nasz zespół zajmie się pełną koordynacją ślubu, dzięki czemu Wy możecie skupić się na celebrowaniu wyjątkowych chwil Waszego święta.\n\n
W ramach usługi oferujemy wsparcie od przygotowania harmonogramu dnia, koordynację pracy wszystkich dostawców oraz całkowitym wsparciem zarówno dla Was jak i zaproszonych gości. Z nami Wasz dzień będzie wyjątkowy i niezapomniany.
`
const description3 = `To indywidualne spotkanie, na którym dzielę się z Wami swoim doświadczeniem.\n\n W ramach spotkania omówimy Twoje oczekiwania, pomysły oraz zaprezentujemy Ci różne możliwości realizacji Twojego wymarzonego wesela. Przygotujemy również listę pytań, które pomogą Ci wybrać odpowiednich usługodawców i stworzyć harmonogram przygotowań. Dzięki naszym konsultacjom ślubnym poczujesz się pewnie i zrelaksowany, a Twój dzień ślubu będzie spełnieniem Twoich marzeń.`
const description4 = `Bazując na naszym doświadczeniu w ramach naszych usług oferujemy również organizację jubileuszy, wieczorów panieńskich i kawalerskich, urodzin, a nawet romantycznych zaręczyn. Powierzając nam organizację zyskujecie oszczędność czasu oraz stresu. W zamian otrzymujecie niestandardowe rozwiązania i niezapomniane wspomnienia. 
`

export default Oferta
