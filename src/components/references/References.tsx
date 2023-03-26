import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BsFillHandThumbsUpFill } from "react-icons/bs"
import * as P from "./parts"
import { ButtonPrimary, ButtonSecondary } from "../../UI/UI"

interface Props {
  allDatoCmsReferencje: {
    nodes: {
      nameAndLastname: string
      reference: string
      referenceDate: string
      id: string
    }[]
  }
  showing?: boolean
}

const References: React.FC<Props> = ({ showing }) => {
  const data = useStaticQuery<Props>(query)
  const [displayedReferences, setDisplayedReferences] = useState<number>(3)
  const nodes = data.allDatoCmsReferencje.nodes.slice(0, displayedReferences)
  const nodesLength = data.allDatoCmsReferencje.nodes.length

  const loadMoreReference = () => {
    setDisplayedReferences((prev) => prev + 3)
  }

  return (
    <>
      <P.ReferencesWrapper>
        {nodes.map((node) => (
          <P.ReferenceWrapper key={node.id}>
            <BsFillHandThumbsUpFill size={40} style={{ color: "green" }} />
            <h3>
              {node.nameAndLastname}
              <span>{node.referenceDate}</span>
            </h3>
            <p>{node.reference}</p>
          </P.ReferenceWrapper>
        ))}
      </P.ReferencesWrapper>
      {showing && displayedReferences < nodesLength ? (
        <ButtonSecondary
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          onClick={loadMoreReference}
          showing={true}
        >
          Zobacz więcej
        </ButtonSecondary>
      ) : null}
    </>
  )
}

export const query = graphql`
  query {
    allDatoCmsReferencje(sort: { referenceDate: DESC }) {
      nodes {
        id
        nameAndLastname
        reference
        referenceDate
      }
    }
  }
`

export default References
