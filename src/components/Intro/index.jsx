import {
  Paragraph,
  Infos,
  Item,
  Title,
  Content,
  Logo,
  Signature,
} from './style';

const Intro = () => (
  <>
    <Paragraph>
      解嚴之後不久，臺大新聞所於 1991 年成立，至今已經三十年！三十年來，我們見證臺灣民主化過程中，新聞業從威權侍從走向專業自主；也見證網路興起後，傳統媒體由盛轉衰並苦思出路，數位平台上眾聲喧嘩卻也百病叢生。
    </Paragraph>
    <Paragraph>
      我們認為，這是最壞的時代，也是最好的時代。新聞作為民主社會的重要機制，監督權力者、服務公民社會，有其本質上的必要性。新聞所三十週年研討會以「重建新聞鞏固民主」為主題，思索臺灣新聞業的危機與轉機，會議議程分為四大方向，從新聞匯流現況、新聞危機談到新聞實踐的轉機與創新重建。
    </Paragraph>
    <Paragraph>
      在四大方向之下，規劃八場專題，邀請產業、政府及學界代表，提供第一手資料及精闢的洞見。這些議題包括新聞匯流情境下的當前新聞業的發展與挑戰、匯流平台產業與政策回應；新聞危機下的假訊息蔓延與事實查證、數位廣告對新聞發展的影響；新聞實踐作為中資料分析的重要性、國際新聞與在地觀點的探索；最後在新聞重建的希望星火中，思考社群媒體的新聞生態與平台責任、開發新聞創新與永續營運模式。
    </Paragraph>
    <Paragraph>
      在新聞業面臨轉型的關鍵時刻，我們邀請各界朋友參加，與我們共同探索新聞轉型與重生之道！希望健康的新聞業的存在，提供守望社會的正確資訊與認知觀點，協助台灣民主道路更加穩固與健全。
    </Paragraph>
    <Infos>
      <Item>
        <Title>日期與時間</Title>
        <Content>2021 年 11 月 12 日 ( 週五 )</Content>
      </Item>
      <Item>
        <Title>地點</Title>
        <Content>
          臺大法律學院霖澤館（A 場：國際會議廳、B 場：多媒體教室）
        </Content>
      </Item>
      <Item>
        <Title>主辦單位</Title>
        <Content>臺大新聞研究所</Content>
      </Item>
      <Item>
        <Title>協辦單位</Title>
        <Content>中華傳播學會、優質新聞發展協會</Content>
      </Item>
      <Item>
        <Title>贊助單位</Title>
        <Content>
          臺大社科院
          <br />
          STBA 衛星廣播電視公會
          <br />
          中嘉數位股份有限公司
          <br />
          臺灣數位光訊科技集團
          <br />
          中華電信公司 <br />
          Google
        </Content>
      </Item>
    </Infos>
    <Signature>
      臺大新聞所所長 <img src='./images/hzl-sign.png' alt='' width='150' />{' '}
      暨全體教師 敬邀
      <Logo />
    </Signature>
  </>
);

export default Intro;
