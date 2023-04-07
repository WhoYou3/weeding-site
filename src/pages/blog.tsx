import React from "react"
import { BlogList, InBuild, SEO } from "../components"

const Blog = () => {
  return (
    <div>
      <SEO
        title="Blog"
        description='"Zapraszamy do naszego bloga, gdzie znajdziesz inspiracje, porady i ciekawostki na temat organizacji wesel i sesji plenerowych. Przeczytaj artykuły naszych ekspertów, którzy podzielą się swoimi doświadczeniami i pomogą Ci stworzyć niezapomniane wydarzenie. Bądź na bieżąco z nowymi trendami i pomysłami, które pozwolą Ci w pełni cieszyć się swoim wielkim dniem. Odwiedź nasz blog już dziś i odkryj świat ślubnych inspiracji!"'
      />
      <BlogList></BlogList>
    </div>
  )
}

export default Blog
