import styled from 'styled-components'

export const HomeContainer = styled.section``

export const Container = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export const Header = styled.header`
  margin-top: 20px;

  .flex {
    display: flex;
    justify-content: center;

    .item {
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 200px;
        border-radius: 50%;
      }

      h4 {
        margin-top: 20px;
        text-align: center;
        width: 100%;
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`

export const Main = styled.main`
  margin: 50px 0;
  width: 100%;

  .card {
    background-color: rgba(18, 20, 24, 0.7);
    backdrop-filter: blur(5px);
    padding: 40px;
    border: 2px solid #0a0a0a;
    border-radius: 20px;

    .title {
      h1 {
        font-size: 36px;
        width: 100%;
        text-align: center;
        padding: 20px 0;
      }
    }

    .top {
      .flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        .item {
          max-width: 380px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          span.icon {
            display: none;
          }

          .active {
            display: block !important;
          }

          .icon {
            span {
              i {
                font-size: 60px;
              }
            }
          }

          .counter {
            span {
              font-size: 36px;
            }
          }

          button {
            padding: 10px 20px;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            color: #fff;
            background-color: ${props => props.theme.colors.clrPrimary};
            border-radius: 5px;
            margin-top: 10px;
            transition: 0.2s all ease;

            &:hover {
              filter: brightness(1.2);
            }
          }
        }
      }
    }
  }
`
