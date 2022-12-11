import Head from "next/head";
import { useState } from 'react';
import styles from "./index.module.css";

export default function Home() {
  const [gender, setGender] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();

async function onSubmit(event) {
    event.preventDefault();
    try {
      // 这里使用`fetch`来模拟异步提交表单数据
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender: gender,
          inputValue: inputValue,
        }),
      });
      const data = await response.json();
      // 如果请求成功，这里可以处理返回的数据
      console.log(data);
      setResult(data.result);
      setInputValue("");      
    } catch (error) {
      // 如果请求失败，这里可以捕获错误
      console.error(error);
    }
  }
  return (
    <div>
      <Head>
        <title>6D OpenAI Quickstart</title>
        <link rel="icon" href="/6d.jpg" />
      </Head>
    
    <main className={styles.main}>
        <img src="/6d.jpg" className={styles.icon} />
        <h4>六度open ai测试</h4>
        <h3>输入有关信息，自动生成网名</h3>       

    <form onSubmit={onSubmit}>
      <label>
        性别：
        <select value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="">请选择</option>
          <option value="男">男</option>
          <option value="女">女</option>
          <option value="其他">其他</option>
        </select>
      </label>
      <br />
      <label>
        特征：
        <textarea id="myTextArea"
         placeholder="Input your questions here"
         value={inputValue}
         onChange={(event) => setInputValue(event.target.value)}
         ></textarea>
 {/*        <input
          type="text"
          placeholder="Input your questions here"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        /> */}

      </label>
      <br />
      <button type="submit">给我点想法</button>
    </form>
    <div className={styles.result}>{result}</div>
    <div><footer><br></br>基于Open AI开发</footer> </div>
      </main>
    </div>

  );
}
