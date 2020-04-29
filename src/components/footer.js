// Library and Package Imports
import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import { Link } from "gatsby"

const Footer = () => (
  <Layout>
    <FooterComponent>
      <Container>
        <div>
          <img
            src={require("../images/logo.svg")}
            alt="Computer Screen with Pulse"
          />
        </div>
        <div>
          <ul>
            <li>
              <a
                href="https://github.com/ezolla"
                target="_blank"
                rel="noopener noreferrer"
              >
                Releases
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ezolla"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="https://paypal.me/ethanzoller?locale.x=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ethanzolla" target="_blank">
                Creator
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </FooterComponent>
  </Layout>
)

export default Footer

const FooterComponent = styled.div`
  background: #202020;
  width: 100%;
  height: 100px;

  @media (max-width: 530px) {
    display: none;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 0 50px;

  div:nth-child(1) {
    margin-top: 25px;

    img {
      width: 50px;
    }
  }

  div:nth-child(2) {
    text-align: right;
    margin-top: 20px;

    ul {
      list-style: none;

      li {
        display: inline;

        a {
          font-size: 14px;
          letter-spacing: 1.1px;
          margin-right: 20px;
          transition: 0.3s;

          :nth-child(4) {
            margin-right: 0px;
          }

          :hover {
            color: #8e8e93;
          }
        }
      }
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`
