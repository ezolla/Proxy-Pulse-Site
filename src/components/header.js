// Library and Package Imports
import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import { Link } from "gatsby"
import { IoLogoGithub } from "react-icons/io"

const Header = () => (
  <Layout>
    <Navigation>
      <Container>
        {/* Logo */}
        <Link to="/">
          <img
            src={require("../images/logo.svg")}
            alt="Computer Monitor with Pulse"
          />
        </Link>

        {/* Center Links */}
        <ul>
          <li>
            <a href="https://github.com/ezolla" target="_blank">
              Releases
            </a>
          </li>
          <li>
            <a href="https://github.com/ezolla" target="_blank">
              Contribute
            </a>
          </li>
          <li>
            <a
              href="https://paypal.me/ethanzoller?locale.x=en_US"
              target="_blank"
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

        {/* Github Button */}
        <a className="button" href="https://github.com/ezolla" target="_blank">
          <div style={{ color: "#F2F2F7" }} role="button">
            <IoLogoGithub className="icon" size={22} />
          </div>
          Github
        </a>
      </Container>
    </Navigation>
  </Layout>
)

export default Header

const Navigation = styled.div`
  width: 100%;
  /* height: 70px; */
`

const Container = styled.div`
  height: 100%;
  max-width: 960px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 50px;
    flex: 20%;
  }

  ul {
    list-style: none;
    flex: 60%;

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

  .button {
    display: flex;
    justify-self: end;
    background: #2c2c2e;
    width: 100px;
    padding: 10px 0 10px 12px;
    border-radius: 3px;
    align-items: center;
    text-align: center;
    transition: 0.3s;

    div {
      margin-right: 10px;
    }

    :hover {
      background: #3a3a3c;
    }
  }
`
