import Head from "next/head";
import React, { useState } from 'react';
import styles from "./index.module.css";

export default function Home() {
  const [gender, setGender] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState();

async function handleSubmit(event) {
    event.preventDefault();
    try {
      // 这里使用`fetch`来模拟异步提交表单数据
      const response = await fetch("/api/generate", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
          gender: this.state.gender,
          inputValue: this.state.inputValue,
        }),
      });
      const data = await response.json();
      // 如果请求成功，这里可以处理返回的数据
      console.log(data);
      setResult(data.result);
      setAnimalInput("");      
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
        <h3>输入关键字</h3>       
    
    <form onSubmit={handleSubmit}>
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
        输入：
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">给我的想法</button>
    </form>
    <div className={styles.result}>{result}</div>
      </main>
    </div>

  );
}
