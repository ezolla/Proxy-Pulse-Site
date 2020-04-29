import React from "react"
import styled from "styled-components"
import Layout from "./layout"

function FeatureCard({ title, paragraph, src, alt }) {
  return (
    <Layout>
      <Card>
        <div>
          <img src={src} alt={alt} />
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
      </Card>
    </Layout>
  )
}

export default FeatureCard

const Card = styled.div`
  background: #202020;
  width: 100%;
  height: 100%;
  border-radius: 4px;

  div {
    padding: 30px;

    img {
      width: 30px;
    }

    h4 {
      margin-top: 10px;
    }

    p {
      padding-top: 10px;
    }
  }
`
