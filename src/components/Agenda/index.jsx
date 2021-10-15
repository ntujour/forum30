import './Style.css';

const Agenda = () => {
  return window.document.body.clientWidth <= 425 ? (
    <table>
      <thead>
        <tr>
          <th>
            <p>時間</p>
          </th>
          <th colSpan='2'>
            <p>場次、主題及參與者</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>8:30-9:00 開幕</p>
            <p className='text-center'>貴賓致詞</p>
            <p className='text-center'>邀請主管機關、媒體公協會、新聞獎機構</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td colSpan='2'>
            <p className='text-center'>9:00-10:20</p>
            <p className='text-center'>新聞匯流</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td>
            <p className='lecture-title'>
              1A 電視還是強勢媒體嗎? 匯流平台下的內容多元與產業政策
            </p>
            <p>主持人：洪貞玲教授</p>
            <p>與談人：</p>
            <p>鄭麗君／文化總會副會長、前文化部長</p>
            <p>郭冠群／中嘉集團董事長</p>
            <p>魏惠珍／中華電信副總經理</p>
            <p>錢大衛／台灣線上影視產業協會理事長</p>
            <p>陳炳宏／台師大大傳所教授</p>
          </td>
          <td valign='top'>
            <p className='lecture-title'>
              1B 如果新聞消失了?! 當前新聞業的發展與挑戰
            </p>
            <p>主持人：張錦華教授</p>
            <p>與談人：</p>
            <p>吳迎春／雜誌公會理事長、天下雜誌社長</p>
            <p>莊豐嘉／華視總經理</p>
            <p>余佳璋／台灣新聞記者協會顧問、前公視國際新聞製作人</p>
            <p>黃哲斌／媒體專欄作者</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>10:20-10:40 休息</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td colSpan='2'>
            <p className='text-center'>10:40-12:00</p>
            <p className='text-center'>新聞危機</p>
          </td>
        </tr>
        <tr className='bg-color' valign='top'>
          <td>
            <p className='lecture-title'>
              2A 誰還在乎新聞真實？探討假訊息與事實查證
            </p>
            <p>主持人：王泰俐教授</p>
            <p>與談人：</p>
            <p>詹怡宜／ TVBS 新聞部副總經理、STBA 新聞自律委員會前主委</p>
            <p>陳立人／LINE Taiwan 董事總經理</p>
            <p>唐鳳／行政院政務委員</p>
            <p>胡元輝／中正大學傳播系教授、台灣事實查核中心董事長</p>
          </td>
          <td>
            <p className='lecture-title'>
              2B 好新聞應該付費? 探索一個新的商業模式{' '}
            </p>
            <p>主持人：林照真教授</p>
            <p>與談人：</p>
            <p>蕭衡倩／聯合報內容長</p>
            <p>吳琬瑜／天下雜誌共同執行長暨內容長</p>
            <p>王銘岳／關鍵評論網行銷長 </p>
            <p>胡光夏／世新大學傳播學院院長</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>12:00-1:00 午餐</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td colSpan='2'>
            <p className='text-center'>1:00-2:20</p>
            <p className='text-center'>新聞實踐</p>
          </td>
        </tr>
        <tr className='bg-color' valign='top'>
          <td>
            <p className='lecture-title'>3A 資料分析作為新聞技能</p>
            <p>主持人：謝吉隆副教授</p>
            <p>與談人：</p>
            <p>史書華／天下雜誌主編</p>
            <p>李又如／Readr 記者、專題製作人</p>
            <p>柯皓翔／報導者數據記者</p>
            <p>李怡志／政大傳院助理教授級專技人員</p>
          </td>
          <td>
            <p className='lecture-title'>3B 國際新聞與在地觀點</p>
            <p>主持人：劉好迪副教授 Adrian Rauchfleisch </p>
            <p>與談人：</p>
            <p>Cédric Alviani ／無國界記者組織東亞辦公處長(RSF)</p>
            <p>William Yang ／德國之聲特派記者</p>
            <p>Andrew Ryan ／Taiwan Plus 新聞部副主任</p>
            <p>Natalie Tso ／Rti 中央廣播電台英語組召集人 </p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>2:20-2:40 休息</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td colSpan='2'>
            <p className='text-center'>2:40-4:10</p>
            <p className='text-center'>新聞重建</p>
          </td>
        </tr>
        <tr className='bg-color'>
          <td>
            <p className='lecture-title'>4A 社群媒體的新聞生態與平台責任</p>
            <p>主持人：林麗雲教授</p>
            <p>與談人：</p>
            <p>陳幼臻／Google 台灣公共政策資深協理</p>
            <p>陳奕儒／Facebook 台灣公共事務部協理</p>
            <p>魏杏芳／公平交易委員會委員</p>
            <p>劉昌德／政大新聞系教授、傳播學院研究中心主任</p>
          </td>
          <td>
            <p className='lecture-title'>4B 新聞創新與永續營運模式</p>
            <p>主持人： 谷玲玲副教授</p>
            <p>與談人：</p>
            <p>梁永煌／今周刊發行人</p>
            <p>何榮幸／報導者創辦人</p>
            <p>張潔平／Matters 創辦人</p>
            <p>陳順孝／輔仁大學新聞系系主任</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>4:10-5:00</p>
            <p className='text-center'>閉幕座談</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p>主持人：洪貞玲教授 與談人：新聞所教師</p>
            <p>各場次主持人總結報告</p>
            <p>新聞實踐、產業與政策</p>
            <p>新聞教育的下一步 </p>
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <table>
      <thead>
        <tr>
          <th>
            <p>時間</p>
          </th>
          <th colSpan='2'>
            <p>場次、主題及參與者</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>8:30-9:00 開幕</p>
            <p className='text-center'>貴賓致詞</p>
            <p className='text-center'>邀請主管機關、媒體公協會、新聞獎機構</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>9:00-10:20 </p>
            <p>新聞匯流</p>
          </td>
          <td>
            <p className='lecture-title'>
              1A 電視還是強勢媒體嗎? 匯流平台下的內容多元與產業政策
            </p>
            <p>主持人：洪貞玲教授</p>
            <p>與談人：</p>
            <p>鄭麗君／文化總會副會長、前文化部長</p>
            <p>郭冠群／中嘉集團董事長</p>
            <p>魏惠珍／中華電信副總經理</p>
            <p>錢大衛／台灣線上影視產業協會理事長</p>
            <p>陳炳宏／台師大大傳所教授</p>
          </td>
          <td valign='top'>
            <p className='lecture-title'>
              1B 如果新聞消失了?! 當前新聞業的發展與挑戰
            </p>
            <p>主持人：張錦華教授</p>
            <p>與談人：</p>
            <p>吳迎春／雜誌公會理事長、天下雜誌社長</p>
            <p>莊豐嘉／華視總經理</p>
            <p>余佳璋／台灣新聞記者協會顧問、前公視國際新聞製作人</p>
            <p>黃哲斌／媒體專欄作者</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>10:20-10:40 休息</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>10:40-12:00 </p>
            <p>新聞危機</p>
          </td>
          <td>
            <p className='lecture-title'>
              2A 誰還在乎新聞真實？探討假訊息與事實查證
            </p>
            <p>主持人：王泰俐教授</p>
            <p>與談人：</p>
            <p>詹怡宜／ TVBS 新聞部副總經理、STBA 新聞自律委員會前主委</p>
            <p>陳立人／LINE Taiwan 董事總經理</p>
            <p>唐鳳／行政院政務委員</p>
            <p>胡元輝／中正大學傳播系教授、台灣事實查核中心董事長</p>
          </td>
          <td>
            <p className='lecture-title'>
              2B 好新聞應該付費? 探索一個新的商業模式{' '}
            </p>
            <p>主持人：林照真教授</p>
            <p>與談人：</p>
            <p>蕭衡倩／聯合報內容長</p>
            <p>吳琬瑜／天下雜誌共同執行長暨內容長</p>
            <p>王銘岳／關鍵評論網行銷長 </p>
            <p>胡光夏／世新大學傳播學院院長</p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>12:00-1:00 午餐</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>1:00-2:20 </p>
            <p>新聞實踐</p>
          </td>
          <td>
            <p className='lecture-title'>3A 資料分析作為新聞技能</p>
            <p>主持人：謝吉隆副教授</p>
            <p>與談人：</p>
            <p>史書華／天下雜誌主編</p>
            <p>李又如／Readr 記者、專題製作人</p>
            <p>柯皓翔／報導者數據記者</p>
            <p>李怡志／政大傳院助理教授級專技人員</p>
          </td>
          <td>
            <p className='lecture-title'>3B 國際新聞與在地觀點</p>
            <p>主持人：劉好迪副教授 Adrian Rauchfleisch </p>
            <p>與談人：</p>
            <p>Cédric Alviani ／無國界記者組織東亞辦公處長(RSF)</p>
            <p>William Yang ／德國之聲特派記者</p>
            <p>Andrew Ryan ／Taiwan Plus 新聞部副主任</p>
            <p>Natalie Tso ／Rti 中央廣播電台英語組召集人 </p>
          </td>
        </tr>
        <tr>
          <td colSpan='2'>
            <p className='text-center'>2:20-2:40 休息</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>2:40-4:10 </p>
            <p>新聞重建</p>
          </td>
          <td>
            <p className='lecture-title'>4A 社群媒體的新聞生態與平台責任</p>
            <p>主持人：林麗雲教授</p>
            <p>與談人：</p>
            <p>陳幼臻／Google 台灣公共政策資深協理</p>
            <p>陳奕儒／Facebook 台灣公共事務部協理</p>
            <p>魏杏芳／公平交易委員會委員</p>
            <p>劉昌德／政大新聞系教授、傳播學院研究中心主任</p>
          </td>
          <td>
            <p className='lecture-title'>4B 新聞創新與永續營運模式</p>
            <p>主持人： 谷玲玲副教授</p>
            <p>與談人：</p>
            <p>梁永煌／今周刊發行人</p>
            <p>何榮幸／報導者創辦人</p>
            <p>張潔平／Matters 創辦人</p>
            <p>陳順孝／輔仁大學新聞系系主任</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>4:10-5:00 </p>
            <p>閉幕座談</p>
          </td>
          <td colSpan='2'>
            <p>主持人：洪貞玲教授 與談人：新聞所教師</p>
            <p>各場次主持人總結報告</p>
            <p>新聞實踐、產業與政策</p>
            <p>新聞教育的下一步 </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Agenda;
