import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [aInput, setAInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userinputs: aInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAInput("");
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
        <form onSubmit={onSubmit}>
          
          <input
            type="text"
            name="ainput"
            placeholder="输入关键字"
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
