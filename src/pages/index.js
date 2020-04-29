// Library and Package Imports
import React from "react"
import styled from "styled-components"
import { IoLogoWindows, IoLogoApple } from "react-icons/io"

// Component Imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Card from "../components/card"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    {/* SEO Page Title */}
    <SEO title="Home" />

    {/* Header Navigation */}
    <Header />

    {/* Hero */}
    <Hero>
      <span>Proxy Pulse — Open Sourced Software</span>
      <h1>The proxy testing software you’ll enjoy using</h1>
      <p>
        Proxy Pulse is open-sourced software that allows for simple and easy
        testing of all types of proxies on any website you desire.
      </p>
      <div>
        <a href="/" target="_blank">
          <div style={{ color: "#F2F2F7" }} role="button">
            <IoLogoWindows className="icon" size={22} />
          </div>
          Windows
        </a>
        <a href="/" target="_blank">
          <div style={{ color: "#F2F2F7" }} role="button">
            <IoLogoApple className="icon" size={22} />
          </div>
          Mac
        </a>
      </div>
    </Hero>

    {/* Image Snapshot */}
    <InterfaceSnapshot>
      <img src={require("../images/interface.svg")} alt="Software Interface" />
    </InterfaceSnapshot>

    {/* Features */}
    <Features>
      <h2>The simplicity users need</h2>
      <p>
        With Proxy Pulse, you get a simple user interface with easy to follow
        directions and real-time responses.
      </p>
      <div>
        <Card
          title="Smart Response"
          paragraph="Simplicity. No jargon. Easy to understand."
          src={require("../images/icons/brain.svg")}
          alt="Brain"
        />
        <Card
          title="Dark Mode"
          paragraph="No light. Easy on eyes. Smooth interface."
          src={require("../images/icons/moon.svg")}
          alt="Moon"
        />
        <Card
          title="All Proxy Types"
          paragraph="Sticky, rotating, user and pass. All of it."
          src={require("../images/icons/server.svg")}
          alt="Server"
        />
        <Card
          title="Desired Testing"
          paragraph="No testing limits. Choose site. No holding back."
          src={require("../images/icons/earth.svg")}
          alt="Earth"
        />
        <Card
          title="Speed"
          paragraph="Electron technologies creates zero slacking."
          src={require("../images/icons/speed.svg")}
          alt="Speedometer"
        />
        <Card
          title="Cross Platform"
          paragraph="Windows and Mac compatible. For everyone."
          src={require("../images/icons/brain.svg")}
          alt="Platform"
        />
      </div>
    </Features>

    {/* Open Sourced Section */}
    <OpenSourced>
      <div>
        <h3>
          Open sourced,{" "}
          <Bold>
            for <br />
            everyone.
          </Bold>
        </h3>
        <ul>
          <li>
            <p>
              <BoldText>Welcome.</BoldText> Enjoy the software, <br /> with open
              arms.
            </p>
          </li>
          <li>
            <p>
              <BoldText>Need Help?</BoldText> Don’t struggle, <br /> send me a
              message.
            </p>
          </li>
          <li>
            <p>
              <BoldText>Support Me.</BoldText> Donate, follow, <br /> or star to
              support.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={require("../images/onboarding.svg")}
          alt="Welcome and Help Onboarding Screens"
        />
      </div>
    </OpenSourced>

    {/* Thinking and Meaning Section */}
    <ThinkingMeaning>
      <div>
        <img
          src={require("../images/table.svg")}
          alt="Welcome and Help Onboarding Screens"
        />
      </div>
      <div>
        <h3>
          Less thinking,{" "}
          <Bold>
            more <br />
            meaning.
          </Bold>
        </h3>
        <ul>
          <li>
            <p>
              <BoldText>Smart response.</BoldText> Understand <br /> the reality
              of speed results.
            </p>
          </li>
          <li>
            <p>
              <BoldText>Simple Interface.</BoldText> Don’t struggle, <br />{" "}
              navigating your way around.
            </p>
          </li>
          <li>
            <p>
              <BoldText>Seamless Onboarding.</BoldText> Always be <br />{" "}
              welcomed with open arms.
            </p>
          </li>
        </ul>
      </div>
    </ThinkingMeaning>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default IndexPage

const Hero = styled.div`
  margin: 175px auto;
  max-width: 820px;
  text-align: center;

  span {
    color: #6383ff;
    line-height: 14.6px;
    letter-spacing: 3.9px;
    font-size: 14px;
  }

  h1 {
    margin-top: 5px;
  }

  p {
    font-size: 24px;
    line-height: 36px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    a {
      display: flex;
      justify-self: end;
      background: #2c2c2e;
      padding: 10px 0 10px 12px;
      border-radius: 3px;
      align-items: center;
      text-align: center;
      transition: 0.3s;
      width: 112px;
      margin-right: 10px;
      font-weight: 500;

      div {
        margin-right: 10px;
        display: block;
      }

      :hover {
        background: #3a3a3c;
      }

      :last-child {
        width: 80px;
        margin-left: 10px;
        justify-self: start;
      }
    }
  }
`

const InterfaceSnapshot = styled.div`
  display: block;
  margin: auto;
  max-width: 820px;
  padding: 0 20px;

  img {
    width: 100%;
    height: auto;
  }
`

const Features = styled.div`
  margin: 175px auto;
  max-width: 960px;
  text-align: center;

  p {
    font-size: 19px;
    line-height: 31.4px;
    margin: -20px auto 50px auto;
    max-width: 620px;
    padding: 0 20px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    text-align: left;

    div {
      display: block;
    }

    p {
      font-size: 15px;
      line-height: 18px;
      padding: 10px 0 0 0;
    }

    @media (max-width: 1020px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 600px;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);
      max-width: 300px;
      margin: 0 auto;
    }
  }
`

const OpenSourced = styled.div`
  margin: 250px auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 50px;

  div:nth-child(1) {
    ul {
      padding-left: 20px;

      li {
        color: #617afc;

        p {
          font-size: 15px;
        }
      }
    }
  }

  div:nth-child(2) {
    margin-top: 40px;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(1, 1fr);

    div:nth-child(1) {
      margin: 0 auto;
    }

    div:nth-child(2) {
      text-align: center;
      margin-top: 30px;
    }
  }
`

const ThinkingMeaning = styled.div`
  margin: 250px auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 50px;

  div:nth-child(1) {
    text-align: left;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  div:nth-child(2) {
    justify-self: end;

    ul {
      padding-left: 20px;

      li {
        color: #617afc;

        p {
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 940px) {
    grid-template-columns: repeat(1, 1fr);

    div:nth-child(2) {
      margin: 0 auto;
    }

    div:nth-child(1) {
      text-align: center;
      margin-top: 30px;
    }
  }

  @media (max-width: 530px) {
    margin-bottom: 100px;
  }
`

const Bold = styled.h3`
  font-weight: 800;
  display: inline;
`

const BoldText = styled.p`
  font-weight: 600;
  color: #f2f2f7;
  display: inline;
`
