import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // [] を空にすると最初の１回だけ実行、numにするとnumに関心を持つ。
  // []にfaceShowFlagがないことで、ESlintでproblemsが出るが今回はnumに対してのみ動かすためこれで正しい。
  // 今回は eslint-disable-next-lineでエラーが出ないようここだけに適用
  // ファイル全体にエラーを出さない場合は ⇨ /* eslint react-hooks/exhaustive-deps: off */

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <p>{num}</p>
      {faceShowFlag && <p>(￣∇￣)</p>}
    </>
  );
  // <>,</> React.Fragmentが省略されている
  // {} javascriptとして認識される(関数)
  // styleを書く場合は{{ }} となる
  // props は<ColorfulMessage color="blue" message="お元気ですか？" />でも可
};

export default App;
