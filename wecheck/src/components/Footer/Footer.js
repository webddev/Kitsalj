import React from "react";
import { Container } from "../../elements";
import {
  StyledFooter,
  StyledContent,
  StyledLeftBlock,
  StyledCentrBlock,
  StyledRightBlock,
  StyledCopyright,
  StyledBorder,
  StyledEmail,
} from "./FooterStyle";
import Mail from "../../assets/img/mail.png";
import TgIcon from "../../assets/img/tg-icon.png";
import FbIcon from "../../assets/img/fb-icon.png";
import VkIcon from "../../assets/img/vk-icon.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledContent>
          <StyledEmail style={{ display: "flex" }}>
            <div>
              <img src={Mail} alt="" />
            </div>
            <StyledLeftBlock>
              <p>Свяжитесь с нами</p>
              <p>
                Если у вас остались вопросы или хотите обсудить сотруденичество,
                пишите:
              </p>
              <p style={{ textDecoration: "underline" }}>hello@wecheck.ru</p>
              <p style={{ textDecoration: "underline" }}>wecheck.ru</p>
            </StyledLeftBlock>
          </StyledEmail>
          <StyledCentrBlock>
            <a href="https://www.wecheck.ru/">Маркетплейсы</a>
            <a href="https://www.web.wecheck.ru/parsing">Парсинг</a>
            <a href="https://www.web.wecheck.ru/competitors">Конкуренты</a>
            <a href="#">Главная</a>
          </StyledCentrBlock>
          <StyledRightBlock>
            <div>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://t.me/wecheckru");
                }}
                href=""
              >
                <img src={TgIcon} alt="" />
              </a>
              {/* <a href="">
                <img src={FbIcon} alt="" />
              </a> */}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://vk.com/wecheck");
                }}
                href=""
              >
                <img src={VkIcon} alt="" />
              </a>
            </div>
            <p>Следите за нами в соц сетях</p>
          </StyledRightBlock>
        </StyledContent>
      </Container>
      <StyledBorder></StyledBorder>
      <Container>
        <StyledCopyright>
          <p>© 2019-2022 WeCheck. Все права защищены</p>
          <p
            onClick={() => window.open("https://www.web.wecheck.ru/agreement")}
          >
            Договор оферта
          </p>
          <p onClick={() => window.open("https://www.docs.wecheck.ru/licence")}>
            Политика конфиденциальности
          </p>
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
};
